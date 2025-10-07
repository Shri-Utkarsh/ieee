import React, { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function ContactFrom() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [studentId, setStudentId] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  // Allow overriding the API base via Vite env: VITE_API_BASE. Falls back to localhost:3001.
  const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3001'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg(null)

    if (!firstName || !lastName || !email || !subject || !message || !consent) {
      setErrorMsg('Please fill all required fields and agree to the consent checkbox.')
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, studentId, subject, message, consent }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to send message')

      setStatus('success')
      setFirstName('')
      setLastName('')
      setEmail('')
      setStudentId('')
      setSubject('')
      setMessage('')
      setConsent(false)
    } catch (err: any) {
      console.error('contact submit error', err)
      setErrorMsg(err?.message || 'Failed to send message')
      setStatus('error')
    }
  }

  return (
    <div>
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <Input value={firstName} onChange={(e) => setFirstName((e.target as HTMLInputElement).value)} type="text" id="firstName" placeholder="Your first name" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <Input value={lastName} onChange={(e) => setLastName((e.target as HTMLInputElement).value)} type="text" id="lastName" placeholder="Your last name" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <Input value={email} onChange={(e) => setEmail((e.target as HTMLInputElement).value)} type="email" id="email" placeholder="your.email@example.com" required />
              </div>

              <div>
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">Student ID (if applicable)</label>
                <Input value={studentId} onChange={(e) => setStudentId((e.target as HTMLInputElement).value)} type="text" id="studentId" placeholder="Your student ID" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <select value={subject} onChange={(e) => setSubject((e.target as HTMLSelectElement).value)} id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="events">Event Information</option>
                  <option value="chapters">Chapter Information</option>
                  <option value="collaboration">Partnership/Collaboration</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <Textarea value={message} onChange={(e) => setMessage((e.target as HTMLTextAreaElement).value)} id="message" rows={5} placeholder="Please provide details about your inquiry..." required />
              </div>

              <div className="flex items-start space-x-2">
                <input type="checkbox" id="consent" className="mt-1" checked={consent} onChange={(e) => setConsent((e.target as HTMLInputElement).checked)} />
                <label htmlFor="consent" className="text-sm text-gray-600">I consent to being contacted by IEEE SB SAGE regarding my inquiry *</label>
              </div>

              {status === 'error' && errorMsg && <div className="text-red-600">{errorMsg}</div>}
              {status === 'success' && <div className="text-green-600">Message sent — thank you!</div>}

              <Button type="submit" className="w-full" disabled={status === 'loading'}>{status === 'loading' ? 'Sending...' : 'Send Message'}</Button>
              
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
