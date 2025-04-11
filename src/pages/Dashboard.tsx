
import React from 'react';
import { Link } from 'react-router-dom';
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

const Dashboard = () => {
  // Datos de ejemplo para el dashboard
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
    toast.info("Sesión cerrada", {
      description: "Has cerrado sesión correctamente",
    });
    // En una aplicación real, aquí se gestionaría el cierre de sesión
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-valencia-sand">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2 mr-10">
                <span className="text-xl font-bold text-valencia-blue">ValenciaFincas</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link to="/dashboard" className="text-valencia-blue font-medium">Dashboard</Link>
                <Link to="/dashboard/fincas" className="text-gray-600 hover:text-valencia-blue">Fincas</Link>
                <Link to="/dashboard/propietarios" className="text-gray-600 hover:text-valencia-blue">Propietarios</Link>
                <Link to="/dashboard/contabilidad" className="text-gray-600 hover:text-valencia-blue">Contabilidad</Link>
                <Link to="/dashboard/documentos" className="text-gray-600 hover:text-valencia-blue">Documentos</Link>
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
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-valencia-blue">Dashboard</h1>
          <p className="text-gray-600">Bienvenido/a de nuevo, Ana. Aquí está un resumen de la actividad reciente.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Fincas", value: "42", icon: <Building className="h-8 w-8 text-valencia-blue" />, trend: "+2 este mes" },
            { title: "Propietarios", value: "1,250", icon: <Users className="h-8 w-8 text-valencia-orange" />, trend: "+15 este mes" },
            { title: "Tareas Pendientes", value: "18", icon: <CheckCircle className="h-8 w-8 text-valencia-olive" />, trend: "-3 desde ayer" },
            { title: "Incidencias Activas", value: "7", icon: <AlertCircle className="h-8 w-8 text-red-500" />, trend: "+2 hoy" },
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                  <p className="text-xs text-gray-500 mt-1">{stat.trend}</p>
                </div>
                <div className="p-3 rounded-full bg-valencia-sand">{stat.icon}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Task List */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Mis Tareas</CardTitle>
              <Button variant="ghost" size="sm" className="text-valencia-blue">
                Ver todas
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="pending">
                <TabsList className="mb-4">
                  <TabsTrigger value="pending">Pendientes</TabsTrigger>
                  <TabsTrigger value="in-progress">En curso</TabsTrigger>
                  <TabsTrigger value="completed">Completadas</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pending">
                  <div className="space-y-4">
                    {userTasks.filter(task => task.status === "pending").map(task => (
                      <div key={task.id} className="flex items-center p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                        <div className={`h-2 w-2 rounded-full mr-3 ${
                          task.priority === "high" ? "bg-red-500" : 
                          task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                        }`} />
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-800">{task.title}</h4>
                          <p className="text-xs text-gray-500">Vence: {new Date(task.due).toLocaleDateString()}</p>
                        </div>
                        <Button size="sm" variant="ghost">Empezar</Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="in-progress">
                  <div className="space-y-4">
                    {userTasks.filter(task => task.status === "in-progress").map(task => (
                      <div key={task.id} className="flex items-center p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                        <div className={`h-2 w-2 rounded-full mr-3 ${
                          task.priority === "high" ? "bg-red-500" : 
                          task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"
                        }`} />
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-800">{task.title}</h4>
                          <p className="text-xs text-gray-500">Vence: {new Date(task.due).toLocaleDateString()}</p>
                        </div>
                        <Button size="sm" className="bg-valencia-olive hover:bg-valencia-olive/90">Completar</Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="completed">
                  <div className="space-y-4">
                    {userTasks.filter(task => task.status === "completed").map(task => (
                      <div key={task.id} className="flex items-center p-3 bg-white rounded-lg border hover:shadow-sm transition-shadow">
                        <div className="h-2 w-2 rounded-full mr-3 bg-gray-400" />
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-600 line-through">{task.title}</h4>
                          <p className="text-xs text-gray-500">Completada: {new Date(task.due).toLocaleDateString()}</p>
                        </div>
                        <Button size="sm" variant="ghost" className="text-gray-400">Archivar</Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Upcoming Meetings */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Próximas Reuniones</CardTitle>
              <Button variant="ghost" size="sm" className="text-valencia-blue">
                <Calendar className="h-4 w-4 mr-1" />
                Calendario
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-3 rounded-lg border hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{meeting.title}</h4>
                      <span className="text-xs bg-valencia-blue/10 text-valencia-blue px-2 py-0.5 rounded-full">
                        {new Date(meeting.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{meeting.location}</p>
                    <div className="flex justify-between mt-3">
                      <span className="text-xs flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" /> {meeting.time}
                      </span>
                      <Button variant="outline" size="sm" className="h-7 text-xs">Detalles</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Incidents */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Incidencias Recientes</CardTitle>
              <Button variant="ghost" size="sm" className="text-valencia-blue">
                Ver todas
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentIncidents.map((incident) => (
                  <div key={incident.id} className="p-3 rounded-lg border hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{incident.title}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        incident.status === "resolved" ? "bg-green-100 text-green-800" : 
                        incident.status === "in-progress" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-red-100 text-red-800"
                      }`}>
                        {incident.status === "resolved" ? "Resuelto" : 
                         incident.status === "in-progress" ? "En progreso" : "Pendiente"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{incident.location}</p>
                    <p className="text-xs text-gray-500 mt-2">Reportado: {new Date(incident.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Property Overview */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Estado de las Fincas</CardTitle>
              <Button variant="ghost" size="sm" className="text-valencia-blue">
                Detalles
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Cumplimiento Normativo", value: 92 },
                  { name: "Salud Financiera", value: 85 },
                  { name: "Estado Mantenimiento", value: 78 },
                  { name: "Satisfacción Propietarios", value: 89 }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card>
            <CardHeader className="flex flex-row items-center pb-2">
              <CardTitle className="text-xl">Accesos Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <FileText className="h-6 w-6" />, name: "Documentos", href: "/dashboard/documentos" },
                  { icon: <BarChart className="h-6 w-6" />, name: "Informes", href: "/dashboard/informes" },
                  { icon: <Calendar className="h-6 w-6" />, name: "Calendario", href: "/dashboard/calendario" },
                  { icon: <Database className="h-6 w-6" />, name: "Base de datos", href: "/dashboard/database" },
                  { icon: <Home className="h-6 w-6" />, name: "Web pública", href: "/" },
                  { icon: <Settings className="h-6 w-6" />, name: "Configuración", href: "/dashboard/settings" },
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.href}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-valencia-sand transition-colors"
                  >
                    <div className="p-2 rounded-full bg-valencia-sand mb-2">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
