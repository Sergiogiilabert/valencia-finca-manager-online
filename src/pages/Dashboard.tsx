import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  FileText, 
  Bell, 
  Search, 
  LogOut, 
  Home, 
  BarChart, 
  Building,
  Database,
  CheckCircle,
  Clock,
  AlertCircle,
  Settings,
  User
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const userTasks = [
    { id: 1, title: "Revisar presupuesto Finca Av. Blasco Ibáñez", status: "pending", priority: "high", due: "2025-04-09" },
    { id: 2, title: "Preparar junta ordinaria C/ Colón", status: "in-progress", priority: "medium", due: "2025-04-12" },
    { id: 3, title: "Gestionar incidencia fontanería C/ Ruzafa", status: "completed", priority: "low", due: "2025-04-05" },
    { id: 4, title: "Actualizar datos fiscales comunidad Gran Vía", status: "pending", priority: "medium", due: "2025-04-10" },
    { id: 5, title: "Llamar a proveedor mantenimiento ascensores", status: "in-progress", priority: "high", due: "2025-04-08" },
  ];

  const upcomingMeetings = [
    { id: 1, title: "Junta Ordinaria", location: "Comunidad C/ Hernán Cortés, 15", date: "2025-04-10", time: "18:30" },
    { id: 2, title: "Reunión Extraordinaria", location: "Comunidad Av. Reino de Valencia, 28", date: "2025-04-12", time: "19:00" },
    { id: 3, title: "Visita Técnica", location: "Edificio C/ Sorní, 8", date: "2025-04-15", time: "10:00" },
  ];

  const recentIncidents = [
    { id: 1, title: "Avería ascensor", location: "C/ Cirilo Amorós, 24", status: "resolved", date: "2025-04-04" },
    { id: 2, title: "Filtración agua terraza", location: "Av. Francia, 12", status: "in-progress", date: "2025-04-06" },
    { id: 3, title: "Problema eléctrico", location: "Plaza del Ayuntamiento, 5", status: "pending", date: "2025-04-07" },
  ];

  const handleLogout = () => {
    logout();
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-valencia-sand">
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2 mr-10">
                <span className="text-xl font-bold text-valencia-blue">ValenciaFincas</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard" className="text-valencia-blue font-medium">Dashboard</Link>
                <Link to="/dashboard/databases" className="text-gray-600 hover:text-valencia-blue">Bases de Datos</Link>
                <Link to="/dashboard/accounting" className="text-gray-600 hover:text-valencia-blue">Contabilidad</Link>
                <Link to="/dashboard/documents" className="text-gray-600 hover:text-valencia-blue">Documentos</Link>
                <Link to="/dashboard/reports" className="text-gray-600 hover:text-valencia-blue">Informes</Link>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-10 py-2 w-full"
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      3
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notificaciones</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {[
                    { title: "Nueva incidencia reportada", desc: "Filtración de agua en C/ Sorní, 12", time: "Hace 10 minutos" },
                    { title: "Recordatorio de junta", desc: "Junta ordinaria mañana a las 18:00", time: "Hace 1 hora" },
                    { title: "Mensaje de propietario", desc: "El Sr. Martínez solicita información", time: "Hace 3 horas" }
                  ].map((item, i) => (
                    <DropdownMenuItem key={i} className="cursor-pointer p-4 hover:bg-gray-100">
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                        <p className="text-gray-400 text-xs mt-2">{item.time}</p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer flex justify-center">
                    <Link to="/dashboard/notificaciones" className="text-valencia-blue text-sm font-medium">
                      Ver todas las notificaciones
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative flex items-center gap-2 hover:bg-valencia-sand/50"
                  >
                    <div className="h-8 w-8 rounded-full bg-valencia-blue flex items-center justify-center text-white">
                      AM
                    </div>
                    <div className="hidden md:block text-left">
                      <p className="text-sm font-medium">Ana Martínez</p>
                      <p className="text-xs text-gray-500">Administradora</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleReturnHome} 
                className="mr-2"
                title="Volver a la página principal"
              >
                <Home className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
