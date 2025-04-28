import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

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
            const ordenData = nuevosPosts.map((post, index) => ({
                id: post.id,
                orden: index + 1,
            }));


            const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/orden`;
            const response = await axios.put(apiUrl, { orden: ordenData });

            console.log('Respuesta del servidor:', response.data);

            setPosts(nuevosPosts);
        } catch (error: any) {
            setError('Error al guardar el nuevo orden.');
        }
    };

    const handleMoveUp = async (index: number) => {
        if (index > 0) {
            const newPosts = [...posts];
            [newPosts[index - 1], newPosts[index]] = [newPosts[index], newPosts[index - 1]];

            const updatedPosts = newPosts.map((post, i) => ({
                ...post,
                orden: i + 1,
            }));

            setPosts(updatedPosts);
            await actualizarOrdenBlogs(updatedPosts);
        }
    };

    const handleMoveDown = async (index: number) => {
        if (index < posts.length - 1) {
            const newPosts = [...posts];
            [newPosts[index + 1], newPosts[index]] = [newPosts[index], newPosts[index + 1]];

            const updatedPosts = newPosts.map((post, i) => ({
                ...post,
                orden: i + 1,
            }));

            setPosts(updatedPosts);
            await actualizarOrdenBlogs(updatedPosts);
        }
    };

    const handleLogout = () => {
        localStorage.clear(); // o localStorage.removeItem('token');
        navigate('/login');
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
                <div className="flex gap-4">
                    <Link
                        to="/create-user"
                        className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Crear Usuario
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cerrar Sesión
                    </button>
                </div>
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
