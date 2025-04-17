import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from "sonner";
import LocationMap from '@/components/LocationMap';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send 
} from 'lucide-react';

const Contacto = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mensaje enviado con éxito", {
      description: "Nos pondremos en contacto contigo en breve.",
    });
    // Resetear formulario
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-valencia-sand">
        {/* Sección de Contacto */}
        <section className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-valencia-blue mb-4">Contacta con Nosotros</h1>
              <p className="text-gray-600">
                Estamos aquí para resolver todas tus dudas sobre la gestión de tu finca en Valencia.
                Ponte en contacto con nuestro equipo por teléfono, email o rellenando el formulario.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Datos de contacto */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-valencia-blue mb-6 flex items-center">
                    <MessageSquare className="mr-2 h-6 w-6 text-valencia-orange" />
                    Información de Contacto
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-valencia-sand p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-valencia-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-valencia-blue">Dirección</h3>
                        <p className="text-gray-600">
                          Av. Reino de Valencia, 12<br />
                          46005 Valencia
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-valencia-sand p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-valencia-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-valencia-blue">Teléfono</h3>
                        <p className="text-gray-600">
                          <a href="tel:+34963123456" className="hover:text-valencia-orange transition-colors">
                            +34 963 12 34 56
                          </a>
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          Lunes a Viernes: 9:00 - 18:00
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-valencia-sand p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-valencia-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-valencia-blue">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@valenciafincas.com" className="hover:text-valencia-orange transition-colors">
                            info@valenciafincas.com
                          </a>
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          Te respondemos en menos de 24h
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-valencia-sand p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-valencia-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-valencia-blue">Horario de Oficina</h3>
                        <p className="text-gray-600">
                          Lunes a Viernes: 9:00 - 18:00<br />
                          Sábado y Domingo: Cerrado
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-valencia-blue text-white p-8 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">¿Necesitas atención urgente?</h2>
                  <p className="mb-6">
                    Para incidencias fuera del horario laboral contamos con un servicio de atención 24/7 para emergencias.
                  </p>
                  <Button asChild variant="outline" className="border-valencia-orange text-valencia-orange hover:bg-valencia-orange/10">
                    <a href="tel:+34963999999" className="flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>+34 963 99 99 99</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Formulario de contacto */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-valencia-blue mb-6 flex items-center">
                  <Send className="mr-2 h-6 w-6 text-valencia-orange" />
                  Envíanos un Mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <Input 
                      id="nombre" 
                      name="nombre" 
                      required 
                      placeholder="Tu nombre y apellidos" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="tucorreo@ejemplo.com" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <Input 
                      id="telefono" 
                      name="telefono" 
                      placeholder="612 345 678" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <Input 
                      id="asunto" 
                      name="asunto" 
                      required 
                      placeholder="Motivo de tu contacto" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <Textarea 
                      id="mensaje" 
                      name="mensaje" 
                      required 
                      placeholder="Escribe aquí tu mensaje..." 
                      rows={5} 
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-valencia-orange hover:bg-valencia-orange/90"
                    >
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-valencia-blue mb-6 text-center">Nuestra Ubicación</h2>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <LocationMap address="Av. Reino de Valencia, 12, 46005 Valencia" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;
