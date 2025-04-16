
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Databases = () => {
  const mockDatabases = [
    { id: 1, name: "Propietarios C/ Colón", records: 45, lastUpdate: "2025-04-15", size: "2.3 MB" },
    { id: 2, name: "Inquilinos Gran Vía", records: 28, lastUpdate: "2025-04-14", size: "1.8 MB" },
    { id: 3, name: "Proveedores 2025", records: 63, lastUpdate: "2025-04-13", size: "3.1 MB" },
    { id: 4, name: "Facturas Q1 2025", records: 156, lastUpdate: "2025-04-12", size: "4.7 MB" },
    { id: 5, name: "Incidencias Activas", records: 12, lastUpdate: "2025-04-16", size: "0.8 MB" }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Bases de Datos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bases de Datos Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Registros</TableHead>
                <TableHead>Última Actualización</TableHead>
                <TableHead>Tamaño</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDatabases.map((db) => (
                <TableRow key={db.id}>
                  <TableCell className="font-medium">{db.name}</TableCell>
                  <TableCell>{db.records}</TableCell>
                  <TableCell>{db.lastUpdate}</TableCell>
                  <TableCell>{db.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Databases;
