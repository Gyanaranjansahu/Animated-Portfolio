import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { socialLinks } from '../../data/portfolio'
import { fadeUp, pageTransition, stagger } from '../../utils/motion'
import MagneticButton from '../ui/MagneticButton'
import SectionHeader from '../ui/SectionHeader'
import SocialIcon from '../ui/SocialIcon'

const initialForm = { name: '', email: '', message: '' }
const whatsappNumber = '919999999999'
const contactOptions = [
  {
    id: 'email',
    title: 'Email',
    text: 'Send directly through EmailJS with delivery feedback.',
    icon: 'M4 7.5h16v10H4v-10Zm1.4 1.3 6.6 4.6 6.6-4.6M5.4 16.2l4.6-3.4m8.6 3.4-4.6-3.4',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    text: 'Open WhatsApp with your message already composed.',
    icon: 'M12 3.2a8.2 8.2 0 0 0-7 12.5l-.8 3.1 3.2-.84A8.2 8.2 0 1 0 12 3.2Zm3.9 11.2c-.17.48-.98.9-1.38.96-.36.05-.82.07-1.32-.08-.3-.1-.7-.23-1.2-.44-2.1-.9-3.46-3-3.56-3.14-.1-.13-.85-1.13-.85-2.16s.54-1.54.74-1.75c.19-.2.42-.26.56-.26h.4c.13 0 .3-.05.47.36.17.4.58 1.4.63 1.5.05.1.08.23.02.36-.06.13-.1.22-.2.34-.1.12-.2.27-.3.36-.1.1-.2.2-.08.4.12.2.53.88 1.14 1.42.78.7 1.44.92 1.64 1.02.2.1.32.08.44-.05.13-.15.5-.59.64-.79.13-.2.27-.17.45-.1.19.06 1.18.56 1.38.66.2.1.34.15.39.23.05.09.05.5-.12.98Z',
  },
]

