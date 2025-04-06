import { createContext, useState, useContext, ReactNode } from 'react'

type User = {
  id: string
  email: string
}

type AuthContextType = {
  user: User | null
  active: boolean
  createSession: (user: User) => void
  deleteSession: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [active, setActive] = useState<boolean>(false)

  const createSession = (user: User) => {
    setUser(user)
    setActive(true)
  }

  const deleteSession = () => {
    setUser(null)
    setActive(false)
  }

  return (
    <AuthContext.Provider
      value={{ user, active, createSession, deleteSession }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}
