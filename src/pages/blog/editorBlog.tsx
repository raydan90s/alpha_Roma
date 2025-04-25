import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
    id: number;
    titulo: string;
    resumen: string;
    contenido: string;
    urlImagen?: string;
    orden?: number;
}

const EditorBlog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs`;
                const response = await axios.get<BlogPost[]>(apiUrl);
                const sortedPosts = response.data.sort((a, b) => (a.orden || 0) - (b.orden || 0));
                setPosts(sortedPosts);
                setLoading(false);
            } catch (e: any) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    const actualizarOrdenBlogs = async (nuevosPosts: BlogPost[]) => {
        try {
            // Crear un array con el formato esperado por el servidor: { id, orden }
            const ordenData = nuevosPosts.map((post, index) => ({
                id: post.id,
                orden: index + 1,  // Asegurarse de que es un número
            }));
    
            // Mostrar los datos que vamos a enviar al servidor para verificar
            console.log("Datos enviados al servidor:", { orden: ordenData });
    
            // Realizar la petición PUT al backend
            const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/orden`;
            const response = await axios.put(apiUrl, { orden: ordenData }); // Enviar como 'orden'
    
            // Mostrar la respuesta del servidor
            console.log('Respuesta del servidor:', response.data);
    
            // Actualizar el estado de los posts solo si la respuesta es exitosa
            setPosts(nuevosPosts);
    
        } catch (error: any) {
            console.error('Error al actualizar el orden de los blogs:', error);
            setError('Error al guardar el nuevo orden.');
        }
    };
    
    
    
    

    const handleMoveUp = async (index: number) => {
        if (index > 0) {
            const newPosts = [...posts];
            [newPosts[index - 1], newPosts[index]] = [newPosts[index], newPosts[index - 1]];

            // Actualiza el orden
            const updatedPosts = newPosts.map((post, i) => ({
                ...post,
                orden: i + 1,
            }));

            setPosts(updatedPosts); // Actualiza el estado
            await actualizarOrdenBlogs(updatedPosts); // Envia la actualización al backend
        }
    };

    const handleMoveDown = async (index: number) => {
        if (index < posts.length - 1) {
            const newPosts = [...posts];
            [newPosts[index + 1], newPosts[index]] = [newPosts[index], newPosts[index + 1]];

            // Actualiza el orden
            const updatedPosts = newPosts.map((post, i) => ({
                ...post,
                orden: i + 1,
            }));

            setPosts(updatedPosts); // Actualiza el estado
            await actualizarOrdenBlogs(updatedPosts); // Envia la actualización al backend
        }
    };



    if (loading) {
        return <div className="container mx-auto py-8 text-center">Cargando blogs...</div>;
    }

    if (error) {
        return <div className="container mx-auto py-8 text-center text-red-500">Error al cargar los blogs: {error}</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-6 mt-20">
                <h1 className="text-3xl font-bold text-primary">Panel de Edición del Blog</h1>
                <Link to="/create-user" className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Crear Usuario
                </Link>
            </div>
            <ul>
                {posts.map((post, index) => (
                    <li key={post.id} className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-secondary">{post.titulo}</h2>
                            <p className="text-gray-600 text-sm">{post.resumen}</p>
                            <p className="text-gray-500 text-xs">Orden: {post.orden}</p>
                        </div>
                        <div className="flex items-center">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l-md focus:outline-none focus:shadow-outline"
                                onClick={() => handleMoveUp(index)}
                            >
                                Subir
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                onClick={() => handleMoveDown(index)}
                            >
                                Bajar
                            </button>
                            <Link
                                to={`/editor/${post.id}`}
                                className="bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:shadow-outline ml-2"
                            >
                                Editar
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EditorBlog;