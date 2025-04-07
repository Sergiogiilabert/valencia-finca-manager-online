
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { CalendarIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellidos: z.string().min(2, {
    message: "Los apellidos deben tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  telefono: z.string().min(9, {
    message: "Por favor, introduce un teléfono válido.",
  }),
  direccion: z.string().min(5, {
    message: "La dirección debe tener al menos 5 caracteres.",
  }),
  tipo_consulta: z.string({
    required_error: "Por favor, selecciona el tipo de consulta.",
  }),
  fecha: z.date({
    required_error: "Por favor, selecciona una fecha para la cita.",
  }),
  mensaje: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Cita = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      direccion: "",
      mensaje: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulamos el envío del formulario
    console.log("Datos del formulario:", data);
    
    // Simulación de envío a API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("¡Cita reservada con éxito!", {
      description: `Te esperamos el ${format(data.fecha, "dd/MM/yyyy")}. Recibirás un email de confirmación.`,
      duration: 5000,
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-valencia-sand">
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            {isSubmitted ? (
              <div className="max-w-lg mx-auto text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-4">¡Cita Reservada!</h2>
                <p className="text-gray-600 mb-8">
                  Gracias por reservar una cita con ValenciaFincas. Hemos recibido tu solicitud y te enviaremos un correo electrónico de confirmación con todos los detalles.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  className="bg-valencia-blue hover:bg-valencia-blue/90"
                >
                  Reservar otra cita
                </Button>
              </div>
            ) : (
              <>
                <div className="max-w-3xl mx-auto text-center mb-12">
                  <h1 className="text-3xl md:text-4xl font-bold text-valencia-blue mb-4">Reserva una Cita</h1>
                  <p className="text-gray-600">
                    Complete el siguiente formulario para solicitar una cita con uno de nuestros administradores. Le atenderemos en el menor tiempo posible.
                  </p>
                </div>

                <div className="max-w-2xl mx-auto">
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="apellidos"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Apellidos</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tus apellidos" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="tucorreo@ejemplo.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="telefono"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl>
                                  <Input placeholder="612 345 678" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="direccion"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dirección de la finca</FormLabel>
                              <FormControl>
                                <Input placeholder="Calle, número, código postal" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="tipo_consulta"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tipo de consulta</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Selecciona el tipo de consulta" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="administracion">Administración de fincas</SelectItem>
                                  <SelectItem value="asesoria">Asesoría jurídica</SelectItem>
                                  <SelectItem value="contabilidad">Contabilidad y facturación</SelectItem>
                                  <SelectItem value="mantenimiento">Mantenimiento y reformas</SelectItem>
                                  <SelectItem value="otra">Otra consulta</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="fecha"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Fecha</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "dd/MM/yyyy")
                                      ) : (
                                        <span>Seleccione una fecha</span>
                                      )}
                                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => {
                                      // Deshabilitar fechas pasadas y fines de semana
                                      const today = new Date();
                                      today.setHours(0, 0, 0, 0);
                                      const day = date.getDay();
                                      return date < today || day === 0 || day === 6;
                                    }}
                                    initialFocus
                                    className={cn("p-3 pointer-events-auto")}
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mensaje"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensaje (opcional)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Díganos más detalles sobre su consulta" 
                                  className="min-h-[100px]"
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="pt-4">
                          <Button 
                            type="submit" 
                            className="w-full bg-valencia-orange hover:bg-valencia-orange/90"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Enviando..." : "Reservar Cita"}
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cita;
