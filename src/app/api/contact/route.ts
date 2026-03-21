import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
      return NextResponse.json({ error: "Server configuration error. Contact admin directly." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // 1. Send Email to Owner
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name} (Portfolio)`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #333;">New Contact Message 👋</h2>
          <p style="color: #555;"><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #444; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    // 2. Send Auto-Reply to User
    await transporter.sendMail({
      from: `"Piyush Singh" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out! 👋",
      text: "Thanks for reaching out. I will get back to you soon.You can contact me on Mob no +91 9936693329 .",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #111;">Hi ${name},</h2>
          <p style="color: #444; font-size: 16px; line-height: 1.5;">
            Thanks for reaching out! I've received your message and will get back to you as soon as possible.
          </p>
          <p style="color: #444; font-size: 16px; line-height: 1.5;">
            In the meantime, feel free to check out more of my work on <a href="https://github.com/piyushsingh19022002" style="color: #2563eb;">GitHub</a>.
          </p>
          <br/>
          <p style="color: #888; font-size: 14px;">Best regards,</p>
          <p style="font-weight: bold; color: #111; font-size: 16px;">Piyush Singh</p>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
          <p style="color: #aaa; font-size: 12px; text-align: center;">This is an automated confirmation message. Please do not reply directly to this email.</p>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully!" }, { status: 200 });

  } catch (error: any) {
    console.error("API Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
