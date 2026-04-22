import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, budget, message } = await req.json()

    if (!name || !email || !service || !budget || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const serviceLabels: Record<string, string> = {
      software: 'Custom Software',
      chatbot: 'Chatbot Development',
      'ai-agents': 'AI Agents',
      other: 'Other / Not Sure',
    }

    const budgetLabels: Record<string, string> = {
      '<1000': 'Under $1,000',
      '1000-5000': '$1,000 – $5,000',
      '5000-20000': '$5,000 – $20,000',
      '20000+': '$20,000+',
    }

    await resend.emails.send({
      from: 'Zentrik Contact Form <noreply@zentriksolutions.com>',
      to: ['info@zentriksolutions.com'],
      replyTo: email,
      subject: `New Quote Request: ${serviceLabels[service] ?? service} from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f5f5f7;border-radius:12px;">
          <div style="background:#000;border-radius:8px;padding:24px;margin-bottom:24px;">
            <h1 style="color:#fff;margin:0;font-size:20px;letter-spacing:-0.3px;">New Quote Request</h1>
            <p style="color:rgba(255,255,255,0.5);margin:4px 0 0;font-size:13px;">via zentriksolutions.com</p>
          </div>

          <table style="width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;border:1px solid #d2d2d7;">
            ${[
              ['Name', name],
              ['Email', `<a href="mailto:${email}" style="color:#0071e3;">${email}</a>`],
              ['Phone / WhatsApp', phone || 'Not provided'],
              ['Service Needed', serviceLabels[service] ?? service],
              ['Budget', budgetLabels[budget] ?? budget],
            ].map(([label, value], i) => `
              <tr style="border-bottom:1px solid #f0f0f0;">
                <td style="padding:12px 16px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:rgba(0,0,0,0.4);width:140px;">${label}</td>
                <td style="padding:12px 16px;font-size:15px;color:#1d1d1f;">${value}</td>
              </tr>
            `).join('')}
          </table>

          <div style="background:#fff;border-radius:8px;padding:20px;margin-top:16px;border:1px solid #d2d2d7;">
            <p style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;color:rgba(0,0,0,0.4);margin:0 0 10px;">Project Description</p>
            <p style="font-size:15px;color:#1d1d1f;line-height:1.6;margin:0;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${email}?subject=Re: Your Zentrik Solutions Quote Request" style="background:#0071e3;color:#fff;padding:10px 24px;border-radius:980px;text-decoration:none;font-size:15px;display:inline-block;">
              Reply to ${name}
            </a>
          </div>

          <p style="text-align:center;color:rgba(0,0,0,0.4);font-size:12px;margin-top:24px;">
            Zentrik Solutions · Mutare, Zimbabwe · zentriksolutions.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message. Please try WhatsApp.' }, { status: 500 })
  }
}
