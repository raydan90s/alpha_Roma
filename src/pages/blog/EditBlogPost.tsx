// pages/EditBlogPost.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
    id: number;
    titulo: string;
    resumen: string;
    contenido: string;
    urlImagen?: string;
}

const EditBlogPost = () => {
    const { id } = useParams();
    const postId = parseInt(id || '', 10);
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('useEffect se está ejecutando, postId:', postId);
        const fetchBlogPost = async () => {
            setLoading(true);
            setError(null);
            console.log('Iniciando fetchBlogPost con postId:', postId);
            try {
                const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs/${postId}`;
                const response = await axios.get<BlogPost>(apiUrl);
                setPost(response.data);
                setLoading(false);
            } catch (e: any) {
                setError(e.message);
                setLoading(false);
            }
        };

        if (postId) {
            fetchBlogPost();
        } else {
            console.log('PostId no está definido en useEffect.');
            setLoading(false);
            setError('ID de artículo no válido.');
        }
    }, [postId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPost((prevPost) =>
            prevPost ? { ...prevPost, [name]: value } : null
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (post) {
            setLoading(true);
            setError(null);
            console.log('Iniciando handleSubmit con postId:', postId, 'y datos:', post);
            try {
                const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs/${postId}`;
                const response = await axios.put(apiUrl, post);
                console.log('Respuesta de la API de actualización:', response);
                setLoading(false);
                navigate('/editor'); // Redirige al panel de edición
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        }
    };

    if (loading) {
        console.log('Estado: Cargando...');
        return <div className="container mx-auto py-8 text-center">Cargando artículo...</div>;
    }

    if (error) {
        console.log('Estado: Error -', error);
        return <div className="container mx-auto py-8 text-center text-red-500">Error al cargar el artículo: {error}</div>;
    }

    if (!post) {
        console.log('Estado: Artículo no encontrado.');
        return <div className="container mx-auto py-8">Artículo no encontrado.</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-primary mb-6">Editar Artículo</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="titulo" className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
                    <input type="text" id="titulo" name="titulo" value={post.titulo || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="resumen" className="block text-gray-700 text-sm font-bold mb-2">Resumen:</label>
                    <textarea id="resumen" name="resumen" value={post.resumen || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="contenido" className="block text-gray-700 text-sm font-bold mb-2">Contenido:</label>
                    <textarea id="contenido" name="contenido" value={post.contenido || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="urlImagen" className="block text-gray-700 text-sm font-bold mb-2">URL de la Imagen:</label>
                    <input type="text" id="urlImagen" name="urlImagen" value={post.urlImagen || ''} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <button type="submit" className="bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default EditBlogPost;