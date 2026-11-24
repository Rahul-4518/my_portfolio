'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error' | 'unconfigured'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'message', string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (formData.get('company')) return { status: 'success', message: 'Thanks! Your message was sent.' }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: ContactState['errors'] = {}
  if (name.length < 2 || name.length > 100) errors.name = 'Please enter your name.'
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = 'Please enter a valid email address.'
  if (message.length < 10 || message.length > 5000) errors.message = 'Message should be 10–5000 characters.'
  if (Object.keys(errors).length) return { status: 'error', errors, message: 'Please fix the highlighted fields.' }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: 'unconfigured',
      message: "The email service isn't set up yet — you can send your message directly by email instead.",
    }
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL ?? 'rahulsurendrababu45@gmail.com'],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      html: `<p><strong>${escapeHtml(name)}</strong> (${escapeHtml(email)}) wrote:</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  })

  if (!res.ok) {
    return { status: 'error', message: 'Something went wrong sending your message. Please try email instead.' }
  }
  return { status: 'success', message: "Thanks! Your message was sent — I'll get back to you soon." }
}
