// SimpleBlogLogin.tsx
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const SimpleBlogLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    try {
      const apiUrl = import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL + '/api/login';
      const response = await axios.post(apiUrl, {
        correo: email,
        password: password,
      });

      localStorage.setItem('authToken', response.data.token);
      login(response.data.token);

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
    <div className="flex items-center justify-center min-h-screen bg-secondary px-4">
      <div className="bg-white shadow-md rounded-lg px-6 py-8 w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">Acceso de Editor</h2>
        {error && <p className="text-red-500 text-sm italic mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Contraseña de Editor
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-primary hover:bg-acent text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300 w-full sm:w-auto"
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
