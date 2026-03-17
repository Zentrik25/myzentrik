'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
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
    // Send via mailto for now — replace with API route + Resend/Nodemailer for production
    const subject = encodeURIComponent(`New Project Enquiry — ${values.service} from ${values.name}`)
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
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle2 className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-gray-400">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-violet-400 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputCls =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20'
  const errorCls = 'mt-1 text-xs text-red-400'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="name">
            Full Name *
          </label>
          <input id="name" {...register('name')} placeholder="Tatenda Moyo" className={inputCls} />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="email">
            Email Address *
          </label>
          <input id="email" type="email" {...register('email')} placeholder="you@company.com" className={inputCls} />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="phone">
          Phone / WhatsApp (optional)
        </label>
        <input id="phone" {...register('phone')} placeholder="+263 77 ..." className={inputCls} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="service">
            Service Needed *
          </label>
          <select id="service" {...register('service')} className={inputCls}>
            <option value="" disabled>Select a service</option>
            <option value="software">Custom Software</option>
            <option value="chatbot">Chatbot Development</option>
            <option value="ai-agents">AI Agents</option>
            <option value="other">Other / Not Sure</option>
          </select>
          {errors.service && <p className={errorCls}>{errors.service.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="budget">
            Budget (USD) *
          </label>
          <select id="budget" {...register('budget')} className={inputCls}>
            <option value="" disabled>Select budget range</option>
            <option value="<1000">Under $1,000</option>
            <option value="1000-5000">$1,000 – $5,000</option>
            <option value="5000-20000">$5,000 – $20,000</option>
            <option value="20000+">$20,000+</option>
          </select>
          {errors.budget && <p className={errorCls}>{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-300" htmlFor="message">
          Tell Us About Your Project *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Describe what you need, your timeline, and any specific requirements..."
          className={inputCls}
        />
        {errors.message && <p className={errorCls}>{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-violet-600 to-blue-600 py-6 text-base font-semibold text-white hover:from-violet-500 hover:to-blue-500 disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message — Get Free Quote'}
      </Button>

      <p className="text-center text-xs text-gray-500">
        By submitting this form, you agree to our{' '}
        <a href="/privacy-policy" className="text-violet-400 hover:underline">Privacy Policy</a>.
        We never share your data with third parties.
      </p>
    </form>
  )
}
