import { } from 'react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { User, Bell, Moon, Sun, Key, Camera } from 'lucide-react'

const Settings = () => {
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()
  
  const handleSaveChanges = () => {
    alert('Profile information saved successfully!')
  }
  
  const handleUpdatePassword = () => {
    alert('Password updated successfully!')
  }
  
  const handleUploadPhoto = () => {
    alert('Please select a photo file to upload')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Settings */}
      <Card>
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              {user?.name?.[0] || 'U'}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {user?.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium capitalize">
                  {user?.role}
                </span>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleUploadPhoto}>
              <Camera size={18} className="mr-2" />
              Upload Photo
            </Button>
          </div>
        </div>
      </Card>

      {/* Personal Information */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <User size={20} className="mr-2" />
            Personal Information
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user?.name}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  defaultValue="Human Resources"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Button onClick={handleSaveChanges}>Save Changes</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Security Settings */}
      <Card>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
            <Key size={20} className="mr-2" />
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Button onClick={handleUpdatePassword}>Update Password</Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
              <Bell size={20} className="mr-2" />
              Notifications
            </h2>
            <div className="space-y-4">
              {[
                { label: 'Email Notifications', enabled: true },
                { label: 'Push Notifications', enabled: true },
                { label: 'SMS Notifications', enabled: false },
                { label: 'Weekly Summary', enabled: true },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={item.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
              {theme === 'dark' ? <Sun size={20} className="mr-2" /> : <Moon size={20} className="mr-2" />}
              Appearance
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">Theme</span>
                <Button variant="secondary" onClick={toggleTheme}>
                  {theme === 'dark' ? (
                    <>
                      <Sun size={18} className="mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={18} className="mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Currently using {theme === 'dark' ? 'dark' : 'light'} theme
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Settings

