
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm border-b border-valencia-blue/10">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-valencia-blue">ValenciaFincas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="text-foreground hover:text-valencia-blue transition-colors">Inicio</Link>
          <Link to="/servicios" className="text-foreground hover:text-valencia-blue transition-colors">Servicios</Link>
          <Link to="/contacto" className="text-foreground hover:text-valencia-blue transition-colors">Contacto</Link>
          <Link to="/login" className="text-foreground hover:text-valencia-blue transition-colors">Acceso Empleados</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" size="sm" className="border-valencia-blue text-valencia-blue hover:bg-valencia-blue/10">
            <Link to="/contacto" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Contactar</span>
            </Link>
          </Button>
          
          <Button asChild size="sm" className="bg-valencia-orange hover:bg-valencia-orange/90 text-white">
            <Link to="/cita" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Reservar Cita</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isMenuOpen ? (
            <X className="h-6 w-6 text-valencia-blue" />
          ) : (
            <Menu className="h-6 w-6 text-valencia-blue" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-30 bg-background/95 backdrop-blur-sm md:hidden",
          isMenuOpen ? "animate-fade-in block" : "hidden"
        )}
      >
        <div className="container px-4 py-8 flex flex-col space-y-6">
          <Link to="/" className="text-lg font-medium" onClick={toggleMenu}>Inicio</Link>
          <Link to="/servicios" className="text-lg font-medium" onClick={toggleMenu}>Servicios</Link>
          <Link to="/contacto" className="text-lg font-medium" onClick={toggleMenu}>Contacto</Link>
          <Link to="/login" className="text-lg font-medium" onClick={toggleMenu}>Acceso Empleados</Link>
          
          <div className="flex flex-col space-y-4 pt-4">
            <Button asChild variant="outline" size="lg" className="border-valencia-blue text-valencia-blue">
              <Link to="/contacto" className="flex items-center justify-center gap-2" onClick={toggleMenu}>
                <Phone className="h-4 w-4" />
                <span>Contactar</span>
              </Link>
            </Button>
            
            <Button asChild size="lg" className="bg-valencia-orange text-white">
              <Link to="/cita" className="flex items-center justify-center gap-2" onClick={toggleMenu}>
                <Calendar className="h-4 w-4" />
                <span>Reservar Cita</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
