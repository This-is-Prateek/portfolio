import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { techStack } from '../data/portfolio'
import { Card, CardContent, CardHeader, CardTitle } from '../shadcn/components/ui/card'
import { Code, Database, Cloud, Wrench, Server, Palette, LaptopMinimal } from 'lucide-react'

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Palette className="w-5 h-5" />,
  Backend: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  'Cloud & DevOps': <Cloud className="w-5 h-5" />,
  'Tools & Others': <Wrench className="w-5 h-5" />,
  OS: <LaptopMinimal className="w-5 h-5" />,
}

// Technology icon mapping to actual logo files
const getTechIcon = (tech: string): string | null => {
  const techLower = tech.toLowerCase()

  // Frontend
  if (techLower.includes('react')) return '/tech-stack/react.svg'
  if (techLower.includes('next')) return '/tech-stack/nextjs.svg'
  if (techLower.includes('typescript')) return '/tech-stack/typescript.svg'
  if (techLower.includes('tailwind')) return '/tech-stack/tailwind.svg'
  if (techLower === 'html') return '/tech-stack/html.svg'
  if (techLower === 'css') return '/tech-stack/css.svg'
  if (techLower.includes('javascript')) return '/tech-stack/javascript.svg'
  if (techLower.includes('shadcn ui')) return '/tech-stack/shadcn.svg'
  if (techLower.includes('ant design')) return '/tech-stack/antd.svg'
  if (techLower.includes('sanity cms')) return '/tech-stack/sanity.svg'
  if (techLower.includes('wxt dev')) return '/tech-stack/wxt.svg'

  // Backend
  if (techLower.includes('node')) return '/tech-stack/nodejs.svg'
  if (techLower.includes('express')) return '/tech-stack/expressjs.png'
  if (techLower.includes('graphql')) return '/tech-stack/graphql.svg'
  if (techLower.includes('serverless')) return '/tech-stack/serverless.svg'

  // Database
  if (techLower.includes('mongo')) return '/tech-stack/mongodb.svg'
  if (techLower.includes('postgres')) return '/tech-stack/postgress.png' // Note: filename has typo
  if (techLower.includes('mysql')) return '/tech-stack/mysql.svg'
  if (techLower.includes('hasura')) return '/tech-stack/hasura.png'

  // Cloud & DevOps
  if (techLower.includes('aws')) return '/tech-stack/aws.svg'
  if (techLower.includes('docker')) return '/tech-stack/docker.svg'
  if (techLower === 'git') return '/tech-stack/git.svg'
  if (techLower.includes('github')) return '/tech-stack/github.svg'
  if (techLower.includes('amplify')) return '/tech-stack/amplify.svg'
  if (techLower.includes('lambda')) return '/tech-stack/lambda.svg'
  if (techLower.includes('convex')) return '/tech-stack/convex.svg'
  if (techLower.includes('vercel')) return '/tech-stack/vercel.svg'

  // Tools
  if (techLower.includes('vs code') || techLower.includes('vscode')) return '/tech-stack/vscode.svg'
  if (techLower.includes('cursor')) return '/tech-stack/cursor.svg'
  if (techLower.includes('postman')) return '/tech-stack/postman.svg'
  if (techLower.includes('figma')) return '/tech-stack/figma.svg'
  if (techLower.includes('three.js')) return '/tech-stack/threejs.png'
  if (techLower.includes('lambda test')) return '/tech-stack/lambda-test.svg'

  // OS
  if (techLower.includes('pop!_os')) return '/tech-stack/popos.png'
  if (techLower.includes('arch linux')) return '/tech-stack/arch.svg'
  if (techLower.includes('windows')) return '/tech-stack/windows.png'

  // Default - no icon available
  return null
}

const TechStack = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  }

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              <Code className="w-10 h-10 text-yellow-400" />
            </motion.div>
            Tech Stack
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {techStack.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card className="bg-black/40 backdrop-blur-md border-white/10 shadow-xl hover:border-yellow-400/30 transition-all duration-300 hover:scale-105 will-change-transform h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center gap-2">
                    <span className="text-yellow-400">
                      {categoryIcons[category.name] || <Code className="w-5 h-5" />}
                    </span>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((tech, techIdx) => {
                      const iconPath = getTechIcon(tech)
                      return (
                        <motion.div
                          key={techIdx}
                          custom={techIdx}
                          variants={techItemVariants}
                          initial="hidden"
                          animate={isInView ? 'visible' : 'hidden'}
                          className="group flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-default will-change-transform"
                        >
                          {iconPath ? (
                            <div className="flex-shrink-0 w-5 h-5 group-hover:scale-110 transition-transform flex items-center justify-center will-change-transform">
                              <img
                                src={iconPath}
                                alt={tech}
                                className="w-5 h-5 object-contain grayscale-100 invert-100"
                              />
                            </div>
                          ) : (
                            <div className="flex-shrink-0 w-5 h-5 group-hover:scale-110 transition-transform flex items-center justify-center will-change-transform">
                              <Code className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                          <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors truncate will-change-transform">
                            {tech}
                          </span>
                        </motion.div>
                      )
                    })}
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

export default TechStack
