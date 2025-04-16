
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Cita from "./pages/Cita";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Databases from "./pages/dashboard/Databases";
import Accounting from "./pages/dashboard/Accounting";
import Documents from "./pages/dashboard/Documents";
import Reports from "./pages/dashboard/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Componente para proteger rutas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  
  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Cargando...</div>;
  }
  
  if (!isAuthenticated) {
    // Guardar la ruta actual para redireccionar después de login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

// Componente interno que usa React Router
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/servicios" element={<Servicios />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/cita" element={<Cita />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }>
      <Route path="databases" element={<Databases />} />
      <Route path="accounting" element={<Accounting />} />
      <Route path="documents" element={<Documents />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

// Componente principal que configura el contexto de autenticación
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
