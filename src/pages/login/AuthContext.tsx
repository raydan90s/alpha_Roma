// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    // Validar el token al cargar la app
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                const decoded: { exp: number } = jwtDecode(token);
                const isExpired = decoded.exp * 1000 < Date.now();
    
                if (!isExpired) {
                    setIsAuthenticated(true); // El token es válido
                } else {
                    localStorage.removeItem('authToken');
                    setIsAuthenticated(false); // El token ha expirado
                }
            } catch (error) {
                console.error('Error al decodificar el token:', error);
                localStorage.removeItem('authToken');
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false); // No hay token, no está autenticado
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
    }
    return context;
};
