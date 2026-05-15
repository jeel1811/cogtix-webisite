import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactPayload {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  source?: string
}

export const runtime = 'nodejs'

const FIELD_LABELS: Record<string, string> = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phone: 'Phone',
  message: 'Message',
  source: 'Submitted from',
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function generateEmailContent(data: Record<string, string | undefined>) {
  const stringData = Object.entries(data).reduce((acc, [key, val]) => {
    const label = FIELD_LABELS[key] ?? key
    return `${acc}${label}:\n${val ?? ''}\n\n`
  }, '')

  const htmlData = Object.entries(data).reduce((acc, [key, val]) => {
    const label = FIELD_LABELS[key] ?? key
    const safe = escapeHtml(val ?? '')
    return `${acc}<h3 style="color:#1f2937;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:600;font-size:14px;margin:0 0 6px;">${label}</h3><p style="color:#374151;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;line-height:22px;margin:0 0 18px;white-space:pre-wrap;">${safe}</p>`
  }, '')

  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ')

  return {
    text: stringData,
    html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f9fafb;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 0;">
        <tr><td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr><td style="background:linear-gradient(90deg,#2563eb,#0ea5e9);padding:24px 28px;color:#ffffff;">
              <h1 style="margin:0;font-size:20px;font-weight:700;">New Contact Form Message</h1>
              <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">From: ${escapeHtml(fullName || 'Website visitor')}</p>
            </td></tr>
            <tr><td style="padding:24px 28px;">${htmlData}</td></tr>
            <tr><td style="padding:16px 28px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">Sent automatically from the Cogtix contact form.</td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>`,
  }
}

const EMAIL_VALIDATION = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export async function POST(req: Request) {
  let payload: ContactPayload
  try {
    payload = (await req.json()) as ContactPayload
  } catch {
    return NextResponse.json({ message: 'Invalid JSON payload' }, { status: 400 })
  }

  const required: (keyof ContactPayload)[] = ['firstName', 'lastName', 'email', 'phone', 'message']
  const missing = required.filter((k) => {
    const v = payload[k]
    return v == null || (typeof v === 'string' && v.trim() === '')
  })

  if (missing.length > 0) {
    return NextResponse.json(
      { message: `Missing fields: ${missing.join(', ')}` },
      { status: 400 },
    )
  }

  if (!EMAIL_VALIDATION.test(payload.email!.trim())) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 })
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
  const smtpPort = Number(process.env.SMTP_PORT ?? 465)
  const smtpSecure = (process.env.SMTP_SECURE ?? 'true') === 'true'
  const mailTo = process.env.CONTACT_TO ?? process.env.APPLY_JOB_TO ?? smtpUser
  const mailFrom = process.env.CONTACT_FROM ?? process.env.APPLY_JOB_FROM ?? smtpUser

  if (!smtpUser || !smtpPassword) {
    return NextResponse.json(
      {
        message:
          'Email service is not configured. Please set SMTP_USER and SMTP_PASSWORD in the environment.',
      },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })

  const emailData = {
    firstName: payload.firstName?.trim(),
    lastName: payload.lastName?.trim(),
    email: payload.email?.trim(),
    phone: payload.phone?.trim(),
    message: payload.message?.trim(),
    ...(payload.source?.trim() ? { source: payload.source.trim() } : {}),
  }

  const content = generateEmailContent(emailData)
  const fullName = `${emailData.firstName} ${emailData.lastName}`.trim()

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: emailData.email,
      subject: `Contact Form | ${fullName}`,
      text: content.text,
      html: content.html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send contact email.'
    console.error('[contact] sendMail failed:', message)
    return NextResponse.json({ message }, { status: 500 })
  }
}
