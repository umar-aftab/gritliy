// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@microsoft/microsoft-graph-client';
import { ClientSecretCredential } from '@azure/identity';

// Import fetch for Node.js environment
import 'isomorphic-fetch';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, role, message } = await request.json();

    // Validate required fields
    if (!name || !email || !company || !role || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create credentials using Azure Identity
    const credential = new ClientSecretCredential(
      process.env.AZURE_TENANT_ID!,
      process.env.AZURE_CLIENT_ID!,
      process.env.AZURE_CLIENT_SECRET!
    );

    // Get access token
    const tokenResponse = await credential.getToken('https://graph.microsoft.com/.default');
    
    if (!tokenResponse) {
      throw new Error('Failed to obtain access token');
    }

    // Create Graph client
    const client = Client.init({
      authProvider: (done) => {
        done(null, tokenResponse.token);
      }
    });

    // HTML templates for emails
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4A4844 0%, #2C2825 100%); padding: 30px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">GRITLIY</h1>
          <p style="color: #E0E0E0; margin: 5px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none;">
          <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4A4844;">Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4A4844;">Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #4A4844;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong style="color: #4A4844;">Company:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0;"><strong style="color: #4A4844;">Role Type:</strong></td>
                <td style="padding: 10px 0;">${getRoleDescription(role)}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e0e0e0;">
            <h3 style="color: #4A4844; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 30px; background-color: #4A4844; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to ${name}</a>
          </div>
        </div>
        
        <div style="background-color: #f0f0f0; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
          <p style="color: #666; font-size: 12px; margin: 0;">
            Sent from GRITLIY contact form on ${new Date().toLocaleString('en-US', { timeZone: 'America/Denver' })} MST
          </p>
        </div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #4A4844 0%, #2C2825 100%); padding: 40px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 32px; letter-spacing: 2px;">GRITLIY</h1>
          <p style="color: #E0E0E0; margin: 10px 0 0 0; font-size: 14px;">Engineering Excellence. One Visionary Hire at a Time.</p>
        </div>
        
        <div style="background-color: white; padding: 40px; border: 1px solid #e0e0e0; border-top: none;">
          <h2 style="color: #333; margin-top: 0;">Thank you for reaching out, ${name}!</h2>
          
          <p style="line-height: 1.8; color: #555; font-size: 16px;">
            I appreciate your interest in GRITLIY's AI-powered recruiting services for 
            <strong style="color: #4A4844;">${getRoleDescription(role)}</strong> roles at 
            <strong style="color: #4A4844;">${company}</strong>.
          </p>
          
          <div style="background: linear-gradient(135deg, #f9f9f9 0%, #f5f5f5 100%); padding: 25px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #4A4844;">
            <h3 style="color: #4A4844; margin-top: 0;">What happens next?</h3>
            <ul style="color: #666; line-height: 2; padding-left: 20px;">
              <li>I'll review your requirements within <strong>24 hours</strong></li>
              <li>I'll reach out to schedule a <strong>consultation call</strong></li>
              <li>We'll discuss how our <strong>RecruitFlow AI</strong> system can transform your hiring process</li>
              <li>I'll provide a <strong>customized talent acquisition strategy</strong> for your needs</li>
            </ul>
          </div>
          
          <div style="background-color: #4A4844; color: white; padding: 25px; border-radius: 8px; margin: 30px 0;">
            <h3 style="margin-top: 0; color: white;">Why GRITLIY?</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px;">
              <div style="flex: 1; min-width: 200px;">
                <div style="font-size: 28px; font-weight: bold;">95%</div>
                <div style="font-size: 14px; opacity: 0.9;">Success Rate</div>
              </div>
              <div style="flex: 1; min-width: 200px;">
                <div style="font-size: 28px; font-weight: bold;">89%</div>
                <div style="font-size: 14px; opacity: 0.9;">Retention Rate</div>
              </div>
              <div style="flex: 1; min-width: 200px;">
                <div style="font-size: 28px; font-weight: bold;">100+</div>
                <div style="font-size: 14px; opacity: 0.9;">Hard-to-fill roles</div>
              </div>
            </div>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
            <p style="color: #555; margin: 0 0 15px 0; font-weight: bold;">In the meantime, feel free to:</p>
            <ul style="line-height: 1.8; color: #666;">
              <li>Connect with me on <a href="https://linkedin.com/in/nadeemshaykh" style="color: #4A4844; font-weight: bold;">LinkedIn</a></li>
              <li>Visit our website: <a href="https://gritliy.com" style="color: #4A4844; font-weight: bold;">gritliy.com</a></li>
              <li>Schedule a call directly: <a href="mailto:nadeem@gritliy.com" style="color: #4A4844; font-weight: bold;">nadeem@gritliy.com</a></li>
            </ul>
          </div>
        </div>
        
        <div style="background-color: #f0f0f0; padding: 30px; border-radius: 0 0 10px 10px;">
          <table style="width: 100%;">
            <tr>
              <td style="text-align: left;">
                <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">
                  <strong>Nadeem Shaikh</strong><br>
                  Founder & Lead Technical Recruiter<br>
                  GRITLIY<br>
                  Calgary, Alberta
                </p>
              </td>
              <td style="text-align: right; vertical-align: top;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  <a href="https://linkedin.com/in/nadeemshaykh" style="color: #4A4844;">LinkedIn</a> | 
                  <a href="mailto:nadeem@gritliy.com" style="color: #4A4844;">Email</a>
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;

    // Send email to admin (Nadeem)
    const adminEmail = {
      message: {
        subject: `New Contact Form Submission from ${name} - ${company}`,
        body: {
          contentType: 'HTML',
          content: adminEmailHtml
        },
        toRecipients: [
          {
            emailAddress: {
              address: 'nadeem@gritliy.com'
            }
          }
        ],
        replyTo: [
          {
            emailAddress: {
              address: email,
              name: name
            }
          }
        ]
      },
      saveToSentItems: true
    };

    // Send auto-reply to the form submitter
    const autoReplyEmail = {
      message: {
        subject: 'Thank you for contacting GRITLIY - We\'ll be in touch soon!',
        body: {
          contentType: 'HTML',
          content: autoReplyHtml
        },
        toRecipients: [
          {
            emailAddress: {
              address: email,
              name: name
            }
          }
        ],
        from: {
          emailAddress: {
            address: 'nadeem@gritliy.com',
            name: 'Nadeem Shaikh - GRITLIY'
          }
        }
      },
      saveToSentItems: false
    };

    // Send both emails using Microsoft Graph
    await client.api('/users/nadeem@gritliy.com/sendMail').post(adminEmail);
    await client.api('/users/nadeem@gritliy.com/sendMail').post(autoReplyEmail);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Log more details in development
    if (process.env.NODE_ENV === 'development') {
        const errorDetails = error as { message?: string; code?: string; statusCode?: number; requestId?: string };
        console.error('Error details:', {
        message: errorDetails.message,
        code: errorDetails.code,
        statusCode: errorDetails.statusCode,
        requestId: errorDetails.requestId
      });
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

function getRoleDescription(role: string): string {
  const roleMap: { [key: string]: string } = {
    'deep': 'Deep Technology',
    'ai': 'AI Hardware & Semi-conductors',
    'neuro': 'NeuroTech',
    'robotics': 'Autonomous & Robotics',
    'space': 'Space Research & Technology',
    'other': 'Other Technical Roles'
  };
  return roleMap[role] || role;
}