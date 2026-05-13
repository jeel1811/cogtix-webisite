import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ApplyJobPayload {
  fullName?: string
  email?: string
  phone?: string
  experience?: string
  currentJobLocation?: string
  noticePeriod?: string
  currentCtc?: string
  expectedCtc?: string
  position?: string
  fileName?: string
  fileBytes?: number[]
}

export const runtime = 'nodejs'

const CONTACT_MESSAGE_FIELDS: Record<string, string> = {
  fullName: 'Full Name',
  email: 'Email',
  phone: 'Phone',
  experience: 'Experience',
  currentJobLocation: 'Current Job Location',
  noticePeriod: 'Notice Period',
  position: 'Position',
  currentCtc: 'Current CTC',
  expectedCtc: 'Expected CTC',
}

function generateEmailContent(data: Record<string, string | undefined>) {
  const stringData = Object.entries(data).reduce((acc, [key, val]) => {
    const label = CONTACT_MESSAGE_FIELDS[key] ?? key
    return `${acc}${label}:\n${val ?? ''}\n\n`
  }, '')

  const htmlData = Object.entries(data).reduce((acc, [key, val]) => {
    const label = CONTACT_MESSAGE_FIELDS[key] ?? key
    return `${acc}<h3 style="color:#1f2937;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:600;font-size:14px;margin:0 0 6px;">${label}</h3><p style="color:#374151;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;line-height:22px;margin:0 0 18px;">${val ?? ''}</p>`
  }, '')

  return {
    text: stringData,
    html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f9fafb;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 0;">
        <tr><td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr><td style="background:linear-gradient(90deg,#2563eb,#0ea5e9);padding:24px 28px;color:#ffffff;">
              <h1 style="margin:0;font-size:20px;font-weight:700;">New Job Application</h1>
              <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">Position: ${data.position ?? '—'}</p>
            </td></tr>
            <tr><td style="padding:24px 28px;">${htmlData}</td></tr>
            <tr><td style="padding:16px 28px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">Sent automatically from the Cogtix careers form.</td></tr>
          </table>
        </td></tr>
      </table>
    </body></html>`,
  }
}

export async function POST(req: Request) {
  let payload: ApplyJobPayload
  try {
    payload = (await req.json()) as ApplyJobPayload
  } catch {
    return NextResponse.json({ message: 'Invalid JSON payload' }, { status: 400 })
  }

  const required: (keyof ApplyJobPayload)[] = [
    'fullName',
    'email',
    'phone',
    'experience',
    'currentJobLocation',
    'noticePeriod',
    'currentCtc',
    'expectedCtc',
    'fileName',
    'fileBytes',
  ]
  const missing = required.filter((k) => {
    const v = payload[k]
    return (
      v == null ||
      (typeof v === 'string' && v.trim() === '') ||
      (Array.isArray(v) && v.length === 0)
    )
  })

  if (missing.length > 0) {
    return NextResponse.json(
      { message: `Missing fields: ${missing.join(', ')}` },
      { status: 400 },
    )
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  const smtpHost = process.env.SMTP_HOST ?? 'smtp.gmail.com'
  const smtpPort = Number(process.env.SMTP_PORT ?? 465)
  const smtpSecure = (process.env.SMTP_SECURE ?? 'true') === 'true'
  const mailTo = process.env.APPLY_JOB_TO ?? smtpUser
  const mailFrom = process.env.APPLY_JOB_FROM ?? smtpUser

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

  const buffer = Buffer.from(payload.fileBytes ?? [])
  const content = generateEmailContent({
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    experience: payload.experience,
    currentJobLocation: payload.currentJobLocation,
    noticePeriod: payload.noticePeriod,
    position: payload.position,
    currentCtc: payload.currentCtc,
    expectedCtc: payload.expectedCtc,
  })

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: payload.email,
      subject: `Job Application Received for ${payload.position ?? 'Open role'} | ${payload.currentJobLocation ?? ''}`.trim(),
      text: content.text,
      html: content.html,
      attachments: [
        {
          filename: payload.fileName ?? 'resume.pdf',
          content: buffer,
        },
      ],
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send application email.'
    console.error('[apply-job] sendMail failed:', message)
    return NextResponse.json({ message }, { status: 500 })
  }
}
