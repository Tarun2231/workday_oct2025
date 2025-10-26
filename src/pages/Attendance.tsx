import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Table } from '../components/ui/Table'
import { CheckCircle, XCircle, Calendar } from 'lucide-react'
import { leaveRequests, LeaveRequest } from '../data/mockData'

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const [isCheckedOut, setIsCheckedOut] = useState(false)
  const [checkInTime, setCheckInTime] = useState<string>('')
  const [checkOutTime, setCheckOutTime] = useState<string>('')
  
  const handleCheckIn = () => {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    setCheckInTime(time)
    setIsCheckedIn(true)
    alert(`Checked in at ${time}`)
  }
  
  const handleCheckOut = () => {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    setCheckOutTime(time)
    setIsCheckedOut(true)
    alert(`Checked out at ${time}`)
  }

  const attendanceData = [
    { date: '2024-01-01', checkIn: '09:00', checkOut: '18:00', status: 'Present' },
    { date: '2024-01-02', checkIn: '09:15', checkOut: '18:30', status: 'Present' },
    { date: '2024-01-03', checkIn: '09:00', checkOut: '18:00', status: 'Present' },
    { date: '2024-01-04', checkIn: '-', checkOut: '-', status: 'Leave' },
    { date: '2024-01-05', checkIn: '09:00', checkOut: '18:00', status: 'Present' },
  ]

  const attendanceColumns = [
    { key: 'date', header: 'Date' },
    { key: 'checkIn', header: 'Check In' },
    { key: 'checkOut', header: 'Check Out' },
    {
      key: 'status',
      header: 'Status',
      render: (item: typeof attendanceData[0]) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          item.status === 'Present'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        }`}>
          {item.status}
        </span>
      ),
    },
  ]

  const leaveColumns = [
    { key: 'employee', header: 'Employee' },
    { key: 'type', header: 'Type' },
    { key: 'startDate', header: 'Start Date' },
    { key: 'endDate', header: 'End Date' },
    {
      key: 'status',
      header: 'Status',
      render: (leave: LeaveRequest) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          leave.status === 'Approved'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : leave.status === 'Rejected'
            ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        }`}>
          {leave.status}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Attendance</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track attendance and manage leave requests
        </p>
      </div>

      {/* Check In/Out */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Today's Attendance
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Check In</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {checkInTime || '-'}
                </p>
              </div>
              <div className="text-gray-300 dark:text-gray-600">|</div>
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Check Out</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {checkOutTime || '-'}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3">
            <Button
              onClick={handleCheckIn}
              disabled={isCheckedIn}
              className="flex-1"
            >
              <CheckCircle size={20} className="mr-2" />
              Check In
            </Button>
            <Button
              onClick={handleCheckOut}
              variant="secondary"
              disabled={!isCheckedIn || isCheckedOut}
              className="flex-1"
            >
              <XCircle size={20} className="mr-2" />
              Check Out
            </Button>
          </div>
        </div>
      </Card>

      {/* Attendance History */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <Calendar size={20} className="mr-2" />
            Attendance History
          </h2>
          <Table data={attendanceData} columns={attendanceColumns} />
        </div>
      </Card>

      {/* Leave Requests */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Leave Requests
          </h2>
          <Table data={leaveRequests as any} columns={leaveColumns as any} />
        </div>
      </Card>
    </div>
  )
}

export default Attendance

