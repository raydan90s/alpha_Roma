import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
    id: string;
    titulo: string;
    contenido: string;
    urlImagen?: string;
    fechaCreacion?: string;
    fechaModificacion?: string;
    orden?: number;
}

const BlogPostDetail = () => {
    const { id } = useParams();
    const postId = id;
    const navigate = useNavigate();

    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs`;
                const response = await axios.get<BlogPost[]>(apiUrl);
                const sortedPosts = response.data.sort((a, b) => (a.orden || 0) - (b.orden || 0));
                setAllPosts(sortedPosts);
                console.log('Todos los posts ordenados:', sortedPosts);
                // Buscar el índice aquí, después de que allPosts se ha actualizado
                const index = sortedPosts.findIndex(post => post.id === postId);
                setCurrentIndex(index !== -1 ? index : null);
                console.log('Índice del post actual:', index);
                setLoading(false);
            } catch (e: any) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, [postId]);

    useEffect(() => {
        // Fetch del post individual basado en el postId
        const fetchBlogPost = async () => {
            if (postId) {
                setLoading(true);
                setError(null);
                try {
                    const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs/${postId}`;
                    const response = await axios.get(apiUrl);
                    setBlogPost(response.data);
                    console.log('Detalle del post cargado:', response.data);
                    setLoading(false);
                } catch (e: any) {
                    setError(e.message);
                    setLoading(false);
                }
            }
        };
        fetchBlogPost();
    }, [postId]);

    const goToPreviousBlog = () => {
        if (currentIndex !== null && currentIndex > 0) {
            navigate(`/blog/${allPosts[currentIndex - 1].id}`);
        }
    };

    const goToNextBlog = () => {
        if (currentIndex !== null && currentIndex < allPosts.length - 1) {
            navigate(`/blog/${allPosts[currentIndex + 1].id}`);
        }
    };

    if (loading) {
        return <div className="container mx-auto py-8 text-center">Cargando artículo...</div>;
    }

    if (error) {
        return <div className="container mx-auto py-8 text-center text-red-500">Error al cargar el artículo: {error}</div>;
    }

    if (!blogPost) {
        return <div className="container mx-auto py-8">Artículo no encontrado.</div>;
    }

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-primary mb-6 mt-20">{blogPost.titulo}</h1>
            {blogPost.urlImagen && (
                <img className="w-full rounded-lg shadow-md mb-6" src={blogPost.urlImagen} alt={blogPost.titulo} />
            )}
            <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogPost.contenido }}
            />
            <div className="flex justify-between mt-8">
                <button onClick={goToPreviousBlog} disabled={currentIndex === null || currentIndex === 0} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50">
                    Artículo Anterior
                </button>
                <button onClick={goToNextBlog} disabled={currentIndex === null || currentIndex === allPosts.length - 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50">
                    Artículo Siguiente
                </button>
            </div>
            {/* Aquí podrías añadir más elementos como botones de compartir, comentarios, etc. */}
        </div>
    );
};

export default BlogPostDetail;