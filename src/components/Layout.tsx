import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import { motion } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto p-6 scrollbar-hide"
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}

export default Layout

