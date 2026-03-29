import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'lukman439026@gmail.com',
      replyTo: email,
      subject: `📬 New Message from ${name || email} — Portfolio`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f1a; border-radius: 16px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #6d28d9, #4f46e5); padding: 32px 40px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; letter-spacing: -0.5px;">
              📬 New Portfolio Message
            </h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.7); font-size: 14px;">
              Someone reached out through your portfolio website
            </p>
          </div>
          <!-- Body -->
          <div style="padding: 32px 40px; background: #13131f;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 80px;">From</td>
                <td style="padding: 10px 0; color: #f9fafb; font-size: 15px; font-weight: 500;">${name || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #9ca3af; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #818cf8; text-decoration: none; font-size: 15px;">${email}</a></td>
              </tr>
            </table>
            <!-- Message Box -->
            <div style="background: #1e1e30; border-left: 4px solid #6d28d9; border-radius: 8px; padding: 20px 24px;">
              <p style="margin: 0 0 8px; color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Message</p>
              <p style="margin: 0; color: #e5e7eb; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <!-- CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6d28d9, #4f46e5); color: white; text-decoration: none; padding: 12px 32px; border-radius: 50px; font-size: 14px; font-weight: 600; letter-spacing: 0.03em;">
                ↩ Reply to ${name || 'this message'}
              </a>
            </div>
          </div>
          <!-- Footer -->
          <div style="padding: 20px 40px; background: #0d0d1a; text-align: center;">
            <p style="margin: 0; color: #4b5563; font-size: 12px;">Sent from your portfolio website at lukman.dev</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
