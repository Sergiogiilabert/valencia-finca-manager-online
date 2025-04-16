
// Lista de empleados autorizados
// En una aplicación real, esto estaría en una base de datos y las contraseñas estarían hasheadas
const authorizedEmployees = [
  { email: "admin@valenciafincas.com", password: "admin123", role: "admin" },
  { email: "gestor@valenciafincas.com", password: "gestor123", role: "manager" },
  { email: "tecnico@valenciafincas.com", password: "tecnico123", role: "technician" },
];

export interface User {
  email: string;
  role: string;
}

const STORAGE_KEY = 'currentUser';

export const authService = {
  // Método para iniciar sesión
  login: (email: string, password: string): Promise<User | null> => {
    return new Promise((resolve) => {
      // Simular un pequeño retraso como en una petición real
      setTimeout(() => {
        const employee = authorizedEmployees.find(
          (emp) => emp.email === email && emp.password === password
        );
        
        if (employee) {
          // Si encontramos un empleado que coincida, devolvemos sus datos (sin la contraseña)
          const { password, ...userData } = employee;
          
          // Guardar en localStorage para mantener la sesión
          localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
          
          resolve(userData as User);
        } else {
          resolve(null);
        }
      }, 800);
    });
  },

  // Método para cerrar sesión
  logout: (): void => {
    // Limpieza específica de nuestros datos de autenticación
    localStorage.removeItem(STORAGE_KEY);
    
    // También hacemos una limpieza general por si acaso
    localStorage.clear();
    sessionStorage.clear();
    
    // Si hay otras cookies de autenticación, las limpiamos también
    document.cookie.split(";").forEach(function(c) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  },

  // Método para comprobar el usuario actual
  getCurrentUser: (): User | null => {
    try {
      const userStr = localStorage.getItem(STORAGE_KEY);
      if (!userStr) return null;
      
      const user = JSON.parse(userStr);
      // Validación adicional del formato del usuario
      if (!user.email || !user.role) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      
      // Verificar que el usuario exista en nuestra lista de autorizados
      const isAuthorized = authorizedEmployees.some(emp => emp.email === user.email);
      if (!isAuthorized) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      
      return user;
    } catch (error) {
      // Si hay algún error al parsear, limpiamos localStorage
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  },

  // Método para comprobar autenticación
  isAuthenticated: (): boolean => {
    const user = authService.getCurrentUser();
    return user !== null;
  }
};
