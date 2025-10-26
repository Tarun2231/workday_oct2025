export interface Employee {
  id: string
  name: string
  email: string
  role: string
  department: string
  status: 'active' | 'onboarding' | 'offboarding' | 'exited'
  avatar?: string
  hireDate: string
  manager?: string
  salary?: number
}

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  status: 'Open' | 'Closed'
  candidates: number
  postedDate: string
}

export interface Candidate {
  id: string
  name: string
  email: string
  role: string
  stage: 'Applied' | 'Screening' | 'Interview' | 'Offer' | 'Hired'
  status: string
  appliedDate: string
}

export interface LeaveRequest {
  id: string
  employee: string
  type: string
  startDate: string
  endDate: string
  reason: string
  status: 'Pending' | 'Approved' | 'Rejected'
  approver: string
}

export interface Payroll {
  id: string
  employee: string
  salary: number
  deductions: number
  bonus: number
  netPay: number
  status: 'Processed' | 'Pending'
  month: string
}

export interface Performance {
  id: string
  employee: string
  kpi: string
  rating: number
  feedback: string
  manager: string
  date: string
}

export const employees: Employee[] = [
  { id: '1', name: 'John Smith', email: 'john@example.com', role: 'Software Engineer', department: 'Engineering', status: 'active', hireDate: '2022-01-15', manager: 'Sarah Johnson', salary: 95000 },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Engineering Manager', department: 'Engineering', status: 'active', hireDate: '2019-03-20', salary: 120000 },
  { id: '3', name: 'Michael Chen', email: 'michael@example.com', role: 'Product Manager', department: 'Product', status: 'active', hireDate: '2021-06-10', manager: 'Emma Davis', salary: 110000 },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', role: 'HR Specialist', department: 'Human Resources', status: 'active', hireDate: '2023-02-01', manager: 'Robert Brown', salary: 65000 },
  { id: '5', name: 'Robert Brown', email: 'robert@example.com', role: 'HR Director', department: 'Human Resources', status: 'active', hireDate: '2018-07-01', salary: 105000 },
  { id: '6', name: 'David Lee', email: 'david@example.com', role: 'UX Designer', department: 'Design', status: 'active', hireDate: '2022-09-15', manager: 'Lisa Wang', salary: 85000 },
  { id: '7', name: 'Lisa Wang', email: 'lisa@example.com', role: 'Design Lead', department: 'Design', status: 'active', hireDate: '2020-04-10', salary: 100000 },
  { id: '8', name: 'James Wilson', email: 'james@example.com', role: 'Sales Representative', department: 'Sales', status: 'active', hireDate: '2023-01-05', manager: 'Nancy Garcia', salary: 70000 },
  { id: '9', name: 'Nancy Garcia', email: 'nancy@example.com', role: 'Sales Director', department: 'Sales', status: 'active', hireDate: '2017-11-20', salary: 115000 },
  { id: '10', name: 'Alex Thompson', email: 'alex@example.com', role: 'Marketing Manager', department: 'Marketing', status: 'onboarding', hireDate: '2024-01-15', manager: 'Patricia Taylor', salary: 88000 },
]

export const jobs: Job[] = [
  { id: '1', title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', status: 'Open', candidates: 12, postedDate: '2024-01-10' },
  { id: '2', title: 'Product Designer', department: 'Design', location: 'New York', type: 'Full-time', status: 'Open', candidates: 8, postedDate: '2024-01-12' },
  { id: '3', title: 'HR Coordinator', department: 'Human Resources', location: 'San Francisco', type: 'Full-time', status: 'Closed', candidates: 15, postedDate: '2023-12-15' },
  { id: '4', title: 'Sales Representative', department: 'Sales', location: 'Chicago', type: 'Full-time', status: 'Open', candidates: 5, postedDate: '2024-01-08' },
]

export const candidates: Candidate[] = [
  { id: '1', name: 'Alice Cooper', email: 'alice@example.com', role: 'Senior Software Engineer', stage: 'Interview', status: 'In Progress', appliedDate: '2024-01-10' },
  { id: '2', name: 'Bob Miller', email: 'bob@example.com', role: 'Product Designer', stage: 'Screening', status: 'Active', appliedDate: '2024-01-12' },
  { id: '3', name: 'Charlie Adams', email: 'charlie@example.com', role: 'Sales Representative', stage: 'Offer', status: 'Pending', appliedDate: '2024-01-08' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Senior Software Engineer', stage: 'Applied', status: 'New', appliedDate: '2024-01-15' },
]

export const leaveRequests: LeaveRequest[] = [
  { id: '1', employee: 'John Smith', type: 'Sick Leave', startDate: '2024-01-20', endDate: '2024-01-20', reason: 'Medical appointment', status: 'Approved', approver: 'Sarah Johnson' },
  { id: '2', employee: 'Michael Chen', type: 'Vacation', startDate: '2024-02-01', endDate: '2024-02-05', reason: 'Family vacation', status: 'Pending', approver: 'Emma Davis' },
  { id: '3', employee: 'Emily Davis', type: 'Personal', startDate: '2024-01-25', endDate: '2024-01-25', reason: 'Personal matters', status: 'Approved', approver: 'Robert Brown' },
]

export const payrolls: Payroll[] = [
  { id: '1', employee: 'John Smith', salary: 95000, deductions: 8500, bonus: 2000, netPay: 88500, status: 'Processed', month: 'January 2024' },
  { id: '2', employee: 'Sarah Johnson', salary: 120000, deductions: 11000, bonus: 3000, netPay: 112000, status: 'Processed', month: 'January 2024' },
  { id: '3', employee: 'Michael Chen', salary: 110000, deductions: 9500, bonus: 2500, netPay: 103000, status: 'Processed', month: 'January 2024' },
  { id: '4', employee: 'Emily Davis', salary: 65000, deductions: 5200, bonus: 1000, netPay: 60800, status: 'Processed', month: 'January 2024' },
  { id: '5', employee: 'Robert Brown', salary: 105000, deductions: 9200, bonus: 2800, netPay: 98600, status: 'Processed', month: 'January 2024' },
]

export const performances: Performance[] = [
  { id: '1', employee: 'John Smith', kpi: 'Code Quality', rating: 4.5, feedback: 'Excellent work on recent projects', manager: 'Sarah Johnson', date: '2024-01-15' },
  { id: '2', employee: 'Michael Chen', kpi: 'Product Delivery', rating: 4.8, feedback: 'Great leadership on product roadmap', manager: 'Emma Davis', date: '2024-01-12' },
  { id: '3', employee: 'David Lee', kpi: 'Design Quality', rating: 4.6, feedback: 'Innovative design solutions', manager: 'Lisa Wang', date: '2024-01-10' },
]

