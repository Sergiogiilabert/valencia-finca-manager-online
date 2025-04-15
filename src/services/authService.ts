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
          localStorage.setItem('currentUser', JSON.stringify(userData));
          
          resolve(userData as User);
        } else {
          resolve(null);
        }
      }, 800);
    });
  },

  // Método para cerrar sesión
  logout: (): void => {
    // Limpieza completa de todos los datos de autenticación
    localStorage.clear(); // Limpiamos todo el localStorage para asegurar que no queden datos
  },

  // Método para comprobar si hay un usuario logueado
  getCurrentUser: (): User | null => {
    try {
      const userStr = localStorage.getItem('currentUser');
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      // Si hay algún error al parsear, limpiamos el localStorage y retornamos null
      localStorage.clear();
      return null;
    }
  },

  // Método para comprobar si el usuario está autenticado
  isAuthenticated: (): boolean => {
    return localStorage.getItem('currentUser') !== null;
  }
};
