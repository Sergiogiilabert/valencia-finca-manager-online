
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  FileText,
  Wrench,
  UserCheck,
  ClipboardCheck,
  Scale,
  Banknote,
  Shield,
  Users,
  Calendar,
} from 'lucide-react';

const Servicios = () => {
  const services = [
    {
      icon: <Building className="h-10 w-10 text-valencia-orange" />,
      title: "Administración de Fincas",
      description: "Gestión integral de comunidades de propietarios, cumpliendo con todas las obligaciones legales y contables.",
      features: [
        "Elaboración y seguimiento de presupuestos anuales",
        "Gestión de cobros y pagos",
        "Contabilidad detallada y transparente",
        "Elaboración de balances económicos periódicos",
        "Gestión de fondos de reserva",
      ]
    },
    {
      icon: <FileText className="h-10 w-10 text-valencia-orange" />,
      title: "Asesoramiento Jurídico",
      description: "Orientación legal especializada en propiedad horizontal y derecho inmobiliario.",
      features: [
        "Redacción y modificación de estatutos",
        "Asesoramiento en normativas comunitarias",
        "Mediación en conflictos vecinales",
        "Interpretación de la Ley de Propiedad Horizontal",
        "Gestión de impagos y procedimientos monitorios",
      ]
    },
    {
      icon: <Wrench className="h-10 w-10 text-valencia-orange" />,
      title: "Mantenimiento y Reformas",
      description: "Coordinación de servicios técnicos para el mantenimiento y mejora de los elementos comunes.",
      features: [
        "Gestión de contratos con proveedores",
        "Supervisión de obras y reformas",
        "Solicitud y evaluación de presupuestos",
        "Mantenimiento preventivo de instalaciones",
        "Gestión de incidencias y averías",
      ]
    },
    {
      icon: <UserCheck className="h-10 w-10 text-valencia-orange" />,
      title: "Servicio Personal",
      description: "Un administrador personal asignado que conoce en profundidad las necesidades de su comunidad.",
      features: [
        "Visitas periódicas a la finca",
        "Atención telefónica directa",
        "Trato cercano y personalizado",
        "Disponibilidad para reuniones individuales",
        "Atención rápida a consultas e incidencias",
      ]
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-valencia-orange" />,
      title: "Gestión de Juntas",
      description: "Organización y desarrollo eficiente de juntas de propietarios, tanto ordinarias como extraordinarias.",
      features: [
        "Preparación y envío de convocatorias",
        "Elaboración del orden del día",
        "Redacción de actas",
        "Certificaciones de acuerdos",
        "Asesoramiento durante las reuniones",
      ]
    },
    {
      icon: <Scale className="h-10 w-10 text-valencia-orange" />,
      title: "Cumplimiento Normativo",
      description: "Garantizamos el cumplimiento de todas las obligaciones legales de la comunidad.",
      features: [
        "Adaptación a cambios legislativos",
        "Gestión de protección de datos",
        "Renovación del libro de actas",
        "Actualización del registro de propietarios",
        "Cumplimiento de normativas técnicas",
      ]
    },
    {
      icon: <Banknote className="h-10 w-10 text-valencia-orange" />,
      title: "Gestión Contable",
      description: "Control exhaustivo de la economía comunitaria, garantizando transparencia y optimización de recursos.",
      features: [
        "Elaboración de cuentas anuales",
        "Control de gastos ordinarios y extraordinarios",
        "Gestión de remesas bancarias",
        "Liquidación de impuestos comunitarios",
        "Auditorías contables periódicas",
      ]
    },
    {
      icon: <Shield className="h-10 w-10 text-valencia-orange" />,
      title: "Gestión de Seguros",
      description: "Asesoramiento y tramitación de seguros comunitarios y gestión de siniestros.",
      features: [
        "Negociación de pólizas comunitarias",
        "Actualización de capitales asegurados",
        "Tramitación de partes de siniestro",
        "Seguimiento de reclamaciones",
        "Análisis de coberturas",
      ]
    },
    {
      icon: <Users className="h-10 w-10 text-valencia-orange" />,
      title: "Gestión de Personal",
      description: "Administración del personal al servicio de la comunidad (conserjes, limpieza, etc.).",
      features: [
        "Selección de personal",
        "Gestión de nóminas y seguros sociales",
        "Organización de turnos y sustituciones",
        "Control de vacaciones y bajas",
        "Evaluación del desempeño",
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-valencia-sand">
        {/* Cabecera de Servicios */}
        <section className="bg-valencia-blue text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl max-w-3xl mx-auto text-valencia-sand/90">
              Ofrecemos soluciones integrales para la administración eficiente de su comunidad de propietarios en Valencia.
            </p>
          </div>
        </section>

        {/* Lista de Servicios */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 p-3 bg-valencia-sand inline-flex rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-valencia-blue">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-valencia-orange mr-2 mt-1">•</span>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sección CTA */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-valencia-blue mb-6">¿Necesita más información sobre nuestros servicios?</h2>
              <p className="text-gray-600 mb-8">
                Contacte con nosotros para una consulta personalizada o reserve una cita con uno de nuestros administradores. Le ofreceremos la solución más adecuada para las necesidades de su comunidad.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-valencia-blue hover:bg-valencia-blue/90">
                  <Link to="/contacto">Solicitar información</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-valencia-orange text-valencia-orange hover:bg-valencia-orange/10">
                  <Link to="/cita" className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Reservar una cita</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
