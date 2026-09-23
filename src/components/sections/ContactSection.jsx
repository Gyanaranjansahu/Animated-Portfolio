
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { socialLinks } from '../../data/portfolio'
import { fadeUp, pageTransition, stagger } from '../../utils/motion'
import MagneticButton from '../ui/MagneticButton'
import SectionHeader from '../ui/SectionHeader'
import SocialIcon from '../ui/SocialIcon'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

const whatsappNumber = '7846813554'

const contactOptions = [
  {
    id: 'email',
    title: 'Email',
    text: 'Send your project brief directly through EmailJS.',
    icon: 'M4 7.5h16v10H4v-10Zm1.4 1.3 6.6 4.6 6.6-4.6M5.4 16.2l4.6-3.4m8.6 3.4-4.6-3.4',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    text: 'Start a quick conversation with a pre-filled message.',
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
      animate={{
        rotate: [0, -5, 5, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <path d={path} />
    </motion.svg>
  )
}

function FloatingField({
  id,
  label,
  type = 'text',
  value,
  error,
  onChange,
  textarea = false,
}) {
  const Field = textarea ? 'textarea' : 'input'

  return (
    <motion.div variants={fadeUp} className="relative">
      <Field
        id={id}
        type={textarea ? undefined : type}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        rows={textarea ? 6 : undefined}
        className="peer w-full resize-none rounded-[8px] border border-white/15 bg-white/[0.025] px-4 pb-3 pt-7 text-sm text-white outline-none transition-all placeholder:text-transparent hover:border-[#b8ff3d]/45 focus:border-[#b8ff3d] focus:bg-[#b8ff3d]/[0.035] focus:shadow-[0_0_28px_rgba(184,255,61,0.09)]"
        placeholder={label}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors peer-focus:text-[#b8ff3d]"
      >
        {label}
      </label>

      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            className="mt-2 text-xs text-[#ff7a90]"
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

function DeliveryModal({
  form,
  status,
  error,
  onClose,
  onEmail,
  onWhatsapp,
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-black/85 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-xl overflow-hidden rounded-[8px] border border-white/15 bg-[#11130e] p-5 shadow-[0_0_80px_rgba(184,255,61,0.1)] sm:p-7"
        initial={{ opacity: 0, y: 28, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 230, damping: 24 }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(184,255,61,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.045) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b8ff3d]">
              Select communication channel
            </p>

            <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Send your message
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
              Choose how you want to continue the conversation.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-sm text-white/60 transition hover:border-[#b8ff3d] hover:text-[#b8ff3d]"
            aria-label="Close contact options"
          >
            ✕
          </button>
        </div>

        <motion.div
          className="relative mt-7 grid gap-3 sm:grid-cols-2"
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
              className="group relative overflow-hidden rounded-[8px] border border-white/15 bg-white/[0.025] p-5 text-left text-white transition hover:-translate-y-1 hover:border-[#b8ff3d] hover:bg-[#b8ff3d]/[0.035] disabled:cursor-wait disabled:opacity-60"
              whileTap={{ scale: 0.97 }}
            >
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#b8ff3d] transition-all duration-500 group-hover:w-full" />

              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#b8ff3d]/30 text-[#b8ff3d]">
                <ContactIcon path={option.icon} />
              </span>

              <span className="mt-5 block text-lg font-black">
                {option.title}
              </span>

              <span className="mt-2 block text-sm leading-6 text-white/45">
                {option.text}
              </span>

              <span className="mt-5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8ff3d]">
                Continue →
              </span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {status !== 'choosing' && (
            <motion.div
              key={status}
              className="relative mt-5 overflow-hidden rounded-[8px] border border-white/10 bg-black/30 px-4 py-3 text-sm font-medium text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {status === 'sending' && (
                <>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#b8ff3d]"
                    initial={{ width: '10%' }}
                    animate={{ width: ['10%', '75%', '35%', '95%'] }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  Sending through EmailJS...
                </>
              )}

              {status === 'success' &&
                'Message sent successfully. Thank you for reaching out.'}

              {status === 'whatsapp' &&
                'Opening WhatsApp with your pre-filled message.'}

              {status === 'error' &&
                (error || 'EmailJS is not configured yet.')}
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
    setForm((current) => ({
      ...current,
      [field]: value,
    }))

    setErrors((current) => ({
      ...current,
      [field]: '',
    }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email.'
    }

    if (form.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.'
    }

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

      setSendError(
        'Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.'
      )

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
        {
          publicKey,
        }
      )

      setStatus('success')
      setForm(initialForm)

      window.setTimeout(() => {
        setModalOpen(false)
        setStatus('choosing')
      }, 1800)
    } catch {
      setStatus('error')

      setSendError(
        'Email failed to send. Check your EmailJS template and public key.'
      )
    }
  }

  const openWhatsapp = () => {
    const text = encodeURIComponent(
      `New portfolio message\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    )

    setStatus('whatsapp')

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      '_blank',
      'noreferrer'
    )

    window.setTimeout(() => {
      setModalOpen(false)
      setStatus('choosing')
      setForm(initialForm)
    }, 900)
  }

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 sm:pb-24 sm:pt-32"
      {...pageTransition}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(184,255,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.035) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />

        <motion.div
          className="absolute -right-32 top-32 h-80 w-80 rounded-full border border-[#b8ff3d]/10"
          animate={{
            rotate: 360,
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#b8ff3d]/60" />
      </div>

      <SectionHeader
        eyebrow="Contact"
        title="Let's build something meaningful."
        text="Have a project idea, collaboration opportunity, or developer role? Send a message and let's start a conversation."
      />

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1fr_0.78fr]">
        <motion.form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[8px] border border-white/15 bg-[#11130e] p-5 sm:p-7 md:p-9"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(184,255,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.035) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <motion.div
            className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#b8ff3d]/10"
            animate={{
              rotate: 360,
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <motion.div variants={fadeUp} className="relative">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b8ff3d]">
                01 / Send a message
              </p>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                Open to work
              </span>
            </div>

            <h3 className="max-w-md text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Start the conversation.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
              Share your idea, requirements, or opportunity. I'll get back to
              you through your selected communication channel.
            </p>
          </motion.div>

          <div className="relative mt-8 space-y-5">
            <FloatingField
              id="name"
              label="Your name"
              value={form.name}
              error={errors.name}
              onChange={updateField}
            />

            <FloatingField
              id="email"
              label="Email address"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={updateField}
            />

            <FloatingField
              id="message"
              label="Your message"
              value={form.message}
              error={errors.message}
              onChange={updateField}
              textarea
            />
          </div>

          <motion.div variants={fadeUp} className="relative mt-7">
            <MagneticButton className="group w-full bg-[#b8ff3d] text-[#11100b] shadow-[0_0_40px_rgba(184,255,61,0.15)]">
              <span className="flex items-center justify-center gap-3">
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </MagneticButton>
          </motion.div>

          <p className="relative mt-4 text-center text-[10px] uppercase tracking-[0.15em] text-white/25">
            Your message will be reviewed before delivery
          </p>
        </motion.form>

        <motion.div
          className="relative overflow-hidden rounded-[8px] border border-white/15 bg-[#11130e] p-5 sm:p-7 md:p-9"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(184,255,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.035) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <motion.div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#b8ff3d]/15"
            animate={{
              rotate: -360,
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b8ff3d]">
              02 / Connect
            </p>

            <h3 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              Let's turn an idea into a real product.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/45">
              I'm interested in frontend development, MERN stack projects,
              AI-powered applications, and meaningful collaborations.
            </p>

            <div className="mt-8 border-y border-white/10 py-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Availability
                </span>

                <span className="flex items-center gap-2 text-xs font-bold text-[#b8ff3d]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#b8ff3d]" />
                  Available
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  Response
                </span>

                <span className="text-xs font-medium text-white/65">
                  Within 24–48 hours
                </span>
              </div>
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
              Find me online
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8ff3d]">
                  Email
                </p>

                <p className="mt-2 break-words text-sm text-white/50">
                  Configure EmailJS for direct email delivery.
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8ff3d]">
                  WhatsApp
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Start a quick conversation with a pre-filled message.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-10 flex items-end justify-between border-t border-white/10 pt-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              Contact / 2026
            </span>

            <span className="text-2xl font-black text-[#b8ff3d]/70">
              ↗
            </span>
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