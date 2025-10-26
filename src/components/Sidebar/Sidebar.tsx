import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  LogOut,
  Settings,
  ChevronLeft,
  Menu
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const menuItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/recruitment', label: 'Recruitment', icon: Briefcase },
  { path: '/employees', label: 'Employees', icon: Users },
  { path: '/attendance', label: 'Attendance', icon: Calendar },
  { path: '/payroll', label: 'Payroll', icon: DollarSign },
  { path: '/performance', label: 'Performance', icon: TrendingUp },
  { path: '/offboarding', label: 'Offboarding', icon: LogOut },
  { path: '/settings', label: 'Settings', icon: Settings },
]

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const { logout } = useAuth()

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isMobileOpen || !isMobileOpen) && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: isMobileOpen || !isCollapsed ? 0 : -240 }}
            className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ${
              !isMobileOpen ? 'hidden md:block' : ''
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Logo */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  {!isCollapsed && (
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      Workday HR
                    </span>
                  )}
                </motion.div>
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"
                >
                  <ChevronLeft
                    size={20}
                    className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-hide">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path
                  return (
                    <Link key={item.path} to={item.path}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <item.icon size={20} />
                        {!isCollapsed && <span className="font-medium">{item.label}</span>}
                      </motion.div>
                    </Link>
                  )
                })}
              </nav>

              {/* Logout */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={logout}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <LogOut size={20} />
                  {!isCollapsed && <span className="font-medium">Logout</span>}
                </motion.button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile */}
      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  )
}

export default Sidebar
