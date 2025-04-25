// pages/login/LoginPage.tsx
import SimpleBlogLogin from './login';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../login/AuthContext'; // Importa el contexto de autenticación

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Obtiene la función login del contexto

    const handleLoginSuccess = () => {
        login(); // Llama a la función login del contexto
        navigate('/editor');
    };

    return <SimpleBlogLogin onLoginSuccess={handleLoginSuccess} />;
};

export default LoginPage;