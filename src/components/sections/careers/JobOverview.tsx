'use client'

import { useEffect, useRef, useState } from 'react'
import {
  MapPin,
  User,
  Clock,
  Briefcase,
  X,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import type { CareerNode } from './types'

interface JobOverviewProps {
  data: CareerNode
}

const EMAIL_VALIDATION = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_NUMBER_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
const ONLY_NUMBERS = /^[0-9]+$/

interface FormState {
  fullName: string
  email: string
  phone: string
  experience: string
  currentJobLocation: string
  noticePeriod: string
  currentCtc: string
  expectedCtc: string
  file: File | null
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  experience: '',
  currentJobLocation: '',
  noticePeriod: '',
  currentCtc: '',
  expectedCtc: '',
  file: null,
}

export default function JobOverview({ data }: JobOverviewProps) {
  const [open, setOpen] = useState(false)
  const career = data?.careers ?? {}

  return (
    <>
      <aside
        id="apply"
        className="lg:sticky lg:top-28 lg:mt-0 mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/40 p-7 shadow-[0_30px_70px_-30px_rgba(0,82,163,0.35)]"
      >
        <div className="flex items-center justify-between border-b border-blue-100 pb-4">
          <h3 className="text-lg font-bold text-navy-900">Job Overview</h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open
          </span>
        </div>

        <ul className="mt-5 space-y-4">
          <OverviewRow
            icon={MapPin}
            label="Location"
            value={career.jobLocation}
            color="text-blue-500 bg-blue-50"
          />
          <OverviewRow
            icon={User}
            label="Job Title"
            value={data?.title}
            color="text-violet-500 bg-violet-50"
          />
          <OverviewRow
            icon={Briefcase}
            label="Experience"
            value={career.jobExperience}
            color="text-teal-500 bg-teal-50"
          />
          <OverviewRow
            icon={Clock}
            label="Job Time"
            value={career.jobTime}
            color="text-amber-500 bg-amber-50"
          />
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-7 w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(0,82,163,0.55)] transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-800"
        >
          Apply Now
        </button>

        <p className="mt-4 text-center text-[11px] text-gray-500">
          Or email{' '}
          <a
            href="mailto:hr@cogtix.com"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            hr@cogtix.com
          </a>
        </p>
      </aside>

      {open ? (
        <ApplyModal
          jobTitle={data?.title}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  )
}

function OverviewRow({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value?: string | null
  color: string
}) {
  if (!value) return null
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color}`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-navy-900 break-words">
          {value}
        </p>
      </div>
    </li>
  )
}

function ApplyModal({
  jobTitle,
  onClose,
}: {
  jobTitle: string
  onClose: () => void
}) {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<
    | { kind: 'idle' }
    | { kind: 'success'; message: string }
    | { kind: 'error'; message: string }
  >({ kind: 'idle' })
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null
    setForm((prev) => ({ ...prev, file }))
    setErrors((prev) => ({ ...prev, file: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = 'Field is Required'
    if (!form.email.trim()) next.email = 'Field is Required'
    else if (!EMAIL_VALIDATION.test(form.email)) next.email = 'Please enter a valid email'
    if (!form.phone.trim()) next.phone = 'Field is Required'
    else if (!PHONE_NUMBER_REGEX.test(form.phone))
      next.phone = 'Please enter valid phone number'
    if (!form.experience.trim()) next.experience = 'Field is Required'
    else if (!ONLY_NUMBERS.test(form.experience))
      next.experience = 'Only Numbers Allowed'
    if (!form.currentJobLocation.trim())
      next.currentJobLocation = 'Field is Required'
    if (!form.noticePeriod.trim()) next.noticePeriod = 'Field is Required'
    if (!form.file) next.file = 'Field is Required'
    if (!form.currentCtc.trim()) next.currentCtc = 'Field is Required'
    else if (!ONLY_NUMBERS.test(form.currentCtc))
      next.currentCtc = 'Only Numbers Allowed'
    if (!form.expectedCtc.trim()) next.expectedCtc = 'Field is Required'
    else if (!ONLY_NUMBERS.test(form.expectedCtc))
      next.expectedCtc = 'Only Numbers Allowed'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    if (!form.file) return

    setIsLoading(true)
    setStatus({ kind: 'idle' })

    try {
      const fileBuffer = await form.file.arrayBuffer()
      const bytes = Array.from(new Uint8Array(fileBuffer))

      const payload = {
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        experience: form.experience,
        currentJobLocation: form.currentJobLocation,
        noticePeriod: form.noticePeriod,
        currentCtc: form.currentCtc,
        expectedCtc: form.expectedCtc,
        position: jobTitle,
        fileName: form.file.name,
        fileBytes: bytes,
      }

      const res = await fetch('/api/apply-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.status === 200) {
        setStatus({
          kind: 'success',
          message: 'Application submitted successfully. We will be in touch soon.',
        })
        setForm(initialState)
        const fileInput = document.getElementById('UploadResume') as HTMLInputElement | null
        if (fileInput) fileInput.value = ''
      } else {
        const body = await res.json().catch(() => null)
        setStatus({
          kind: 'error',
          message: body?.error || 'Something went wrong. Please try again.',
        })
      }
    } catch (err) {
      setStatus({
        kind: 'error',
        message: err instanceof Error ? err.message : 'Submission failed.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-6"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Apply for the role
            </p>
            <h2 id="apply-modal-title" className="mt-1 text-xl font-bold text-navy-900">
              {jobTitle}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="rounded-full bg-white/70 p-2 text-gray-500 transition-colors hover:bg-white hover:text-navy-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-h-[calc(90vh-9rem)] space-y-4 overflow-y-auto px-6 py-6"
        >
          <Field
            id="fullName"
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          <Field
            id="email"
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <Field
            id="phone"
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="experience"
              label="Experience (years)"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              error={errors.experience}
              required
            />
            <Field
              id="noticePeriod"
              label="Notice Period"
              name="noticePeriod"
              value={form.noticePeriod}
              onChange={handleChange}
              error={errors.noticePeriod}
              required
            />
          </div>
          <Field
            id="currentJobLocation"
            label="Current Job Location"
            name="currentJobLocation"
            value={form.currentJobLocation}
            onChange={handleChange}
            error={errors.currentJobLocation}
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="currentCtc"
              label="Current CTC"
              name="currentCtc"
              value={form.currentCtc}
              onChange={handleChange}
              error={errors.currentCtc}
              required
            />
            <Field
              id="expectedCtc"
              label="Expected CTC"
              name="expectedCtc"
              value={form.expectedCtc}
              onChange={handleChange}
              error={errors.expectedCtc}
              required
            />
          </div>

          <div>
            <label
              htmlFor="UploadResume"
              className="mb-1.5 block text-[12px] font-semibold text-gray-700"
            >
              Upload CV / Resume <span className="text-red-500">*</span>
            </label>
            <input
              id="UploadResume"
              name="file"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              className={`block w-full cursor-pointer rounded-xl border bg-gray-50 p-2.5 text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 ${
                errors.file ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.file ? (
              <p className="mt-1 text-xs font-semibold text-red-600">{errors.file}</p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">PDF, DOC or DOCX, up to 5MB</p>
            )}
          </div>

          {status.kind === 'success' ? (
            <div className="flex items-start gap-3 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-800">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{status.message}</span>
            </div>
          ) : null}
          {status.kind === 'error' ? (
            <div className="flex items-start gap-3 rounded-xl bg-red-50 p-3 text-sm text-red-800">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{status.message}</span>
            </div>
          ) : null}
        </form>

        <div className="flex flex-col-reverse items-stretch gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100"
          >
            Close
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            <span>{isLoading ? 'Submitting…' : 'Submit Application'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Field({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required,
}: {
  id: string
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[12px] font-semibold text-gray-700"
      >
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-gray-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${
          error ? 'border-red-400' : 'border-gray-200'
        }`}
      />
      {error ? (
        <p className="mt-1 text-xs font-semibold text-red-600">{error}</p>
      ) : null}
    </div>
  )
}
