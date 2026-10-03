// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ROLE_DESCRIPTIONS = {
  "solutions-engineering": "Solutions Engineering",
  "scientific-implementation": "Scientific Implementation",
  "technical-consulting": "Technical Consulting",
  "customer-success": "Technical Customer Success",
  "rd-software": "R&D Software Engineering",
  "scientific-data-ai": "Scientific Data or AI",
  "plm-lab-informatics": "PLM or Lab Informatics",
  "other-specialized-role": "Other Specialized Role",
} as const;

type RoleValue = keyof typeof ROLE_DESCRIPTIONS;

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  message?: unknown;
  website?: unknown;
};

export async function POST(request: NextRequest) {
  try {
    let body: ContactRequestBody;

    try {
      body = (await request.json()) as ContactRequestBody;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    /*
     * Optional honeypot field.
     * If you later add a hidden "website" input to the form, bots that fill it
     * will receive a successful response without triggering an email.
     */
    if (
      typeof body.website === "string" &&
      body.website.trim().length > 0
    ) {
      return NextResponse.json(
        { message: "Enquiry received." },
        { status: 200 }
      );
    }

    const name = normalizeSingleLine(body.name);
    const email = normalizeSingleLine(body.email).toLowerCase();
    const company = normalizeSingleLine(body.company);
    const role = normalizeSingleLine(body.role);
    const message = normalizeMultiline(body.message);

    if (!name || !email || !company || !role || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 150 ||
      role.length > 80 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields exceed the allowed length." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!isValidRole(role)) {
      return NextResponse.json(
        { error: "Please select a valid role category." },
        { status: 400 }
      );
    }

    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;

    const senderEmail =
      process.env.CONTACT_SENDER_EMAIL || "umar@gritliy.com";

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL || "umar@gritliy.com";

    if (!tenantId || !clientId || !clientSecret) {
      console.error(
        "Contact route configuration error: missing Azure credentials."
      );

      return NextResponse.json(
        { error: "The contact service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const credential = new ClientSecretCredential(
      tenantId,
      clientId,
      clientSecret
    );

    const tokenResponse = await credential.getToken(
      "https://graph.microsoft.com/.default"
    );

    if (!tokenResponse?.token) {
      throw new Error("Microsoft Graph access token was not obtained.");
    }

    const graphClient = Client.init({
      authProvider: (done) => {
        done(null, tokenResponse.token);
      },
    });

    const roleDescription = ROLE_DESCRIPTIONS[role];

    /*
     * Escape all user-controlled values before inserting them into HTML.
     * This prevents contact-form submissions from injecting arbitrary markup
     * into the emails.
     */
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeRole = escapeHtml(roleDescription);
    const safeMessage = escapeHtml(message);

    const submittedAt = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Karachi",
      timeZoneName: "short",
    }).format(new Date());

    const adminEmailHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; color: #252525;">
        <div style="background: linear-gradient(135deg, #4A4844 0%, #2C2825 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 26px;">
            GRITLIY
          </h1>

          <p style="color: #e5e5e5; margin: 8px 0 0; font-size: 14px;">
            New R&amp;D software hiring enquiry
          </p>
        </div>

        <div style="background-color: #f8f8f8; padding: 30px; border: 1px solid #e2e2e2; border-top: none;">
          <h2 style="color: #252525; margin: 0 0 20px;">
            Search details
          </h2>

          <div style="background-color: #ffffff; padding: 22px; border-radius: 10px; border: 1px solid #e2e2e2;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 145px; padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                  <strong>Name</strong>
                </td>

                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                  <strong>Email</strong>
                </td>

                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                  <a href="mailto:${safeEmail}" style="color: #4A4844;">
                    ${safeEmail}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                  <strong>Company</strong>
                </td>

                <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee;">
                  ${safeCompany}
                </td>
              </tr>

              <tr>
                <td style="padding: 10px 0;">
                  <strong>Hiring for</strong>
                </td>

                <td style="padding: 10px 0;">
                  ${safeRole}
                </td>
              </tr>
            </table>
          </div>

          <div style="background-color: #ffffff; padding: 22px; border-radius: 10px; margin-top: 20px; border: 1px solid #e2e2e2;">
            <h3 style="color: #4A4844; margin: 0 0 12px;">
              Hiring requirements
            </h3>

            <p style="color: #333333; line-height: 1.7; white-space: pre-wrap; margin: 0;">
              ${safeMessage}
            </p>
          </div>

          <div style="text-align: center; margin-top: 28px;">
            <a
              href="mailto:${safeEmail}"
              style="display: inline-block; padding: 13px 28px; background-color: #4A4844; color: #ffffff; text-decoration: none; border-radius: 999px; font-weight: bold;"
            >
              Reply to ${safeName}
            </a>
          </div>
        </div>

        <div style="background-color: #eeeeee; padding: 18px; text-align: center; border-radius: 0 0 12px 12px;">
          <p style="color: #666666; font-size: 12px; margin: 0;">
            Submitted through gritliy.com on ${submittedAt}
          </p>
        </div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; color: #252525;">
        <div style="background: linear-gradient(135deg, #4A4844 0%, #2C2825 100%); padding: 38px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 30px; letter-spacing: 1px;">
            GRITLIY
          </h1>

          <p style="color: #e5e5e5; margin: 10px 0 0; font-size: 14px;">
            Specialist recruiting for R&amp;D software companies
          </p>
        </div>

        <div style="background-color: #ffffff; padding: 38px; border: 1px solid #e2e2e2; border-top: none;">
          <h2 style="color: #252525; margin: 0 0 20px;">
            Thank you for reaching out, ${safeName}.
          </h2>

          <p style="line-height: 1.8; color: #555555; font-size: 16px;">
            Your enquiry regarding
            <strong style="color: #4A4844;">${safeRole}</strong>
            hiring at
            <strong style="color: #4A4844;">${safeCompany}</strong>
            has been received.
          </p>

          <div style="background-color: #f7f7f7; padding: 24px; border-radius: 10px; margin: 28px 0; border-left: 4px solid #4A4844;">
            <h3 style="color: #4A4844; margin: 0 0 14px;">
              What happens next?
            </h3>

            <ul style="color: #555555; line-height: 1.9; padding-left: 20px; margin-bottom: 0;">
              <li>Umar will review the role and search requirements.</li>
              <li>The scientific, technical and customer-facing profile will be assessed.</li>
              <li>If the search is aligned, Umar will contact you directly to arrange an initial discussion.</li>
            </ul>
          </div>

          <p style="line-height: 1.8; color: #555555; font-size: 16px;">
            In the meantime, you can reply directly to this email if you would
            like to add the job description, compensation range, location or
            hiring timeline.
          </p>

          <div style="margin-top: 30px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
            <p style="color: #555555; font-size: 14px; line-height: 1.7; margin: 0;">
              <strong style="color: #252525;">Umar Aftab</strong><br />
              Founder | Software Engineer &amp; Technical Recruiter<br />
              GRITLIY<br />
              <a
                href="mailto:${escapeHtml(senderEmail)}"
                style="color: #4A4844;"
              >
                ${escapeHtml(senderEmail)}
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://www.linkedin.com/in/umaraftab/"
                style="color: #4A4844;"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div style="background-color: #eeeeee; padding: 18px; text-align: center; border-radius: 0 0 12px 12px;">
          <p style="color: #777777; font-size: 12px; margin: 0;">
            You received this message because an enquiry was submitted using
            your email address on gritliy.com.
          </p>
        </div>
      </div>
    `;

    const safeSubjectName = name
      .replace(/[\r\n]+/g, " ")
      .slice(0, 80);

    const safeSubjectCompany = company
      .replace(/[\r\n]+/g, " ")
      .slice(0, 100);

    const graphSenderPath = encodeURIComponent(senderEmail);

    const adminEmail = {
      message: {
        subject: `New R&D hiring enquiry: ${safeSubjectCompany} — ${safeSubjectName}`,
        body: {
          contentType: "HTML",
          content: adminEmailHtml,
        },
        toRecipients: [
          {
            emailAddress: {
              address: recipientEmail,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: email,
              name,
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    /*
     * When using /users/{sender}/sendMail, Microsoft Graph already knows the
     * sender. A separate "from" property is unnecessary and can cause errors
     * with some application-permission configurations.
     */
    const autoReplyEmail = {
      message: {
        subject: "We received your hiring enquiry | GRITLIY",
        body: {
          contentType: "HTML",
          content: autoReplyHtml,
        },
        toRecipients: [
          {
            emailAddress: {
              address: email,
              name,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: senderEmail,
              name: "Umar Aftab — GRITLIY",
            },
          },
        ],
      },
      saveToSentItems: true,
    };

    /*
     * Send the internal notification first. If that succeeds but the optional
     * acknowledgement fails, preserve the enquiry and still return success.
     */
    await graphClient
      .api(`/users/${graphSenderPath}/sendMail`)
      .post(adminEmail);

    try {
      await graphClient
        .api(`/users/${graphSenderPath}/sendMail`)
        .post(autoReplyEmail);
    } catch (autoReplyError) {
      console.error(
        "Contact enquiry was received, but the auto-reply failed:",
        autoReplyError
      );
    }

    return NextResponse.json(
      { message: "Enquiry sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact email error:", error);

    if (process.env.NODE_ENV === "development") {
      const details = error as {
        message?: string;
        code?: string;
        statusCode?: number;
        requestId?: string;
      };

      console.error("Microsoft Graph error details:", {
        message: details.message,
        code: details.code,
        statusCode: details.statusCode,
        requestId: details.requestId,
      });
    }

    return NextResponse.json(
      {
        error:
          "Your enquiry could not be sent. Please email umar@gritliy.com directly.",
      },
      { status: 500 }
    );
  }
}

function normalizeSingleLine(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

function normalizeMultiline(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidRole(role: string): role is RoleValue {
  return Object.prototype.hasOwnProperty.call(
    ROLE_DESCRIPTIONS,
    role
  );
}

function escapeHtml(value: string): string {
  const replacements: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(
    /[&<>"']/g,
    (character) => replacements[character]
  );
}