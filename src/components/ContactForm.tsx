'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { CheckCircle2 } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.enum(['software', 'chatbot', 'ai-agents', 'other']),
  budget: z.enum(['<1000', '1000-5000', '5000-20000', '20000+']),
  message: z.string().min(20, 'Please describe your project in at least 20 characters'),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(values: FormValues) {
    const subject = encodeURIComponent(`New Project Enquiry: ${values.service} from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || 'Not provided'}\nService: ${values.service}\nBudget: ${values.budget}\n\nMessage:\n${values.message}`
    )
    window.location.href = `mailto:info@zentriksolutions.com?subject=${subject}&body=${body}`
    toast.success('Opening your email client...')
    setSent(true)
    reset()
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
          style={{ background: 'rgba(52,199,89,0.12)' }}
        >
          <CheckCircle2 className="h-8 w-8" style={{ color: '#34c759' }} />
        </div>
        <h3 className="mb-2 font-semibold" style={{ fontSize: '21px', color: '#1d1d1f' }}>
          Message Sent!
        </h3>
        <p style={{ color: 'rgba(0,0,0,0.6)' }}>
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm transition-colors hover:underline"
          style={{ color: '#0066cc' }}
        >
          Send another message
        </button>
      </div>
    )
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: '#1d1d1f',
    marginBottom: '6px',
    letterSpacing: '-0.224px',
  }

  const errorStyle: React.CSSProperties = {
    marginTop: '4px',
    fontSize: '12px',
    color: '#ff3b30',
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label style={labelStyle} htmlFor="name">Full Name *</label>
          <input
            id="name"
            {...register('name')}
            placeholder="Tatenda Moyo"
            className="apple-input"
            style={errors.name ? { borderColor: '#ff3b30', boxShadow: '0 0 0 3px rgba(255,59,48,0.2)' } : {}}
          />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>
        <div>
          <label style={labelStyle} htmlFor="email">Email Address *</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="you@company.com"
            className="apple-input"
            style={errors.email ? { borderColor: '#ff3b30', boxShadow: '0 0 0 3px rgba(255,59,48,0.2)' } : {}}
          />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="phone">Phone / WhatsApp (optional)</label>
        <input
          id="phone"
          {...register('phone')}
          placeholder="+263 77 ..."
          className="apple-input"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label style={labelStyle} htmlFor="service">Service Needed *</label>
          <select
            id="service"
            {...register('service')}
            className="apple-input"
            style={errors.service ? { borderColor: '#ff3b30', boxShadow: '0 0 0 3px rgba(255,59,48,0.2)' } : {}}
          >
            <option value="" disabled>Select a service</option>
            <option value="software">Custom Software</option>
            <option value="chatbot">Chatbot Development</option>
            <option value="ai-agents">AI Agents</option>
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.service && <p style={errorStyle}>{errors.service.message}</p>}
        </div>
        <div>
          <label style={labelStyle} htmlFor="budget">Budget (USD) *</label>
          <select
            id="budget"
            {...register('budget')}
            className="apple-input"
            style={errors.budget ? { borderColor: '#ff3b30', boxShadow: '0 0 0 3px rgba(255,59,48,0.2)' } : {}}
          >
            <option value="" disabled>Select budget range</option>
            <option value="<1000">Under $1,000</option>
            <option value="1000-5000">$1,000 – $5,000</option>
            <option value="5000-20000">$5,000 – $20,000</option>
            <option value="20000+">$20,000+</option>
          </select>
          {errors.budget && <p style={errorStyle}>{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label style={labelStyle} htmlFor="message">Tell Us About Your Project *</label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Describe what you need, your timeline, and any specific requirements..."
          className="apple-input"
          style={{
            resize: 'vertical',
            ...(errors.message ? { borderColor: '#ff3b30', boxShadow: '0 0 0 3px rgba(255,59,48,0.2)' } : {}),
          }}
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="apple-btn-primary w-full"
        style={{
          padding: '14px 22px',
          fontSize: '17px',
          opacity: isSubmitting ? 0.6 : 1,
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
        }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message and Get Free Quote'}
      </button>

      <p className="text-center text-xs" style={{ color: 'rgba(0,0,0,0.4)' }}>
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" style={{ color: '#0066cc' }}>Privacy Policy</a>.
        We never share your data with third parties.
      </p>
    </form>
  )
}
