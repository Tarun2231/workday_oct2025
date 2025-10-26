import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Recruitment from './pages/Recruitment'
import Employees from './pages/Employees'
import EmployeeDetail from './pages/EmployeeDetail'
import Attendance from './pages/Attendance'
import Payroll from './pages/Payroll'
import Performance from './pages/Performance'
import Offboarding from './pages/Offboarding'
import Settings from './pages/Settings'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="recruitment" element={<Recruitment />} />
              <Route path="employees" element={<Employees />} />
              <Route path="employees/:id" element={<EmployeeDetail />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="payroll" element={<Payroll />} />
              <Route path="performance" element={<Performance />} />
              <Route path="offboarding" element={<Offboarding />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

