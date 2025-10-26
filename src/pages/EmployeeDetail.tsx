import { } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { ArrowLeft, Mail, Calendar, Briefcase, DollarSign, FileText } from 'lucide-react'
import { employees } from '../data/mockData'

const EmployeeDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const employee = employees.find(emp => emp.id === id)

  if (!employee) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-600 dark:text-gray-400">Employee not found</p>
      </div>
    )
  }

  const statusColors = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    onboarding: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    offboarding: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400',
    exited: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  }

  const lifecycleSteps = [
    { stage: 'Recruit', completed: true },
    { stage: 'Onboard', completed: employee.status !== 'onboarding' },
    { stage: 'Active', completed: employee.status === 'active' || employee.status === 'offboarding' || employee.status === 'exited' },
    { stage: 'Performance', completed: employee.status === 'active' },
    { stage: employee.status === 'exited' ? 'Exited' : 'Offboarding', completed: employee.status === 'exited' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <Button variant="ghost" onClick={() => navigate('/employees')}>
          <ArrowLeft size={20} className="mr-2" />
          Back
        </Button>
      </div>

      {/* Profile Header */}
      <Card>
        <div className="p-6">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl">
              {employee.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {employee.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                    {employee.role}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-full font-medium ${
                  statusColors[employee.status]
                }`}>
                  {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail size={18} />
                  <span className="text-sm">{employee.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Briefcase size={18} />
                  <span className="text-sm">{employee.department}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={18} />
                  <span className="text-sm">Joined {employee.hireDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <DollarSign size={18} />
                  <span className="text-sm">${employee.salary?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Lifecycle Timeline */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Employee Lifecycle
          </h2>
          <div className="flex items-center justify-between">
            {lifecycleSteps.map((step, index) => (
              <div key={step.stage} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-2 ${
                    step.completed
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {step.stage}
                  </span>
                </div>
                {index < lifecycleSteps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 ${
                    step.completed ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Additional Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <FileText size={20} className="mr-2" />
              Personal Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Employee ID</span>
                <span className="font-medium">{employee.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Email</span>
                <span className="font-medium">{employee.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Department</span>
                <span className="font-medium">{employee.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Manager</span>
                <span className="font-medium">{employee.manager || 'N/A'}</span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <DollarSign size={20} className="mr-2" />
              Compensation
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Base Salary</span>
                <span className="font-medium">${employee.salary?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Monthly</span>
                <span className="font-medium">${(employee.salary || 0) / 12 | 0}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Payment Status</span>
                <span className="font-medium text-green-600">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Last Payment</span>
                <span className="font-medium">Jan 2024</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default EmployeeDetail

