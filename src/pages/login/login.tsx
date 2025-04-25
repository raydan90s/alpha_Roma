import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const SimpleBlogLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
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

  const handleRegister = async () => {
    setError('');
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL + '/api/usuarios';
      const response = await axios.post(apiUrl, {
        correo: email,
        password: password,
      });
      alert('Usuario creado exitosamente');
      setShowRegister(false);
    } catch (error: any) {
      if (error.response?.status === 409) {
        setError('El correo electrónico ya está registrado');
      } else {
        setError('Error al crear el usuario');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary px-4">
      <div className="bg-white shadow-md rounded-lg px-6 py-8 w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">
          {showRegister ? 'Crear nuevo usuario' : 'Acceso de Editor'}
        </h2>
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Contraseña
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

          {showRegister && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                Confirmar Contraseña
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                id="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <div className="flex flex-col gap-2 items-center justify-center">
            {!showRegister ? (
              <>
                <button
                  className="bg-primary hover:bg-acent text-white font-bold py-2 px-6 rounded w-full transition duration-300"
                  type="submit"
                >
                  Acceder
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(true);
                    setError('');
                  }}
                  className="text-sm text-primary hover:underline mt-2"
                >
                  Crear nuevo usuario
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded w-full transition duration-300"
                  type="button"
                  onClick={handleRegister}
                >
                  Crear Usuario
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowRegister(false);
                    setError('');
                  }}
                  className="text-sm text-primary hover:underline mt-2"
                >
                  ¿Ya tienes cuenta? Inicia sesión
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleBlogLogin;
