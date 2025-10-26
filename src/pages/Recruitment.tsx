import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { Table } from '../components/ui/Table'
import { Plus } from 'lucide-react'
import { jobs, candidates, Job, Candidate } from '../data/mockData'

const Recruitment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    department: 'Engineering',
    location: '',
    type: 'Full-time'
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Job posted: ${formData.title} in ${formData.department}`)
    setIsModalOpen(false)
    setFormData({ title: '', department: 'Engineering', location: '', type: 'Full-time' })
  }

  const jobColumns = [
    { key: 'title', header: 'Job Title' },
    { key: 'department', header: 'Department' },
    { key: 'location', header: 'Location' },
    { key: 'type', header: 'Type' },
    {
      key: 'status',
      header: 'Status',
      render: (job: Job) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          job.status === 'Open' 
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' 
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
        }`}>
          {job.status}
        </span>
      ),
    },
    {
      key: 'candidates',
      header: 'Candidates',
      render: (job: Job) => <span className="font-medium">{job.candidates}</span>,
    },
  ]

  const candidateColumns = [
    { key: 'name', header: 'Name' },
    { key: 'role', header: 'Position' },
    {
      key: 'stage',
      header: 'Stage',
      render: (candidate: Candidate) => (
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
          {candidate.stage}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (candidate: Candidate) => (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          candidate.status === 'Active' || candidate.status === 'In Progress'
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        }`}>
          {candidate.status}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Recruitment</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage job postings and candidate pipeline
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus size={20} className="mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Job Postings */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Active Job Postings
          </h2>
          <Table data={jobs as any} columns={jobColumns as any} />
        </div>
      </Card>

      {/* Candidates */}
      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Candidate Pipeline
          </h2>
          <Table data={candidates as any} columns={candidateColumns as any} />
        </div>
      </Card>

      {/* Add Job Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Post New Job"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Senior Software Engineer"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Department
              </label>
              <select 
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Engineering">Engineering</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                placeholder="Remote / Office"
                required
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Post Job
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Recruitment

