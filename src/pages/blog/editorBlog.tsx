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

interface Video {
    id: number;
    titulo: string;
    url: string;
}

const EditorBlog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showAddVideoForm, setShowAddVideoForm] = useState(false);
    const [newVideoTitle, setNewVideoTitle] = useState('');
    const [newVideoUrl, setNewVideoUrl] = useState('');
    const [editingVideoId, setEditingVideoId] = useState<number | null>(null);
    const [editedVideoTitle, setEditedVideoTitle] = useState('');
    const [editedVideoUrl, setEditedVideoUrl] = useState('');
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
            } catch (e: any) {
                setError(e.message);
            }
        };

        const fetchVideos = async () => {
            try {
                const videoApiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/videos`;
                const response = await axios.get<Video[]>(videoApiUrl);
                setVideos(response.data);
            } catch (e: any) {
                console.error('Error al cargar los videos:', e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
        fetchVideos();
    }, []);

    const actualizarOrdenBlogs = async (nuevosPosts: BlogPost[]) => {
        try {
            const ordenData = nuevosPosts.map((post, index) => ({
                id: post.id,
                orden: index + 1,
            }));

            const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/orden`;
            const response = await axios.put(apiUrl, { orden: ordenData });

            console.log('Respuesta del servidor (orden blogs):', response.data);
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

    const handleDeleteVideo = async (id: number) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este video?')) {
            try {
                const videoApiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/videos/${id}`;
                await axios.delete(videoApiUrl);
                setVideos(videos.filter((video) => video.id !== id));
                alert('Video eliminado exitosamente.');
            } catch (error: any) {
                console.error('Error al eliminar el video:', error.message);
                alert('Error al eliminar el video.');
            }
        }
    };

    const handleShowAddVideoForm = () => {
        setShowAddVideoForm(true);
    };

    const handleCloseAddVideoForm = () => {
        setShowAddVideoForm(false);
        setNewVideoTitle('');
        setNewVideoUrl('');
    };

    const handleAddVideo = async () => {
        if (newVideoTitle && newVideoUrl) {
            try {
                const videoApiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/videos`;
                const response = await axios.post(videoApiUrl, { titulo: newVideoTitle, url: newVideoUrl });
                setVideos([...videos, response.data]);
                alert('Video agregado exitosamente.');
                handleCloseAddVideoForm();
            } catch (error: any) {
                console.error('Error al agregar el video:', error.message);
                alert('Error al agregar el video.');
            }
        } else {
            alert('Por favor, ingresa el título y la URL del video.');
        }
    };

    const handleEditVideo = (video: Video) => {
        setEditingVideoId(video.id);
        setEditedVideoTitle(video.titulo);
        setEditedVideoUrl(video.url);
    };

    const handleCancelEditVideo = () => {
        setEditingVideoId(null);
    };

    const handleSaveEditedVideo = async (id: number) => {
        try {
            const videoApiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/videos/${id}`;
            const response = await axios.put(videoApiUrl, { titulo: editedVideoTitle, url: editedVideoUrl });
            setVideos(videos.map((video) =>
                video.id === id ? { ...video, titulo: editedVideoTitle, url: editedVideoUrl } : video
            ));
            setEditingVideoId(null);
            alert('Video actualizado exitosamente.');
        } catch (error: any) {
            console.error('Error al actualizar el video:', error.message);
            alert('Error al actualizar el video.');
        }
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    if (loading) {
        return <div className="container mx-auto py-8 text-center">Cargando contenido...</div>;
    }

    if (error) {
        return <div className="container mx-auto py-8 text-center text-red-500">Error al cargar los datos: {error}</div>;
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

            <section className="mb-8">
                <ul>
                    {posts.map((post, index) => (
                        <li key={post.id} className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-secondary">{post.titulo}</h3>
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
            </section>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-bold text-primary">Panel de Edición de Videos</h2>
                    <button
                        onClick={handleShowAddVideoForm}
                        className="bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Agregar Video
                    </button>
                </div>

                {showAddVideoForm && (
                    <div className="bg-white shadow-md rounded-md p-4 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Agregar Nuevo Video</h3>
                        <div className="mb-2">
                            <label htmlFor="newVideoTitle" className="block text-gray-700 text-sm font-bold mb-1">Título:</label>
                            <input
                                type="text"
                                id="newVideoTitle"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={newVideoTitle}
                                onChange={(e) => setNewVideoTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="newVideoUrl" className="block text-gray-700 text-sm font-bold mb-1">URL:</label>
                            <input
                                type="text"
                                id="newVideoUrl"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={newVideoUrl}
                                onChange={(e) => setNewVideoUrl(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={handleAddVideo}
                                className="bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Guardar
                            </button>
                            <button
                                onClick={handleCloseAddVideoForm}
                                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                )}

                <ul>
                    {videos.map((video) => (
                        <li key={video.id} className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between">
                            <div>
                                {editingVideoId === video.id ? (
                                    <>
                                        <div className="mb-2">
                                            <label htmlFor={`editTitle-${video.id}`} className="block text-gray-700 text-sm font-bold mb-1">Título:</label>
                                            <input
                                                type="text"
                                                id={`editTitle-${video.id}`}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                value={editedVideoTitle}
                                                onChange={(e) => setEditedVideoTitle(e.target.value)}
                                                style={{ width: '300px' }}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor={`editUrl-${video.id}`} className="block text-gray-700 text-sm font-bold mb-1">URL:</label>
                                            <input
                                                type="text"
                                                id={`editUrl-${video.id}`}
                                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                value={editedVideoUrl}
                                                onChange={(e) => setEditedVideoUrl(e.target.value)}
                                                style={{ width: '800px' }}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-lg font-semibold text-tertiary">{video.titulo}</h3>
                                        <p className="text-gray-600 text-sm">URL: {video.url}</p>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center">
                                {editingVideoId === video.id ? (
                                    <>
                                        <button
                                            onClick={() => handleSaveEditedVideo(video.id)}
                                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                                        >
                                            Guardar
                                        </button>
                                        <button
                                            onClick={handleCancelEditVideo}
                                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                                        >
                                            Cancelar
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => handleEditVideo(video)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                                    >
                                        Actualizar
                                    </button>
                                )}
                                {/* Condicional para ocultar el botón Eliminar */}
                                {editingVideoId !== video.id && (
                                    <button
                                        onClick={() => handleDeleteVideo(video.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default EditorBlog;
