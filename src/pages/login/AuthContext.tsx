// AuthContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        // Comprobar si hay un token en localStorage al cargar la aplicación
        return localStorage.getItem('authToken') ? true : false;
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('authToken', 'true'); // Simplemente guardar un indicador
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
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