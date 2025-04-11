
import bcrypt from 'bcrypt';

// Lista de empleados autorizados con contraseñas hasheadas
// En una aplicación real, esto estaría en una base de datos
const authorizedEmployees = [
  { 
    email: "admin@valenciafincas.com", 
    // Contraseña hasheada: admin123
    password: "$2b$10$Jqm4xz.mMiybz2Nh.C.9/u1FHdS66tYQv2rqWQXD9fVL.f.6juG0e", 
    role: "admin" 
  },
  { 
    email: "gestor@valenciafincas.com", 
    // Contraseña hasheada: gestor123
    password: "$2b$10$C6e1wxmY3EfPY7B9WpvO9eXKxnBJPoEiJxYZDn9YU0Hb6lJBEA1h6", 
    role: "manager" 
  },
  { 
    email: "tecnico@valenciafincas.com", 
    // Contraseña hasheada: tecnico123
    password: "$2b$10$Mu7U8vO5X5muP.tSk5ov7.fzGMJyGWYylMIKZAh6PV7a1p9WlBhBO", 
    role: "technician" 
  },
];

// Duración de la sesión en milisegundos (2 horas)
const SESSION_DURATION = 2 * 60 * 60 * 1000;

export interface User {
  email: string;
  role: string;
  lastLogin: Date;
  sessionExpiry: Date;
}

// Interfaces para el registro de actividad
interface ActivityLog {
  userId: string;
  action: string;
  timestamp: Date;
  ipAddress?: string;
  details?: any;
}

// Almacén de registros (en una aplicación real sería una base de datos)
const activityLogs: ActivityLog[] = [];

export const authService = {
  // Método para iniciar sesión
  login: async (email: string, password: string): Promise<User | null> => {
    return new Promise(async (resolve) => {
      // Simular un pequeño retraso como en una petición real
      setTimeout(async () => {
        const employee = authorizedEmployees.find(
          (emp) => emp.email === email
        );
        
        if (employee) {
          // Verificar la contraseña utilizando bcrypt
          const passwordMatch = await bcrypt.compare(password, employee.password);
          
          if (passwordMatch) {
            // Si las credenciales son correctas, creamos el objeto de usuario
            const now = new Date();
            const sessionExpiry = new Date(now.getTime() + SESSION_DURATION);
            
            const userData: User = {
              email: employee.email,
              role: employee.role,
              lastLogin: now,
              sessionExpiry
            };
            
            // Guardar en localStorage para mantener la sesión
            localStorage.setItem('currentUser', JSON.stringify(userData));
            localStorage.setItem('sessionExpiry', sessionExpiry.toISOString());
            
            // Registrar la actividad de inicio de sesión
            authService.logActivity(employee.email, 'login', {
              timestamp: now
            });
            
            resolve(userData);
          } else {
            // Registrar intento fallido
            authService.logActivity(employee.email, 'failed_login_attempt', {
              reason: 'incorrect_password'
            });
            resolve(null);
          }
        } else {
          // Registrar intento con email desconocido
          authService.logActivity(email, 'failed_login_attempt', {
            reason: 'unknown_email'
          });
          resolve(null);
        }
      }, 800);
    });
  },

  // Método para cerrar sesión
  logout: (email: string): void => {
    // Registrar la actividad de cierre de sesión
    authService.logActivity(email, 'logout');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sessionExpiry');
  },

  // Método para comprobar si hay un usuario logueado y si su sesión sigue siendo válida
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('currentUser');
    const expiryStr = localStorage.getItem('sessionExpiry');
    
    if (!userStr || !expiryStr) return null;
    
    try {
      const user = JSON.parse(userStr) as User;
      const expiry = new Date(expiryStr);
      const now = new Date();
      
      // Verificar si la sesión ha expirado
      if (now > expiry) {
        // La sesión ha expirado, eliminamos los datos
        authService.logout(user.email);
        authService.logActivity(user.email, 'session_expired');
        return null;
      }
      
      return user;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  },

  // Método para comprobar si el usuario está autenticado
  isAuthenticated: (): boolean => {
    return authService.getCurrentUser() !== null;
  },
  
  // Método para registrar actividad del usuario
  logActivity: (userId: string, action: string, details?: any): void => {
    const log: ActivityLog = {
      userId,
      action,
      timestamp: new Date(),
      details
    };
    
    // En una aplicación real, esto se enviaría a un servidor o base de datos
    activityLogs.push(log);
    console.log('Activity logged:', log);
    
    // Si necesitamos acceder a los logs más tarde
    if (process.env.NODE_ENV === 'development') {
      localStorage.setItem('activityLogs', JSON.stringify(activityLogs));
    }
  },
  
  // Método para obtener los logs (solo para desarrollo/demostración)
  getActivityLogs: (): ActivityLog[] => {
    return activityLogs;
  }
};

// Función auxiliar para generar hashes de contraseñas (solo para desarrollo)
// Esta función no se utiliza en producción, solo para generar las contraseñas hasheadas iniciales
export const generateHash = async (password: string): Promise<string> => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

