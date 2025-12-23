import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../shadcn/components/ui/card'
import { Separator } from '../shadcn/components/ui/separator'
import { Badge } from '../shadcn/components/ui/badge'
import { Briefcase, MapPin, Calendar, FolderKanban, ExternalLink, Award } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              <Briefcase className="w-10 h-10 text-yellow-400" />
            </motion.div>
            Professional Experience
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experience.map((exp, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative">
              {idx < experience.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 to-transparent"></div>
              )}
              <Card className="bg-black/40 backdrop-blur-md border-white/10 shadow-xl !ml-0 lg:ml-12 hover:border-yellow-400/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0 mt-1">
                          <Briefcase className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-white mb-1">{exp.role}</CardTitle>
                          <CardDescription className="text-lg text-yellow-400/90 font-semibold">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4 bg-white/10" />
                  <p className="text-white/80 leading-relaxed mb-4">{exp.description}</p>

                  {/* Technologies */}
                  {/* <div className="flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 border-blue-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div> */}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-yellow-400" />
                        <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {exp.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="text-white/80 text-sm flex items-start gap-2">
                            <span className="text-yellow-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Projects Section - LinkedIn Style Ladder */}
                  {exp.projects && exp.projects.length > 0 && (
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <motion.div
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={
                            isInView ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }
                          }
                          transition={{ delay: 0.5, duration: 0.4 }}
                        >
                          <FolderKanban className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                        <h4 className="text-lg font-semibold text-white">Projects</h4>
                        <motion.span
                          className="text-sm text-white/60"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                        >
                          ({exp.projects.length})
                        </motion.span>
                      </motion.div>
                      <div className="space-y-4 ml-7">
                        {[...exp.projects].reverse().map((project, projIdx) => (
                          <motion.div
                            key={projIdx}
                            className="relative"
                            initial={{ opacity: 0, x: -30, scale: 0.95 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: -30, scale: 0.95 }
                            }
                            transition={{
                              delay: 0.5 + projIdx * 0.1,
                              duration: 0.5,
                              ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
                            }}
                          >
                            {/* Ladder connector line */}
                            {projIdx < exp.projects!.length - 1 && (
                              <motion.div
                                className="absolute left-[-1.5rem] top-6 bottom-[-1rem] w-0.5 bg-gradient-to-b from-yellow-400/30 to-transparent"
                                initial={{ scaleY: 0 }}
                                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                                transition={{ delay: 0.7 + projIdx * 0.1, duration: 0.4 }}
                                style={{ transformOrigin: 'top' }}
                              />
                            )}
                            {/* Project dot */}
                            <motion.div
                              className="absolute left-[-1.75rem] top-1.5 w-2 h-2 rounded-full bg-yellow-400 border-2 border-black/40"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={
                                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
                              }
                              transition={{ delay: 0.6 + projIdx * 0.1, duration: 0.3 }}
                            />

                            <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-yellow-400/30 hover:bg-white/10 transition-all duration-300">
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="text-base font-semibold text-white">
                                      {project.name}
                                    </h5>
                                    {project.link && (
                                      <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                      >
                                        <ExternalLink className="w-4 h-4" />
                                      </a>
                                    )}
                                  </div>
                                  <p className="text-sm text-white/70 leading-relaxed">
                                    {project.description}
                                  </p>
                                </div>
                              </div>
                              {project.technologies && project.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                                  {project.technologies.map((tech, techIdx) => (
                                    <Badge
                                      key={techIdx}
                                      variant="secondary"
                                      className="bg-purple-600/20 text-purple-300 border-purple-400/30 text-xs"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
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

export default Experience
