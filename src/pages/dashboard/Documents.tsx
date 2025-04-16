
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Documents = () => {
  const mockDocuments = [
    { 
      id: 1, 
      name: "Acta Junta Ordinaria Marzo 2025.pdf", 
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2025-03-15",
      category: "Actas"
    },
    { 
      id: 2, 
      name: "Presupuesto 2025.xlsx", 
      type: "Excel",
      size: "458 KB",
      uploadDate: "2025-01-10",
      category: "Presupuestos"
    },
    { 
      id: 3, 
      name: "Contrato Mantenimiento Ascensores.pdf", 
      type: "PDF",
      size: "2.1 MB",
      uploadDate: "2025-02-28",
      category: "Contratos"
    },
    { 
      id: 4, 
      name: "Informe Gastos Q1 2025.pdf", 
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2025-04-01",
      category: "Informes"
    },
    { 
      id: 5, 
      name: "Estatutos Comunidad.pdf", 
      type: "PDF",
      size: "3.2 MB",
      uploadDate: "2025-01-15",
      category: "Legal"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Documentos</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Documentos Recientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Categoría</TableHead>
                <TableHead>Tamaño</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium">{doc.name}</TableCell>
                  <TableCell>{doc.category}</TableCell>
                  <TableCell>{doc.size}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;
