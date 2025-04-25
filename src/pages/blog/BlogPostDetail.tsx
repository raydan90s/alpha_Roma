import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatabasePreloader from '../../components/loader/DatabasePreloader';

interface BlogPost {
  id: string;
  titulo: string;
  contenido: string;
  urlImagen?: string;
  fechaCreacion?: string;
  fechaModificacion?: string;
}

const BlogPostDetail = () => {
  const { id } = useParams();
  const postId = id; // El ID ya es string (UUID)

  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs/${postId}`;
        const response = await axios.get(apiUrl);
        setBlogPost(response.data);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId]);

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
    <DatabasePreloader apiUrl='https://denverback.onrender.com'>
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-primary mb-6 mt-20">{blogPost.titulo}</h1>
      {blogPost.urlImagen && (
        <img className="w-full rounded-lg shadow-md mb-6" src={blogPost.urlImagen} alt={blogPost.titulo} />
      )}
      <p className="text-gray-700 leading-relaxed">{blogPost.contenido}</p>
      {/* Aquí podrías añadir más elementos como botones de compartir, comentarios, etc. */}
    </div>
    </DatabasePreloader>
  );
};

export default BlogPostDetail;