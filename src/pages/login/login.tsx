// SimpleBlogLogin.tsx
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; // Asumimos que tienes el contexto de autenticación

const SimpleBlogLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth(); // Accedemos a la función login del contexto

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {     
      const apiUrl = import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL + '/api/login';
      const response = await axios.post(apiUrl, {
        correo: email,
        password: password,
      });

      // Si el login es exitoso, almacenamos el token
      localStorage.setItem('authToken', response.data.token);

      // Usamos el contexto para cambiar el estado de autenticación
      login();

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        console.log('Inicio de sesión exitoso (función onLoginSuccess no proporcionada)');
      }
    } catch (error) {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-secondary">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Acceso de Editor</h2>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña de Editor
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Acceder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleBlogLogin;
