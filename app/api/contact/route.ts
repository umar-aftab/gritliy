import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Create a transporter using SMTP settings
    // Option 1: Using Gmail (requires app-specific password)
    // const transporter = nodemailer.createTransporter({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER, // Your Gmail address
    //     pass: process.env.EMAIL_PASS, // Your Gmail app password (not regular password)
    //   },
    // });

    // Option 2: Using a professional email service (recommended for production)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com', 'smtp.sendgrid.net'
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to Nadeem (or admin)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'nadeem@gritliy.com', // Nadeem's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Role Type:</strong> ${role}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This email was sent from the GRITLIY contact form.</p>
        </div>
      `,
    };

    // Auto-reply email to the person who filled the form
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting GRITLIY',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out, ${name}!</h2>
          <p>We've received your message and appreciate your interest in GRITLIY's recruiting services.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555;">What happens next?</h3>
            <ul style="color: #666;">
              <li>Our team will review your requirements within 24 hours</li>
              <li>Nadeem or a member of our team will reach out to schedule a consultation</li>
              <li>We'll discuss your specific needs and how we can help build your engineering team</li>
            </ul>
          </div>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Connect with Nadeem on <a href="https://linkedin.com/in/nadeemshaykh">LinkedIn</a></li>
            <li>Learn more about our services at <a href="https://gritliy.com">gritliy.com</a></li>
          </ul>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Best regards,<br>
            The GRITLIY Team<br>
            Engineering Excellence. One Visionary Hire at a Time.
          </p>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}