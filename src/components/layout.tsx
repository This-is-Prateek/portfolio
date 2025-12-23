import type { ReactElement } from 'react'
import { useEffect } from 'react'

const Layout = ({ children }: { children: ReactElement }) => {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#000_75%)] flex flex-col items-center min-h-screen w-screen text-white overflow-x-hidden">
      <div className="w-full max-w-[1920px]">{children}</div>
    </div>
  )
}

export default Layout
