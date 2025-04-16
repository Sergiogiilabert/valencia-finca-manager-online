
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Accounting = () => {
  const mockTransactions = [
    { id: 1, date: "2025-04-16", concept: "Mantenimiento Ascensores", amount: -850.00, type: "expense" },
    { id: 2, date: "2025-04-15", concept: "Cuotas Comunidad Abril", amount: 3200.00, type: "income" },
    { id: 3, date: "2025-04-14", concept: "Reparación Fontanería", amount: -375.50, type: "expense" },
    { id: 4, date: "2025-04-13", concept: "Limpieza Mensual", amount: -600.00, type: "expense" },
    { id: 5, date: "2025-04-12", concept: "Alquiler Local Comercial", amount: 1200.00, type: "income" }
  ];

  const totalIncome = mockTransactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = mockTransactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Contabilidad</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">Ingresos Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalIncome.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">Gastos Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalExpenses.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Últimas Transacciones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha</TableHead>
                <TableHead>Concepto</TableHead>
                <TableHead>Importe</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.concept}</TableCell>
                  <TableCell className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
                    {transaction.amount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}
                  </TableCell>
                  <TableCell>{transaction.type === "income" ? "Ingreso" : "Gasto"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounting;
