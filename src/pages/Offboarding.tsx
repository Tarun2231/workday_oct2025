import React, { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Table } from '../components/ui/Table'
import { CheckCircle, Clock, XCircle } from 'lucide-react'

const Offboarding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    employee: '',
    exitDate: '',
    reason: 'Career Change'
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Offboarding process initiated successfully!')
    setIsModalOpen(false)
    setFormData({ employee: '', exitDate: '', reason: 'Career Change' })
  }

  const exitRequests = [
    { id: '1', employee: 'Alice Johnson', department: 'Engineering', exitDate: '2024-02-28', reason: 'Career Change', status: 'Pending' },
    { id: '2', employee: 'Bob Williams', department: 'Sales', exitDate: '2024-03-10', reason: 'Relocation', status: 'In Progress' },
    { id: '3', employee: 'Carol Davis', department: 'Design', exitDate: '2024-01-25', reason: 'Personal', status: 'Completed' },
  ]

  const clearanceChecklist = [
    { item: 'HR Clearance', status: 'Pending', department: 'HR' },
    { item: 'IT Clearance', status: 'Pending', department: 'IT' },
    { item: 'Finance Clearance', status: 'Completed', department: 'Finance' },
    { item: 'Asset Return', status: 'In Progress', department: 'Admin' },
    { item: 'Exit Interview', status: 'Scheduled', department: 'HR' },
  ]

  const finalSettlement = {
    lastSalary: 8500,
    accruedLeave: 5,
    leaveEncashment: 2125,
    totalDeductions: 850,
    finalAmount: 9775,
  }

  const exitColumns = [
    { key: 'employee', header: 'Employee' },
    { key: 'department', header: 'Department' },
    { key: 'exitDate', header: 'Exit Date' },
    { key: 'reason', header: 'Reason' },
    {
      key: 'status',
      header: 'Status',
      render: (request: typeof exitRequests[0]) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          request.status === 'Completed'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : request.status === 'In Progress'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        }`}>
          {request.status}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Offboarding</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage employee exit process and clearances
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          Initiate Offboarding
        </Button>
      </div>

      {/* Exit Requests */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Exit Requests
          </h2>
          <Table data={exitRequests} columns={exitColumns} />
        </div>
      </Card>

      {/* Clearance Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Clearance Checklist
            </h2>
            <div className="space-y-3">
              {clearanceChecklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{item.item}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.department}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.status === 'Completed' && (
                      <CheckCircle className="text-green-600" size={20} />
                    )}
                    {item.status === 'Pending' && (
                      <Clock className="text-yellow-600" size={20} />
                    )}
                    {item.status === 'In Progress' && (
                      <XCircle className="text-blue-600" size={20} />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Final Settlement */}
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Final Settlement
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Last Salary</span>
                <span className="font-semibold">${finalSettlement.lastSalary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Accrued Leave</span>
                <span className="font-semibold">{finalSettlement.accruedLeave} days</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Leave Encashment</span>
                <span className="font-semibold">${finalSettlement.leaveEncashment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Deductions</span>
                <span className="font-semibold text-red-600">
                  -${finalSettlement.totalDeductions.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-4 mt-4 bg-green-50 dark:bg-green-900/20 rounded-lg px-3">
                <span className="font-bold text-gray-900 dark:text-gray-100">Final Amount</span>
                <span className="font-bold text-green-600 text-lg">
                  ${finalSettlement.finalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Initiate Offboarding Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Initiate Offboarding"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Employee
            </label>
            <select 
              value={formData.employee}
              onChange={(e) => setFormData({ ...formData, employee: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select employee</option>
              <option>Alice Johnson</option>
              <option>Bob Williams</option>
              <option>Carol Davis</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Exit Date
            </label>
            <input
              type="date"
              value={formData.exitDate}
              onChange={(e) => setFormData({ ...formData, exitDate: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Reason
            </label>
            <select 
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="Career Change">Career Change</option>
              <option value="Relocation">Relocation</option>
              <option value="Personal">Personal</option>
              <option value="Resigned">Resigned</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Initiate Process
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Offboarding

