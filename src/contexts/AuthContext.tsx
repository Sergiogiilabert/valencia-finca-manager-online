
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '../services/authService';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from "sonner";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication status only on initial load and path changes
  useEffect(() => {
    const checkAuth = () => {
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
      setIsLoading(false);
    };
    
    checkAuth();
  }, [location.pathname]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const user = await authService.login(email, password);
      if (user) {
        setUser(user);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error durante el login:", error);
      return false;
    }
  };

  const logout = () => {
    // Force complete cleanup
    setUser(null);
    
    // Call the service to clear storage
    authService.logout();
    
    // Show success notification
    toast.success("Sesión cerrada correctamente");
    
    // Redirect to home with replace to prevent back navigation
    navigate('/', { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isLoading
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
