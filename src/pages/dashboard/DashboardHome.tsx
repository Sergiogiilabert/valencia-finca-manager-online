
import React from 'react';
import { 
  Calendar, 
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart2,
  Building,
  Users,
  FileText,
  DollarSign,
  Briefcase,
  Percent,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { BarChart } from "recharts";

const DashboardHome = () => {
  const userTasks = [
    { id: 1, title: "Revisar presupuesto Finca Av. Blasco Ibáñez", status: "pending", priority: "high", due: "2025-04-09" },
    { id: 2, title: "Preparar junta ordinaria C/ Colón", status: "in-progress", priority: "medium", due: "2025-04-12" },
    { id: 3, title: "Gestionar incidencia fontanería C/ Ruzafa", status: "completed", priority: "low", due: "2025-04-05" },
    { id: 4, title: "Contactar con proveedor de mantenimiento", status: "pending", priority: "medium", due: "2025-04-15" },
    { id: 5, title: "Revisar contabilidad trimestral", status: "pending", priority: "high", due: "2025-04-18" },
  ];

  const upcomingMeetings = [
    { id: 1, title: "Junta Ordinaria", location: "Comunidad C/ Hernán Cortés, 15", date: "2025-04-10", time: "18:30" },
    { id: 2, title: "Reunión Extraordinaria", location: "Comunidad Av. Reino de Valencia, 28", date: "2025-04-12", time: "19:00" },
    { id: 3, title: "Asamblea General", location: "Salón de Actos Edificio Plaza del Ayuntamiento", date: "2025-04-20", time: "17:00" },
  ];

  const recentIncidents = [
    { id: 1, title: "Avería ascensor", location: "C/ Cirilo Amorós, 24", status: "resolved", date: "2025-04-04" },
    { id: 2, title: "Filtración agua terraza", location: "Av. Francia, 12", status: "in-progress", date: "2025-04-06" },
    { id: 3, title: "Problema eléctrico", location: "Plaza del Ayuntamiento, 5", status: "pending", date: "2025-04-07" },
    { id: 4, title: "Grietas en fachada", location: "C/ Jorge Juan, 8", status: "in-progress", date: "2025-04-02" },
  ];

  const communityStats = [
    { id: 1, name: "Comunidades gestionadas", value: 128, change: 12, changeType: "increase", icon: <Building className="h-6 w-6 text-valencia-blue" /> },
    { id: 2, name: "Propietarios", value: 3842, change: 156, changeType: "increase", icon: <Users className="h-6 w-6 text-valencia-orange" /> },
    { id: 3, name: "Incidencias activas", value: 47, change: 8, changeType: "decrease", icon: <AlertCircle className="h-6 w-6 text-red-500" /> },
    { id: 4, name: "Documentos gestionados", value: 15280, change: 423, changeType: "increase", icon: <FileText className="h-6 w-6 text-green-500" /> },
  ];

  const financialData = [
    { month: "Ene", ingresos: 125000, gastos: 115000 },
    { month: "Feb", ingresos: 130000, gastos: 118000 },
    { month: "Mar", ingresos: 128000, gastos: 120000 },
    { month: "Abr", ingresos: 135000, gastos: 122000 },
    { month: "May", ingresos: 140000, gastos: 125000 },
    { month: "Jun", ingresos: 145000, gastos: 127000 },
  ];

  const upcomingPayments = [
    { id: 1, concept: "Cuota mantenimiento junio", amount: 12450, dueDate: "2025-06-05", status: "pendiente" },
    { id: 2, concept: "Seguro edificio anual", amount: 8750, dueDate: "2025-04-30", status: "pendiente" },
    { id: 3, concept: "Servicio limpieza", amount: 2400, dueDate: "2025-04-15", status: "pendiente" },
  ];

  const projectsInProgress = [
    { id: 1, name: "Renovación fachada C/ Colón", progress: 75, startDate: "2025-02-15", endDate: "2025-05-20" },
    { id: 2, name: "Instalación placas solares", progress: 30, startDate: "2025-03-10", endDate: "2025-06-30" },
    { id: 3, name: "Reforma escaleras acceso", progress: 90, startDate: "2025-03-01", endDate: "2025-04-25" },
  ];

  const propertyTypes = [
    { type: "Residencial", count: 98, color: "bg-blue-500" },
    { type: "Comercial", count: 12, color: "bg-green-500" },
    { type: "Mixto", count: 18, color: "bg-orange-500" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {communityStats.map((stat) => (
          <Card key={stat.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value.toLocaleString()}</p>
                </div>
                <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
              </div>
              <div className="mt-4 flex items-center text-xs font-medium">
                {stat.changeType === "increase" ? (
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={stat.changeType === "increase" ? "text-green-500" : "text-red-500"}>
                  {stat.change} {stat.changeType === "increase" ? "más" : "menos"}
                </span>
                <span className="text-gray-500 ml-1">que el mes pasado</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Tasks Card */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Tareas Pendientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {userTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        task.status === "completed" ? "bg-green-100 text-green-800" : 
                        task.status === "in-progress" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-red-100 text-red-800"
                      }`}>
                        {task.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Financial Overview */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-blue-600" />
              Resumen Financiero
            </CardTitle>
            <CardDescription>Ingresos vs. Gastos (últimos 6 meses)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              {/* This is a placeholder for the chart - would use Recharts in a real implementation */}
              <div className="h-full flex flex-col space-y-2">
                {financialData.map((item) => (
                  <div key={item.month} className="flex flex-col">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.month}</span>
                      <span>€{item.ingresos.toLocaleString()}</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-valencia-blue rounded-full" 
                        style={{ width: `${(item.ingresos / 150000) * 100}%` }} 
                      />
                    </div>
                    <div className="flex justify-between text-sm mt-1 mb-3">
                      <span></span>
                      <span className="text-gray-500">€{item.gastos.toLocaleString()}</span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-valencia-orange rounded-full" 
                        style={{ width: `${(item.gastos / 150000) * 100}%` }} 
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-valencia-blue rounded-full mr-2"></div>
                    <span className="text-sm">Ingresos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-valencia-orange rounded-full mr-2"></div>
                    <span className="text-sm">Gastos</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Upcoming Meetings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Próximas Reuniones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {upcomingMeetings.map((meeting) => (
                  <TableRow key={meeting.id}>
                    <TableCell>
                      <div className="font-medium">{meeting.title}</div>
                      <div className="text-sm text-gray-500">{meeting.location}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-medium">{meeting.date}</div>
                      <div className="text-sm text-gray-500">{meeting.time}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              Incidencias Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {recentIncidents.map((incident) => (
                  <TableRow key={incident.id}>
                    <TableCell>
                      <div className="font-medium">{incident.title}</div>
                      <div className="text-sm text-gray-500">{incident.location}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        incident.status === "resolved" ? "bg-green-100 text-green-800" : 
                        incident.status === "in-progress" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {incident.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Upcoming Payments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Próximos Pagos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {upcomingPayments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>
                      <div className="font-medium">{payment.concept}</div>
                      <div className="text-sm text-gray-500">Vencimiento: {payment.dueDate}</div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="font-medium text-green-600">€{payment.amount.toLocaleString()}</div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Projects in Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-valencia-blue" />
              Proyectos en Curso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projectsInProgress.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Inicio: {project.startDate}</span>
                    <span>Fin: {project.endDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Property Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-valencia-blue" />
              Tipos de Propiedades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {propertyTypes.map((type) => (
                <div key={type.type}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{type.type}</span>
                    <span className="text-sm">
                      {type.count} <span className="text-gray-500">({Math.round((type.count / 128) * 100)}%)</span>
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${type.color} rounded-full`}
                      style={{ width: `${(type.count / 128) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
