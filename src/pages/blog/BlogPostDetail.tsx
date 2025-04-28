import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import DatabasePreloader from '../../components/loader/DatabasePreloader';
import SEO from '../../components/SEO/SEO';

interface BlogPost {
  id: number;
  titulo: string;
  contenido: string;
  urlImagen?: string;
  fechaCreacion?: string;
  fechaModificacion?: string;
  orden?: number;
  fechaModificacionFormateada?: string;
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
        const postIdNumber = parseInt(postId, 10);
        const index = sortedPosts.findIndex(post => post.id === postIdNumber);
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
      const previousPostId = allPosts[currentIndex - 1].id;
      navigate(`/blog/${previousPostId}`);
    }
  };

  const goToNextBlog = () => {
    if (currentIndex !== null && currentIndex < allPosts.length - 1) {
      const nextPostId = allPosts[currentIndex + 1].id;
      navigate(`/blog/${nextPostId}`);
    }
  };

  const handleSalir = () => {
    navigate('/blog');
  };

  return (
    <>
      <SEO
      title={"NovaFenix |"+ blogPost?.titulo || "NovaFenix Blog"}
      description={blogPost?.contenido}
      keywords={blogPost?.contenido.split(" ").toString() || "0"}
      />
      {loading ? (
        <div className="container mx-auto py-8 text-center">
          Cargando artículo...
          <DatabasePreloader />
        </div>
      ) : error ? (
        <div className="container mx-auto py-8 text-center text-red-500">Error al cargar el artículo: {error}</div>
      ) : !blogPost ? (
        <div className="container mx-auto py-8">Artículo no encontrado.</div>
      ) : (
        <div className="bg-gray-100 min-h-screen py-12">
          <div className="container mx-auto">
            <div className="flex flex-col items-center mb-6 md:mb-8 mt-12 md:mt-20 md:flex-row md:justify-between md:items-center">
              <div className="w-full flex justify-start sm:justify-start sm:w-auto md:w-auto">
                <div className='flex justify-start items-center'>
                  <button
                    onClick={handleSalir}
                    className="bg-primary hover:bg-hover text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
                  >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Salir
                  </button>
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-secondary text-center md:text-center mt-4 md:mt-0">
                {blogPost.titulo}
              </h1>
              <div className="w-0 md:w-auto"></div>
            </div>
            {blogPost.urlImagen && (
              <div className="w-full h-48 md:h-96 lg:h-128 rounded-lg shadow-lg overflow-hidden mb-6 md:mb-8">
                <img className="w-full h-full object-cover" src={blogPost.urlImagen} alt={blogPost.titulo} />
              </div>
            )}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 relative">
              {blogPost?.fechaModificacionFormateada && (
                <div className="absolute top-4 left-4 text-black text-sm mb-6 md:mb-8">
                  {blogPost.fechaModificacionFormateada}
                </div>
              )}
              <div
                className="prose prose-sm md:prose-lg text-black mx-auto mt-6 md:mt-8"
                dangerouslySetInnerHTML={{ __html: blogPost.contenido }}
              />
              <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-12 gap-4">
                <button
                  onClick={goToPreviousBlog}
                  disabled={currentIndex === null || currentIndex === 0}
                  className={`
                    ${currentIndex === null || currentIndex === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary hover:bg-hover text-black cursor-pointer'
                    }
                    font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto flex items-center justify-center md:justify-start
                  `}
                >
                  Artículo Anterior
                </button>
                <button
                  onClick={goToNextBlog}
                  disabled={currentIndex === null || currentIndex === allPosts.length - 1}
                  className={`
                    ${currentIndex === null || currentIndex === allPosts.length - 1
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-primary hover:bg-hover text-black cursor-pointer'
                    }
                    font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full md:w-auto flex items-center justify-center md:justify-end
                  `}
                >
                  Artículo Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPostDetail;