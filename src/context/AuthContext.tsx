import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type UserRole = 'admin' | 'hr' | 'manager' | 'employee'

interface User {
  id: string
  email: string
  name: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const login = (email: string, _password: string, role: UserRole) => {
    const mockUser: User = {
      id: '1',
      email,
      name: role === 'admin' ? 'Admin User' : role === 'hr' ? 'HR Manager' : role === 'manager' ? 'Team Manager' : 'John Doe',
      role
    }
    setUser(mockUser)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

