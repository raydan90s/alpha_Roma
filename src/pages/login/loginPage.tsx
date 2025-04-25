// pages/login/LoginPage.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import SimpleBlogLogin from './login';
import { useAuth } from '../login/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Función que marca al usuario como autenticado

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      try {
        const decoded: { exp: number } = jwtDecode(token);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (!isExpired) {
          // Si el token es válido, logueamos al usuario
          login(token); // ✅ PASAMOS EL TOKEN AQUÍ
          navigate('/editor');
        } else {
          // Si el token está expirado, lo eliminamos y redirigimos al login
          localStorage.removeItem('authToken');
          navigate('/login'); // Redirigir a login si el token ha expirado
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error);
        localStorage.removeItem('authToken');
        navigate('/login'); // Redirigir a login en caso de error
      }
    } else {
      navigate('/login'); // Si no hay token, redirigir al login
    }
  }, [login, navigate]); // Incluye 'login' y 'navigate' en las dependencias para evitar problemas

  const handleLoginSuccess = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      login(token); // ✅ También lo pasamos aquí
    }
    navigate('/editor');
  };

  return <SimpleBlogLogin onLoginSuccess={handleLoginSuccess} />;
};

export default LoginPage;
