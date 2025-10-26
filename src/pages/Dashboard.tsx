import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { StatCard } from '../components/Dashboard/StatCard'
import { Users, UserCheck, Calendar, DollarSign, TrendingDown } from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const Dashboard = () => {
  const monthlyData = [
    { month: 'Jan', hires: 5, exits: 2 },
    { month: 'Feb', hires: 8, exits: 1 },
    { month: 'Mar', hires: 6, exits: 0 },
    { month: 'Apr', hires: 12, exits: 3 },
    { month: 'May', hires: 9, exits: 2 },
    { month: 'Jun', hires: 10, exits: 1 },
  ]

  const deptData = [
    { name: 'Engineering', count: 25 },
    { name: 'Sales', count: 18 },
    { name: 'Design', count: 12 },
    { name: 'HR', count: 8 },
    { name: 'Product', count: 15 },
  ]

  const attendanceData = [
    { name: 'On Time', value: 92, color: '#22c55e' },
    { name: 'Late', value: 5, color: '#eab308' },
    { name: 'Absent', value: 3, color: '#ef4444' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back! Here's what's happening with your organization.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatCard
          title="Total Employees"
          value="88"
          change={{ value: 12, type: 'increase' }}
          icon={Users}
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatCard
          title="Active Employees"
          value="84"
          change={{ value: 5, type: 'increase' }}
          icon={UserCheck}
          gradient="bg-gradient-to-br from-green-500 to-green-600"
        />
        <StatCard
          title="On Leave"
          value="4"
          change={{ value: 2, type: 'decrease' }}
          icon={Calendar}
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
        />
        <StatCard
          title="Payroll Processed"
          value="$486K"
          change={{ value: 8, type: 'increase' }}
          icon={DollarSign}
          gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
        />
        <StatCard
          title="Attrition Rate"
          value="2.1%"
          change={{ value: 0.8, type: 'decrease' }}
          icon={TrendingDown}
          gradient="bg-gradient-to-br from-red-500 to-red-600"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Monthly Hires vs Exits
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
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
                <Line type="monotone" dataKey="hires" stroke="#3b82f6" strokeWidth={2} name="New Hires" />
                <Line type="monotone" dataKey="exits" stroke="#ef4444" strokeWidth={2} name="Exits" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Department Headcount
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={deptData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
                <XAxis dataKey="name" className="text-gray-600 dark:text-gray-400" />
                <YAxis className="text-gray-600 dark:text-gray-400" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="count" fill="#8884d8" name="Employees" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Attendance Rate
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Sarah Johnson', action: 'Updated employee profile', time: '2 hours ago' },
                { name: 'Michael Chen', action: 'Submitted leave request', time: '4 hours ago' },
                { name: 'Emily Davis', action: 'Completed onboarding', time: '1 day ago' },
                { name: 'David Lee', action: 'Received performance review', time: '2 days ago' },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 dark:text-gray-100">
                      <span className="font-semibold">{activity.name}</span> {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

