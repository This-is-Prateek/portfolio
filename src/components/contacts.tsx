import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { contactInfo } from '../data/portfolio'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../shadcn/components/ui/card'
import { Button } from '../shadcn/components/ui/button'
import { Mail, Phone, Linkedin, Github, Globe, Check, Copy } from 'lucide-react'

const Contacts = () => {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      copyable: true,
      type: 'email',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: contactInfo.phone,
      href: contactInfo.phone ? `tel:${contactInfo.phone}` : undefined,
      copyable: true,
      type: 'phone',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: contactInfo.linkedin,
      copyable: false,
      type: 'linkedin',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: contactInfo.github,
      href: contactInfo.github,
      copyable: false,
      type: 'github',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Website',
      value: contactInfo.website,
      href: contactInfo.website,
      copyable: false,
      type: 'website',
    },
  ].filter((item) => item.value)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -180, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Mail className="w-10 h-10 text-yellow-400" />
            </motion.div>
            Get In Touch
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.p
            className="text-white/70 mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {contactItems.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card className="bg-black/40 backdrop-blur-md border-white/10 shadow-xl hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 will-change-transform">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400 mb-2">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg text-white">{item.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-white/70 text-sm break-all">
                    {item.value}
                  </CardDescription>
                  <div className="flex gap-2">
                    {item.href && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent border-white/20 text-white hover:bg-yellow-400/10 hover:border-yellow-400/50 hover:text-yellow-400"
                      >
                        <a
                          href={item.href}
                          target={
                            item.type === 'email' || item.type === 'phone' ? undefined : '_blank'
                          }
                          rel={
                            item.type === 'email' || item.type === 'phone'
                              ? undefined
                              : 'noopener noreferrer'
                          }
                        >
                          {item.type === 'email'
                            ? 'Email'
                            : item.type === 'phone'
                              ? 'Call'
                              : 'Visit'}
                        </a>
                      </Button>
                    )}
                    {item.copyable && item.value && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(item.value!, item.type)}
                        className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/50"
                      >
                        {copied === item.type ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Contacts
