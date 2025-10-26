import { } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Table } from '../components/ui/Table'
import { DollarSign, Download, FileText, TrendingUp } from 'lucide-react'
import { payrolls, Payroll as PayrollData } from '../data/mockData'

const Payroll = () => {
  const totalPayout = payrolls.reduce((sum, p) => sum + p.netPay, 0)
  const totalDeductions = payrolls.reduce((sum, p) => sum + p.deductions, 0)
  const totalBonus = payrolls.reduce((sum, p) => sum + p.bonus, 0)

  const payrollColumns = [
    { key: 'employee', header: 'Employee' },
    {
      key: 'salary',
      header: 'Salary',
      render: (payroll: PayrollData) => `$${payroll.salary.toLocaleString()}`,
    },
    {
      key: 'deductions',
      header: 'Deductions',
      render: (payroll: PayrollData) => `$${payroll.deductions.toLocaleString()}`,
    },
    {
      key: 'bonus',
      header: 'Bonus',
      render: (payroll: PayrollData) => `$${payroll.bonus.toLocaleString()}`,
    },
    {
      key: 'netPay',
      header: 'Net Pay',
      render: (payroll: PayrollData) => (
        <span className="font-semibold text-green-600">
          ${payroll.netPay.toLocaleString()}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (payroll: PayrollData) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          payroll.status === 'Processed'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        }`}>
          {payroll.status}
        </span>
      ),
    },
    {
      key: 'action',
      header: 'Action',
      render: (payroll: PayrollData) => (
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => alert(`Downloading payroll slip for ${payroll.employee}`)}
        >
          <Download size={16} className="mr-1" />
          Download
        </Button>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Payroll</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage employee payroll and salary information
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Payout</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              ${totalPayout.toLocaleString()}
            </p>
            <p className="text-sm text-green-600 mt-2 flex items-center">
              <TrendingUp size={16} className="mr-1" />
              +12% from last month
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Deductions</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              ${totalDeductions.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Taxes, Benefits, etc.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <DollarSign className="text-white" size={24} />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Bonus</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              ${totalBonus.toLocaleString()}
            </p>
            <p className="text-sm text-blue-600 mt-2">
              Performance rewards
            </p>
          </div>
        </Card>
      </div>

      {/* Payroll Table */}
      <Card>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Employee Payroll
            </h2>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => alert('Generating payroll report...')}
            >
              <FileText size={16} className="mr-2" />
              Generate Report
            </Button>
          </div>
          <Table data={payrolls as any} columns={payrollColumns as any} />
        </div>
      </Card>
    </div>
  )
}

export default Payroll

