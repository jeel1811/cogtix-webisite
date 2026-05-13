'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CONTACT_INFO } from '@/lib/constants'
import { useI18n } from '@/i18n/provider'

const cleanFieldLabel = (label: string) => label.replace(/\s*\*+\s*$/, '')

interface FormFieldProps {
  name: string
  label: string
  value: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  type?: string
  required?: boolean
  placeholder?: string
  rows?: number
}

function FormInput({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-wide text-gray-500"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
      />
    </div>
  )
}

function FormTextarea({
  name,
  label,
  value,
  onChange,
  required,
  placeholder,
  rows = 5,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-xs font-semibold uppercase tracking-wide text-gray-500"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 resize-none"
      />
    </div>
  )
}

interface ContactItemProps {
  Icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  helper?: string
  href?: string
}

function ContactItem({
  Icon,
  title,
  value,
  helper,
  href,
}: ContactItemProps) {
  const content = (
    <>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </p>
      <p className="mt-1 text-sm sm:text-base font-medium text-navy-900 break-words">
        {value}
      </p>
      {helper ? <p className="mt-1 text-xs text-gray-500">{helper}</p> : null}
    </>
  )

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-blue-100/80 bg-white/90 p-4">
      <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div className="min-w-0">
        {href ? (
          <a
            href={href}
            className="block transition-colors duration-200 hover:text-blue-700"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  )
}

export default function ContactForm() {
  const { m } = useI18n()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section
      id="contact"
      className="relative py-10 md:py-10 bg-gradient-to-b from-blue-50/40 via-white to-blue-50/30 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/4 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-teal-100/30 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-blue-100/70 bg-white/80 shadow-2xl shadow-blue-500/[0.05] backdrop-blur-sm p-5 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -top-24 -left-20 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-12 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <h3 className="font-bold uppercase tracking-widest text-xs mb-3">
                Get in touch <span className="text-blue-600">Today!</span>
              </h3>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight text-navy-900">
                {m.contact.title}
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-md">
                {m.contact.infoSubtitle}
              </p>

              <div className="mt-8 space-y-4">
                <ContactItem
                  Icon={Mail}
                  title={cleanFieldLabel(m.contact.emailAddress)}
                  value={CONTACT_INFO.email}
                  href={`mailto:${CONTACT_INFO.email}`}
                />
                <div className="rounded-2xl border border-blue-100/80 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
                    {cleanFieldLabel(m.contact.phoneNumber)}
                  </p>
                  <div className="space-y-2.5">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a
                        key={phone.label}
                        href={`tel:${phone.number.replace(/\s|\(|\)|-/g, '')}`}
                        className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm transition-all duration-200 hover:border-blue-200"
                      >
                        <span className="font-semibold text-blue-600">
                          {phone.label}
                        </span>
                        <span className="text-navy-900">{phone.number}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="hidden lg:block absolute left-[43.5%] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-blue-200/70 to-transparent" />
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-gradient-to-b from-blue-50/70 via-white to-white p-5 sm:p-7 space-y-5 shadow-xl shadow-blue-500/[0.08]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(59,130,246,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.22) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                />
                <h3 className="text-2xl font-bold text-navy-900">
                  {m.common.contactUs}
                </h3>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    name="firstName"
                    label={m.contact.firstName}
                    placeholder={cleanFieldLabel(m.contact.firstName)}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    name="lastName"
                    label={m.contact.lastName}
                    placeholder={cleanFieldLabel(m.contact.lastName)}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    name="email"
                    type="email"
                    label={m.contact.emailAddress}
                    placeholder={cleanFieldLabel(m.contact.emailAddress)}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    name="phone"
                    type="tel"
                    label={m.contact.phoneNumber}
                    placeholder={cleanFieldLabel(m.contact.phoneNumber)}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative z-10">
                  <FormTextarea
                    name="message"
                    label={m.contact.message}
                    placeholder={cleanFieldLabel(m.contact.message)}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <div className="relative z-10">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    // icon={<Send className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    {m.contact.sendMessage}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
