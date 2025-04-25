// pages/CreateUserPage.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUserPage = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage('');
        setError('');

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/usuarios`; // Nueva ruta en el backend
            const response = await axios.post(apiUrl, { correo, password });
            setMessage(response.data.message);
            // Redirigir a la página de login después de la creación exitosa
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (e: any) {
            setError(e.response?.data?.message || 'Error al crear el usuario');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-secondary">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-primary text-center">Crear Nuevo Usuario</h2>
                {message && <p className="text-green-500 text-xs italic mb-4">{message}</p>}
                {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                            Correo Electrónico
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="correo"
                            type="email"
                            placeholder="Tu correo electrónico"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirmar Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Crear Usuario
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUserPage;