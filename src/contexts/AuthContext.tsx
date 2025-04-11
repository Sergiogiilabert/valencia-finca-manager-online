
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '../services/authService';
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  sessionTimeRemaining: number | null; // Tiempo restante en ms
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sessionTimeRemaining, setSessionTimeRemaining] = useState<number | null>(null);

  // Función para verificar y actualizar el estado de la sesión
  const checkSession = () => {
    const currentUser = authService.getCurrentUser();
    
    // Si hay un usuario y tiene expiración
    if (currentUser && currentUser.sessionExpiry) {
      const expiry = new Date(currentUser.sessionExpiry);
      const now = new Date();
      const timeRemaining = expiry.getTime() - now.getTime();
      
      // Si la sesión ha expirado
      if (timeRemaining <= 0) {
        setUser(null);
        setSessionTimeRemaining(null);
        // No notificamos aquí porque authService.getCurrentUser() ya se encarga de limpiar
      } else {
        setUser(currentUser);
        setSessionTimeRemaining(timeRemaining);
        
        // Notificar al usuario cuando queden 5 minutos
        if (timeRemaining <= 5 * 60 * 1000 && timeRemaining > 4.9 * 60 * 1000) {
          toast.warning("Sesión a punto de expirar", {
            description: "Tu sesión expirará en 5 minutos. Guarda tu trabajo.",
          });
        }
      }
    } else {
      setUser(null);
      setSessionTimeRemaining(null);
    }
  };

  // Verificar la sesión al cargar la aplicación
  useEffect(() => {
    checkSession();
    setIsLoading(false);
    
    // Verificar la sesión periódicamente (cada minuto)
    const sessionInterval = setInterval(() => {
      checkSession();
    }, 60 * 1000);
    
    return () => clearInterval(sessionInterval);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const user = await authService.login(email, password);
    if (user) {
      setUser(user);
      setSessionTimeRemaining(2 * 60 * 60 * 1000); // 2 horas en ms
      return true;
    }
    return false;
  };

  const logout = () => {
    if (user) {
      authService.logout(user.email);
      setUser(null);
      setSessionTimeRemaining(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading,
        sessionTimeRemaining
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
