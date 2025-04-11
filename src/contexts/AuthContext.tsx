import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '../services/authService';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const checkSession = () => {
    const currentUser = authService.getCurrentUser();
    
    if (currentUser && currentUser.sessionExpiry) {
      const expiry = new Date(currentUser.sessionExpiry);
      const now = new Date();
      const timeRemaining = expiry.getTime() - now.getTime();
      
      if (timeRemaining <= 0) {
        setUser(null);
        setSessionTimeRemaining(null);
      } else {
        setUser(currentUser);
        setSessionTimeRemaining(timeRemaining);
        
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

  useEffect(() => {
    checkSession();
    setIsLoading(false);
    
    const sessionInterval = setInterval(() => {
      checkSession();
    }, 60 * 1000);
    
    return () => clearInterval(sessionInterval);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const user = await authService.login(email, password);
    if (user) {
      setUser(user);
      setSessionTimeRemaining(2 * 60 * 60 * 1000);
      return true;
    }
    return false;
  };

  const logout = () => {
    if (user) {
      authService.logout(user.email);
      setUser(null);
      setSessionTimeRemaining(null);
      
      navigate('/login');
      
      toast.success("Sesión cerrada", {
        description: "Has cerrado sesión correctamente",
      });
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
