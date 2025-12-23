import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../shadcn/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '../shadcn/components/ui/sheet'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pendingScrollPosition = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 80
      setIsScrolled(window.scrollY > 50)
      
      // Scroll spy logic using document coordinates (avoid offsetParent issues)
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + headerHeight + 20 // small buffer

      // Edge case: if we're at the very bottom, force-select the last section
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (!section) continue

        const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight

        if (atBottom || sectionTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle scroll restoration after sheet closes
  useEffect(() => {
    if (!isMobileMenuOpen && pendingScrollPosition.current !== null) {
      // Wait for sheet closing animation to complete
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: pendingScrollPosition.current!,
          behavior: 'smooth'
        })
        pendingScrollPosition.current = null
      }, 350) // Match sheet close animation duration
      
      return () => clearTimeout(timeoutId)
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile: boolean = false) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      // Calculate target scroll position accounting for header height
      const headerHeight = 80 // Approximate header height
      const targetScrollPosition = element.offsetTop - headerHeight
      
      if (isMobile) {
        // For mobile: Store the target position and close the sheet
        // The useEffect will handle scrolling after the sheet closes
        pendingScrollPosition.current = targetScrollPosition
        setIsMobileMenuOpen(false)
      } else {
        // For desktop: Scroll immediately
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group will-change-transform hover:scale-105 ${
                  activeSection === item.href.substring(1)
                    ? 'text-yellow-400'
                    : 'text-white/80 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
              >
                <span className="relative z-10 will-change-transform">{item.label}</span>
                <AnimatePresence>
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      className="absolute inset-0 bg-yellow-400/10 rounded-lg -z-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-yellow-400 transition-colors"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left" 
                className="w-[300px] sm:w-[350px] bg-black/95 backdrop-blur-xl border-white/10 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">Menu</h2>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white/80 hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors rounded-full"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  {/* Navigation Items */}
                  <div className="flex flex-col p-4 space-y-2 flex-1 overflow-y-auto">
                    {navItems.map((item, idx) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, true)}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative group hover:scale-105 will-change-transform ${
                          activeSection === item.href.substring(1)
                            ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                            : 'text-white/80 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {item.label}
                          <AnimatePresence>
                            {activeSection === item.href.substring(1) && (
                              <motion.span
                                className="ml-auto w-2 h-2 rounded-full bg-yellow-400"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </AnimatePresence>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                  
                  {/* Footer decoration */}
                  <div className="p-4 border-t border-white/10">
                    <div className="text-xs text-white/50 text-center">
                      Portfolio © 2025
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
