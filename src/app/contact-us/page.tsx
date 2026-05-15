'use client'

import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import ContactForm from '@/components/sections/ContactForm'
import ContactCalendlySection from '@/components/sections/ContactCalendlySection'
import Offices from '@/components/sections/Offices'
import { Mail, Phone, Clock } from 'lucide-react'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import { CONTACT_INFO } from '@/lib/constants'
import { useI18n } from '@/i18n/provider'
import HappyClients from '@/components/sections/HappyClients'

export default function ContactUsPage() {
  const { m } = useI18n()

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      description: 'Our friendly team is here to help.',
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: SiWhatsapp,
      title: 'Live chat',
      value: 'WhatsApp Support',
      description: 'Our friendly team is here to help.',
      href: CONTACT_INFO.whatsapp,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: CONTACT_INFO.phones[0].number,
      description: 'Mon to Fri from 9am to 6pm.',
      href: `tel:${CONTACT_INFO.phones[0].number.replace(/\s|\(|\)|-/g, '')}`,
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 Hours',
      description: 'We strive to respond as quickly as possible.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Simple and Clean */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-white pt-28 pb-20">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:34px_34px]" />

          {/* Floating Glowing Orbs */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.14, 0.22, 0.14] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ y: [0, 30, 0], opacity: [0.12, 0.18, 0.12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[140px]"
          />
        </div>

        <Container className="relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center pt-6 md:pt-10 mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 tracking-tight"
            >
              {m.contact.heroTitle}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              {m.contact.heroSubtitle}
            </motion.p>
          </div>

          {/* Simple Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-6xl mx-auto mt-8">
            {contactMethods.map((method, index) => (
              <motion.div 
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="flex flex-col items-center text-center p-6 sm:p-8 bg-white/90 backdrop-blur-md rounded-2xl border border-blue-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
                  <method.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{method.description}</p>
                {method.href ? (
                  <a href={method.href} className="mt-auto text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    {method.value}
                  </a>
                ) : (
                  <span className="mt-auto text-slate-900 font-medium">{method.value}</span>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>



      <ContactCalendlySection />

      {/* Main Form Section */}
      <ContactForm />
      <HappyClients />
      {/* Offices Section */}
      <Offices />
    </div>
  )
}
