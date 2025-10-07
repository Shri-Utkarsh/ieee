import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
      studentId,
      consent,
    } = req.body || {};

    if (!firstName || !lastName || !email || !subject || !message || !consent) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let transporter;
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: String(process.env.SMTP_SECURE || "false") === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

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

    const previewUrl = nodemailer.getTestMessageUrl?.(info);
    return res.json({ ok: true, previewUrl });
  } catch (err) {
    console.error("/api/contact error", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});


