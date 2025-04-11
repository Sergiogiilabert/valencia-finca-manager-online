
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, Shield } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // Redireccionar si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);

    try {
      const success = await login(email, password);
      
      if (success) {
        toast.success("Inicio de sesión exitoso", {
          description: "Bienvenido/a al panel de administración",
        });
        navigate('/dashboard');
      } else {
        // Incrementar contador de intentos fallidos
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);
        
        // Mostrar mensaje de error
        if (newAttempts >= 3) {
          toast.error("Múltiples intentos fallidos", {
            description: "Por seguridad, considera verificar tus credenciales o contactar a soporte",
          });
        } else {
          toast.error("Error al iniciar sesión", {
            description: "Correo electrónico o contraseña incorrectos",
          });
        }
      }
    } catch (error) {
      toast.error("Error al iniciar sesión", {
        description: "Ha ocurrido un error al procesar tu solicitud",
      });
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-valencia-sand flex items-center justify-center py-10">
        <div className="container max-w-md mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-valencia-blue">Acceso de Empleados</h1>
              <p className="text-gray-600 mt-2">
                Introduce tus credenciales para acceder al sistema de gestión
              </p>
            </div>

            <Alert className="mb-6 bg-blue-50 border-blue-200">
              <Shield className="h-4 w-4 text-blue-500" />
              <AlertTitle className="text-blue-700">Seguridad mejorada</AlertTitle>
              <AlertDescription className="text-blue-600">
                Este sistema cumple con GDPR. Tu sesión expirará automáticamente 
                después de 2 horas por motivos de seguridad.
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@valenciafincas.com"
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="pl-10 pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-valencia-blue focus:ring-valencia-blue border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                    Recordarme
                  </label>
                </div>

                <a href="#" className="text-sm font-medium text-valencia-blue hover:text-valencia-blue/80">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full bg-valencia-blue hover:bg-valencia-blue/90"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>¿Problemas para acceder? Contacta con el departamento de IT:</p>
              <a 
                href="mailto:soporte@valenciafincas.com" 
                className="text-valencia-blue hover:text-valencia-blue/80 font-medium"
              >
                soporte@valenciafincas.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
