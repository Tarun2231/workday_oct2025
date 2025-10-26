import React from 'react'
import { Card } from '../components/ui/Card'
import { motion } from 'framer-motion'
import { Star, TrendingUp, Award, Target } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import { performances, Performance as PerfData } from '../data/mockData'

const Performance = () => {
  const performanceData = [
    { month: 'Jul', rating: 4.2 },
    { month: 'Aug', rating: 4.4 },
    { month: 'Sep', rating: 4.3 },
    { month: 'Oct', rating: 4.5 },
    { month: 'Nov', rating: 4.6 },
    { month: 'Dec', rating: 4.7 },
    { month: 'Jan', rating: 4.8 },
  ]

  const radarData = [
    { subject: 'Quality', A: 4.5, fullMark: 5 },
    { subject: 'Productivity', A: 4.3, fullMark: 5 },
    { subject: 'Leadership', A: 4.2, fullMark: 5 },
    { subject: 'Communication', A: 4.6, fullMark: 5 },
    { subject: 'Innovation', A: 4.4, fullMark: 5 },
    { subject: 'Teamwork', A: 4.7, fullMark: 5 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Performance</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track employee performance and KPIs
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Star className="text-white" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">4.6</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">On Track</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">78%</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <Target className="text-white" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Goals Met</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">92%</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Award className="text-white" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Performers</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">15</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Performance Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
                <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
                <YAxis className="text-gray-600 dark:text-gray-400" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="rating" stroke="#8884d8" strokeWidth={2} name="Rating" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Skills Radar
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-gray-600 dark:text-gray-400" />
                <PolarRadiusAxis className="text-gray-600 dark:text-gray-400" />
                <Radar name="Rating" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Reviews */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Recent Performance Reviews
          </h2>
          <div className="space-y-4">
            {performances.map((perf, index) => (
              <motion.div
                key={perf.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {perf.employee[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {perf.employee}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{perf.kpi}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{perf.feedback}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {perf.manager} • {perf.date}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(perf.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300 dark:text-gray-600'}
                    />
                  ))}
                  <span className="ml-2 font-semibold text-gray-900 dark:text-gray-100">
                    {perf.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Performance

