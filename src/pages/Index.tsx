
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Building, Calendar, Phone, Shield, FileText, Clock, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      {/* Hero Section */}
      <section className="hero-pattern py-20 lg:py-32">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-valencia-blue mb-6">
              Gestión profesional de fincas en Valencia
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              Administramos sus propiedades con eficiencia, transparencia y atención personalizada. Confíe en nuestros más de 15 años de experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-valencia-blue hover:bg-valencia-blue/90 text-white">
                <Link to="/servicios">Nuestros Servicios</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-valencia-orange text-valencia-orange hover:bg-valencia-orange/10">
                <Link to="/cita">Solicitar Cita</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
            {/* Placeholder para imagen - en producción se reemplazaría con una imagen real */}
            <div className="absolute inset-0 bg-gradient-to-br from-valencia-blue to-valencia-blue/50 flex items-center justify-center text-white text-xl font-semibold">
              <Building size={60} className="mr-2" />
              <span>Imagen de Edificio en Valencia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-valencia-blue mb-4">¿Por qué elegir ValenciaFincas?</h2>
            <p className="text-gray-600">
              Nos distinguimos por nuestra dedicación a la excelencia y el servicio personalizado para cada una de las fincas que administramos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-valencia-orange" />,
                title: "Experiencia y Confianza",
                description: "Más de 15 años gestionando comunidades de propietarios en Valencia con total transparencia."
              },
              {
                icon: <FileText className="h-10 w-10 text-valencia-orange" />,
                title: "Gestión Transparente",
                description: "Acceso digital a toda la documentación y estados de cuentas de su comunidad."
              },
              {
                icon: <Clock className="h-10 w-10 text-valencia-orange" />,
                title: "Atención Permanente",
                description: "Servicio de atención de incidencias 24/7 para emergencias en su comunidad."
              },
              {
                icon: <Building className="h-10 w-10 text-valencia-orange" />,
                title: "Especialistas en Valencia",
                description: "Conocemos el mercado inmobiliario valenciano y su normativa específica."
              },
              {
                icon: <User className="h-10 w-10 text-valencia-orange" />,
                title: "Trato Personalizado",
                description: "Cada comunidad tiene un administrador dedicado que conoce sus necesidades."
              },
              {
                icon: <Calendar className="h-10 w-10 text-valencia-orange" />,
                title: "Reuniones Eficientes",
                description: "Organizamos y gestionamos las juntas de propietarios maximizando resultados."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-valencia-sand rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-valencia-blue">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-valencia-sand">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-valencia-blue mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600">
              Ofrecemos soluciones integrales para la administración eficiente de su comunidad de propietarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Administración de Fincas",
                items: [
                  "Gestión económica y contable",
                  "Elaboración y seguimiento de presupuestos",
                  "Tramitación de recibos y pagos",
                  "Presentación de cuentas y balances"
                ]
              },
              {
                title: "Asesoramiento Jurídico",
                items: [
                  "Interpretación de la Ley de Propiedad Horizontal",
                  "Redacción y actualización de estatutos",
                  "Asesoramiento en contratos con proveedores",
                  "Gestión de conflictos vecinales"
                ]
              },
              {
                title: "Mantenimiento y Conservación",
                items: [
                  "Coordinación de servicios de mantenimiento",
                  "Solicitud y valoración de presupuestos",
                  "Gestión de incidencias y averías",
                  "Planificación de obras y mejoras"
                ]
              },
              {
                title: "Servicios Digitales",
                items: [
                  "Portal web para propietarios",
                  "Acceso a documentación online",
                  "Comunicación digital con la administración",
                  "Consulta de cuentas en tiempo real"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="border border-valencia-olive/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-valencia-blue">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-valencia-orange mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-valencia-blue hover:bg-valencia-blue/90 text-white">
              <Link to="/servicios">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-valencia-blue py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesita administrar su finca en Valencia?</h2>
            <p className="text-xl mb-8 text-valencia-sand/90">
              Contacte con nosotros hoy mismo para una consulta sin compromiso o reserve una cita con uno de nuestros administradores.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-valencia-orange hover:bg-valencia-orange/90 text-white">
                <Link to="/cita" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Reservar Cita</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-valencia-sand text-valencia-sand hover:bg-valencia-sand/10">
                <Link to="/contacto" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Contactar</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
