import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Importa el icono

interface BlogPost {
  id: string;
  titulo: string;
  contenido: string;
  urlImagen?: string;
  fechaCreacion?: string;
  fechaModificacion?: string;
  orden?: number;
  fechaModificacionFormateada?: string; // Ahora lo estamos usando
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
        const index = sortedPosts.findIndex(post => post.id === postId);
        setCurrentIndex(index !== -1 ? index : null);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [postId]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (postId) {
        setLoading(true);
        setError(null);
        try {
          const apiUrl = `${import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL}/api/blogs/${postId}`;
          const response = await axios.get<BlogPost>(apiUrl);
          setBlogPost(response.data);
          console.log('Datos del blog post recibido:', response.data);
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

  const handleSalir = () => {
    navigate('/blog'); // Redirige a la página principal del blog (ajusta la ruta si es diferente)
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
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto"> {/* Centra el contenido en pantallas más grandes */}
        <div className="flex flex-col items-center mb-6 md:mb-8 mt-12 md:mt-20 md:flex-row md:justify-between md:items-center"> {/* Contenedor flex con justify-between */}
          <div className="w-full flex justify-start sm:justify-start sm:w-auto md:w-auto"> {/* Contenedor del botón */}
            <div className='flex justify-start items-center'> {/* Alineamos el botón a la izquierda */}
              <button
                onClick={handleSalir}
                className="bg-primary hover:bg-hover text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Salir
              </button>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-secondary text-center md:text-center mt-4 md:mt-0"> {/* Título centrado en móvil, centrado en escritorio */}
            {blogPost.titulo}
          </h1>
          <div className="w-0 md:w-auto"> {/* Espaciador para alinear en `justify-between` */}</div>
        </div>
        {blogPost.urlImagen && (
          <div className="w-full h-48 md:h-96 lg:h-128 rounded-lg shadow-lg overflow-hidden mb-6 md:mb-8"> {/* Banner responsive */}
            <img className="w-full h-full object-cover" src={blogPost.urlImagen} alt={blogPost.titulo} />
          </div>
        )}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 relative"> {/* Contenido responsive (padding) */}
          {blogPost?.fechaModificacionFormateada && (
            <div className="absolute top-4 left-4 text-black text-sm mb-6 md:mb-8"> {/* Fecha responsive (margen inferior) */}
              {blogPost.fechaModificacionFormateada}
            </div>
          )}
          <div
            className="prose prose-sm md:prose-lg text-black mx-auto mt-6 md:mt-8"
            dangerouslySetInnerHTML={{ __html: blogPost.contenido }}
          />
          <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-12 gap-4"> {/* Botones de navegación responsive */}
            <button
              onClick={goToPreviousBlog}
              disabled={currentIndex === null || currentIndex === 0}
              className="bg-primary hover:bg-hover text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto flex items-center justify-center md:justify-start" 
            >
              Artículo Anterior
            </button>
            <button
              onClick={goToNextBlog}
              disabled={currentIndex === null || currentIndex === allPosts.length - 1}
              className="bg-primary hover:bg-hover text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto flex items-center justify-center md:justify-end" 
            >
              Artículo Siguiente
            </button>
          </div>
          {/* Aquí podrías añadir más elementos responsive si los hubiera */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;