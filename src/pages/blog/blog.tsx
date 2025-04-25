import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Importa axios

interface BlogPost {
  id: string;
  titulo: string;
  resumen: string;
  urlImagen?: string;
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      setError(null);
      console.log('Iniciando fetchBlogPosts...');
      try {
        const apiUrl = import.meta.env.VITE_NEXT_PUBLIC_API_BASE_URL + '/api/blogs';
        console.log('URL de la API:', apiUrl);
        const response = await axios.get(apiUrl);
        console.log('Respuesta de la API:', response);
        setBlogPosts(response.data);
        setLoading(false);
        console.log('Datos de los blogs:', response.data);
      } catch (e: any) {
        console.error('Error al cargar los blogs:', e);
        setError(e.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    console.log('Estado: Cargando...');
    return <div className="container mx-auto py-8 text-center">Cargando artículos...</div>;
  }

  if (error) {
    console.log('Estado: Error -', error);
    return <div className="container mx-auto py-8 text-center text-red-500">Error al cargar los artículos: {error}</div>;
  }

  console.log('Estado: Datos cargados - Renderizando blogs:', blogPosts);
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Explora Nuestro Mundo de Ideas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPost) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {post.urlImagen && (
                <img className="h-48 w-full object-cover" src={post.urlImagen} alt={post.titulo} />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-secondary mb-3">{post.titulo}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.resumen}</p>
                <div className="flex justify-end">
                  <Link to={`/blog/${post.id}`} className="bg-primary hover:bg-acent text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;