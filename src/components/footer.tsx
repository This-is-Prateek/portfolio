import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '../data/portfolio'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-white/70 text-sm">
              © {currentYear} <span className="text-yellow-400 font-semibold">{personalInfo.name}</span>. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-white/50 text-xs"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span>Built with</span>
            <motion.span
              className="text-yellow-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              ❤️
            </motion.span>
            <span>and modern web technologies</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

