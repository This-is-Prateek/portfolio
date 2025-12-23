import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { ArrowDown } from 'lucide-react'
import AbstractOrb from './abstract-orb'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          className="space-y-6 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <br />
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {personalInfo.name.toUpperCase()}
              </motion.span>
            </h1>
            <motion.p
              className="text-yellow-400/90 font-semibold tracking-[0.3rem] text-lg sm:text-xl lg:text-2xl"
              variants={itemVariants}
            >
              {personalInfo.title.toUpperCase()}
            </motion.p>
          </motion.div>
          <motion.p
            className="text-sm sm:text-base font-light text-gray-100/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            {personalInfo.shortBio}
          </motion.p>
          <motion.div className="pt-4 flex justify-center lg:justify-start" variants={itemVariants}>
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 backdrop-blur-sm border border-blue-400/30 rounded-lg transition-all duration-300 hover:scale-105 text-white font-medium will-change-transform"
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full max-w-xl">
            <AbstractOrb />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
