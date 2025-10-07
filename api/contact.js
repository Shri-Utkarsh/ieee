import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, subject, message, studentId, consent } = req.body || {};

    if (!firstName || !lastName || !email || !subject || !message || !consent) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER;

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Student ID:</strong> ${studentId || "N/A"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `[IEEE SB] Contact: ${subject}`,
      replyTo: email,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nStudent ID: ${studentId || "N/A"}\n\n${message}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("/api/contact error", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
