import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../data/portfolio'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../shadcn/components/ui/card'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              <GraduationCap className="w-10 h-10 text-yellow-400" />
            </motion.div>
            Education
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
            >
              <Card
                className="bg-black/40 backdrop-blur-md border-white/10 shadow-xl hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 will-change-transform h-full"
              >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-white mb-1">{edu.degree}</CardTitle>
                    {edu.field && (
                      <CardDescription className="text-base text-white/70 mb-2">
                        {edu.field}
                      </CardDescription>
                    )}
                    <CardDescription className="text-lg text-yellow-400/90 font-semibold">
                      {edu.institution}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.year}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <h4 className="font-semibold text-white">Achievements</h4>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-white/80 text-sm">
                          <span className="text-yellow-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

