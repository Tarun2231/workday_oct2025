import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
  }
  icon: LucideIcon
  gradient: string
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</h3>
        <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center`}>
          <Icon className="text-white" size={20} />
        </div>
      </div>
      <div className="flex items-baseline justify-between">
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        {change && (
          <span className={`text-sm font-medium ${
            change.type === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change.type === 'increase' ? '↑' : '↓'} {Math.abs(change.value)}%
          </span>
        )}
      </div>
    </motion.div>
  )
}

