import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatabasePreloader from '../../components/loader/DatabasePreloader'; // Importa DatabasePreloader

interface BlogPost {
  id: string;
  titulo: string;
  resumen: string;
  urlImagen?: string;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Añade estado de carga

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true); // Indica que la carga ha comenzado
      setError(null);
      try {
        const apiUrl = import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL + '/api/blogs';
        const response = await axios.get(apiUrl);

        if (Array.isArray(response.data)) {
          setBlogPosts(response.data);
        } else {
          console.error('La respuesta no es un arreglo de blogs:', response.data);
          setError('No se encontraron datos válidos');
        }
      } catch (e: any) {
        console.error('Error al cargar los blogs:', e);
        setError(e.message);
      } finally {
        setLoading(false); // Indica que la carga ha finalizado
      }
    };

    fetchBlogPosts();
  }, []);

  if (error) {
    return <div className="container mx-auto py-8 text-center text-red-500">Error al cargar los artículos: {error}</div>;
  }

  return (
    <> {/* Envolvemos todo con un Fragment */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12"> {/* Añadido mt-24 para más espacio superior */}
          <h1 className="text-4xl font-bold text-secondary mb-14 text-center">Explora Nuestro Mundo de Ideas</h1> {/* Añadido mb-12 para más espacio inferior */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mb-10"
              >
                {post.urlImagen && (
                  <img className="h-48 w-full object-cover" src={post.urlImagen} alt={post.titulo} />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-secondary mb-3">{post.titulo}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.resumen}</p>
                  <div className="flex justify-end">
                    <Link to={`/blog/${post.id}`} className="bg-primary hover:bg-acent text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {loading && <DatabasePreloader />} {/* Muestra el preloader mientras carga */}
    </>
  );
};

export default BlogPage;