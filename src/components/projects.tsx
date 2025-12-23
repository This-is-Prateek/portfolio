import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { projects } from '../data/portfolio'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../shadcn/components/ui/card'
import { Badge } from '../shadcn/components/ui/badge'
import { Button } from '../shadcn/components/ui/button'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
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
              <Code2 className="w-10 h-10 text-yellow-400" />
            </motion.div>
            My Projects
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card className="group bg-black/40 backdrop-blur-md border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-yellow-400/30 flex flex-col h-full overflow-hidden px-2 will-change-transform">
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-yellow-400 transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant="secondary"
                        className="bg-blue-600/20 text-blue-300 border-blue-400/30 hover:bg-blue-600/30 will-change-transform"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.link && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-transparent border-white/20 text-white hover:bg-yellow-400/10 hover:border-yellow-400/50 hover:text-yellow-400"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.repo && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/50 will-change-transform"
                    >
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
