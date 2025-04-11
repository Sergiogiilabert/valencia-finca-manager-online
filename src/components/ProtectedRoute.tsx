
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProviderProps {
  children: React.ReactNode;
}

export const ProtectedRouteProvider = ({ children }: ProtectedRouteProviderProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Cargando...</div>;
  }
  
  if (!isAuthenticated) {
    // Redirigir al login pero recordar de dónde venía el usuario
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};