function ContactIcon({ path }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      animate={{ rotate: [0, -6, 6, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d={path} />
    </motion.svg>
  )
}

function FloatingField({ id, label, type = 'text', value, error, onChange, textarea = false }) {
  const Field = textarea ? 'textarea' : 'input'

  return (
    <motion.div variants={fadeUp} className="relative">
      <Field
        id={id}
        type={textarea ? undefined : type}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        rows={textarea ? 5 : undefined}
        className="peer w-full resize-none rounded-[8px] border border-[#b8ff3d]/25 bg-black/20 px-4 pb-3 pt-6 text-white outline-none transition-all placeholder:text-transparent hover:border-[#b8ff3d]/45 hover:shadow-[0_0_28px_rgba(184,255,61,0.1)] focus:border-[#b8ff3d] focus:bg-[#b8ff3d]/[0.035] focus:shadow-[0_0_38px_rgba(184,255,61,0.18)]"
        placeholder={label}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-xs font-bold uppercase tracking-[0.18em] text-white/42 transition-colors peer-focus:text-[#b8ff3d]"
      >
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            className="mt-2 text-sm text-[#ff7a90]"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function DeliveryModal({ form, status, error, onClose, onEmail, onWhatsapp }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="glass relative w-full max-w-xl overflow-hidden rounded-[8px] p-4 sm:p-6"
        initial={{ opacity: 0, y: 28, scale: 0.94, filter: 'blur(16px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: 18, scale: 0.96, filter: 'blur(12px)' }}
        transition={{ type: 'spring', stiffness: 230, damping: 24 }}
      >
        <motion.div
          className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#b8ff3d]/18 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.8, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b8ff3d]">
              Choose channel
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">Send your message</h3>
            <p className="mt-3 text-sm leading-6 text-white/58">
              Pick the route that feels fastest. Your message is ready for {form.name}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#b8ff3d]/30 text-white/70 transition hover:border-[#b8ff3d] hover:text-white"
            aria-label="Close contact options"
          >
            X
          </button>
        </div>

        <motion.div
          className="relative mt-6 grid gap-3 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {contactOptions.map((option) => (
            <motion.button
              key={option.id}
              type="button"
              variants={fadeUp}
              onClick={option.id === 'email' ? onEmail : onWhatsapp}
              disabled={status === 'sending'}
              className="group relative overflow-hidden rounded-[8px] border border-[#b8ff3d]/25 bg-white/[0.045] p-4 text-left text-white transition hover:border-[#b8ff3d] hover:shadow-[0_0_36px_rgba(184,255,61,0.16)] disabled:cursor-wait disabled:opacity-70"
              whileHover={{ y: -8, scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute inset-0 -translate-x-full bg-[#b8ff3d]/10 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative grid h-12 w-12 place-items-center rounded-full border border-[#b8ff3d]/30 text-[#b8ff3d]">
                <ContactIcon path={option.icon} />
              </span>
              <span className="relative mt-4 block text-lg font-black">{option.title}</span>
              <span className="relative mt-2 block text-sm leading-6 text-white/58">
                {option.text}
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {status !== 'choosing' && (
            <motion.div
              key={status}
              className="relative mt-5 overflow-hidden rounded-[8px] border border-[#b8ff3d]/25 bg-black/24 px-4 py-3 text-sm font-semibold text-white/76"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {status === 'sending' && (
                <>
                  <motion.span
                    className="absolute bottom-0 left-0 h-1 rounded-full bg-[#b8ff3d]"
                    initial={{ width: '14%' }}
                    animate={{ width: ['14%', '72%', '38%', '92%'] }}
                    transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  Sending through EmailJS...
                </>
              )}
              {status === 'success' && 'Message sent successfully. Nice and clean.'}
              {status === 'whatsapp' && 'Opening WhatsApp with your pre-filled message.'}
              {status === 'error' && (error || 'EmailJS is not configured yet.')}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [status, setStatus] = useState('choosing')
  const [sendError, setSendError] = useState('')

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email.'
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validate()) return

    setStatus('choosing')
    setSendError('')
    setModalOpen(true)
  }

  const sendEmail = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setSendError('Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.')
      return
    }

    setStatus('sending')
    setSendError('')

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey },
      )

      setStatus('success')
      setForm(initialForm)
      window.setTimeout(() => {
        setModalOpen(false)
        setStatus('choosing')
      }, 1800)
    } catch {
      setStatus('error')
      setSendError('Email failed to send. Check your EmailJS template and public key.')
    }
  }

  const openWhatsapp = () => {
    const text = encodeURIComponent(
      `New portfolio message\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`,
    )

    setStatus('whatsapp')
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noreferrer')
    window.setTimeout(() => {
      setModalOpen(false)
      setStatus('choosing')
      setForm(initialForm)
    }, 900)
  }

  return (
    <motion.section className="min-h-screen px-4 pb-20 pt-28 sm:pb-24 sm:pt-32" {...pageTransition}>
      <SectionHeader
        eyebrow="Contact"
        title="A futuristic contact deck for fast collaboration."
        text="Send a polished EmailJS message or jump straight into WhatsApp with a pre-filled brief."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.78fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="glass relative space-y-5 overflow-hidden rounded-[8px] p-4 sm:p-6 md:p-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#b8ff3d]/14 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.65, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-6 right-6 h-24 w-24 rounded-full border border-dashed border-[#b8ff3d]/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div variants={fadeUp} className="relative">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#b8ff3d]">
              Send a message
            </p>
            <h3 className="mb-6 text-2xl font-black text-white sm:text-3xl">
              Start the conversation
            </h3>
          </motion.div>
          <div className="relative space-y-5">
            <FloatingField id="name" label="Name" value={form.name} error={errors.name} onChange={updateField} />
            <FloatingField id="email" label="Email" type="email" value={form.email} error={errors.email} onChange={updateField} />
            <FloatingField id="message" label="Message" value={form.message} error={errors.message} onChange={updateField} textarea />
          </div>
          <motion.div variants={fadeUp}>
            <MagneticButton className="w-full bg-[#b8ff3d] text-[#11100b] shadow-[0_0_44px_rgba(184,255,61,0.22)]">
              Send Message
            </MagneticButton>
          </motion.div>
        </motion.form>

        <motion.div
          className="glass relative overflow-hidden rounded-[8px] p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <motion.div
            className="absolute right-8 top-8 h-28 w-28 rounded-full border border-[#b8ff3d]/25"
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          />
          <motion.p
            className="text-2xl font-black leading-tight text-white sm:text-3xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Choose the cleanest route from first hello to next build.
          </motion.p>
          <p className="mt-5 leading-8 text-white/64">
            Email for detailed briefs. WhatsApp for fast starts. Either way, the form keeps the
            message structured and ready to move.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} {...link} />
            ))}
          </div>
          <div className="mt-8 space-y-3 break-words text-sm leading-6 text-white/58">
            <p>EmailJS: configure Vite env keys before production email sending.</p>
            <p>WhatsApp: update the number in ContactSection.jsx to your active business number.</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <DeliveryModal
            form={form}
            status={status}
            error={sendError}
            onClose={() => {
              setModalOpen(false)
              setStatus('choosing')
            }}
            onEmail={sendEmail}
            onWhatsapp={openWhatsapp}
          />
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default ContactSection
