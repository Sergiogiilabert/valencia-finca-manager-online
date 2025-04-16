
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Reports = () => {
  const mockReports = [
    { 
      id: 1, 
      title: "Informe Trimestral Q1 2025",
      type: "Financiero",
      date: "2025-03-31",
      author: "Ana Martínez",
      status: "Completado"
    },
    { 
      id: 2, 
      title: "Análisis de Gastos Comunitarios",
      type: "Gestión",
      date: "2025-04-10",
      author: "Carlos López",
      status: "En revisión"
    },
    { 
      id: 3, 
      title: "Estado de Mantenimiento",
      type: "Técnico",
      date: "2025-04-05",
      author: "Miguel Sánchez",
      status: "Completado"
    },
    { 
      id: 4, 
      title: "Previsión Presupuestaria 2025",
      type: "Financiero",
      date: "2025-04-15",
      author: "Laura García",
      status: "Pendiente"
    }
  ];

  const chartData = [
    { month: 'Ene', ingresos: 12000, gastos: 10000 },
    { month: 'Feb', ingresos: 15000, gastos: 12000 },
    { month: 'Mar', ingresos: 13000, gastos: 11000 },
    { month: 'Abr', ingresos: 14000, gastos: 11500 },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Informes</h1>

      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Resumen Financiero</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ingresos" stroke="#4F46E5" name="Ingresos" />
                <Line type="monotone" dataKey="gastos" stroke="#EF4444" name="Gastos" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Informes Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Autor</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.title}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.author}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        report.status === "Completado" ? "bg-green-100 text-green-800" : 
                        report.status === "En revisión" ? "bg-yellow-100 text-yellow-800" : 
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {report.status}
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

export default Reports;
