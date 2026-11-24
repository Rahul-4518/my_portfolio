'use client'

import { CheckCircle2, Loader2, Mail, Send } from 'lucide-react'
import { useActionState, useRef } from 'react'
import { type ContactState, sendContact } from '@/app/actions/contact'
import { profile } from '@/lib/data'
import { cn } from '@/lib/utils'

const initial: ContactState = { status: 'idle' }

const fieldClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-3 focus:ring-primary/20 aria-invalid:border-destructive'

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial)
  const formRef = useRef<HTMLFormElement>(null)

  if (state.status === 'success') {
    return (
      <div className="glass flex flex-col items-center rounded-2xl p-10 text-center" role="status">
        <CheckCircle2 className="size-10 text-emerald-400" aria-hidden="true" />
        <p className="mt-4 text-lg font-medium">{state.message}</p>
      </div>
    )
  }

  const mailto = () => {
    const data = formRef.current ? new FormData(formRef.current) : null
    const subject = encodeURIComponent(`Portfolio message from ${data?.get('name') ?? ''}`)
    const body = encodeURIComponent(String(data?.get('message') ?? ''))
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <form ref={formRef} action={action} className="glass space-y-5 rounded-2xl p-6 md:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? 'name-error' : undefined}
          />
          {state.errors?.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {state.errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? 'email-error' : undefined}
          />
          {state.errors?.email ? (
            <p id="email-error" className="mt-1.5 text-xs text-destructive">
              {state.errors.email}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className={cn(fieldClass, 'resize-none')}
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
        />
        {state.errors?.message ? (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {state.errors.message}
          </p>
        ) : null}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {state.message && state.status !== 'idle' ? (
        <p
          role="alert"
          className={cn(
            'rounded-lg px-4 py-3 text-sm',
            state.status === 'unconfigured' ? 'bg-secondary text-foreground' : 'bg-destructive/10 text-destructive',
          )}
        >
          {state.message}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={pending}
          className="bg-gradient-brand inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
          {pending ? 'Sending...' : 'Send Message'}
        </button>
        {state.status === 'unconfigured' || state.status === 'error' ? (
          <a
            href={`mailto:${profile.email}`}
            onClick={(e) => {
              e.currentTarget.href = mailto()
            }}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-primary/50"
          >
            <Mail className="size-4" aria-hidden="true" />
            Send via email app
          </a>
        ) : null}
      </div>
    </form>
  )
}
