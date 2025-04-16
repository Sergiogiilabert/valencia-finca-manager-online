
import React from 'react';
import { 
  Calendar, 
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DashboardHome = () => {
  const userTasks = [
    { id: 1, title: "Revisar presupuesto Finca Av. Blasco Ibáñez", status: "pending", priority: "high", due: "2025-04-09" },
    { id: 2, title: "Preparar junta ordinaria C/ Colón", status: "in-progress", priority: "medium", due: "2025-04-12" },
    { id: 3, title: "Gestionar incidencia fontanería C/ Ruzafa", status: "completed", priority: "low", due: "2025-04-05" },
  ];

  const upcomingMeetings = [
    { id: 1, title: "Junta Ordinaria", location: "Comunidad C/ Hernán Cortés, 15", date: "2025-04-10", time: "18:30" },
    { id: 2, title: "Reunión Extraordinaria", location: "Comunidad Av. Reino de Valencia, 28", date: "2025-04-12", time: "19:00" },
  ];

  const recentIncidents = [
    { id: 1, title: "Avería ascensor", location: "C/ Cirilo Amorós, 24", status: "resolved", date: "2025-04-04" },
    { id: 2, title: "Filtración agua terraza", location: "Av. Francia, 12", status: "in-progress", date: "2025-04-06" },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
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
                        "bg-yellow-100 text-yellow-800"
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
      </div>
    </div>
  );
};

export default DashboardHome;
