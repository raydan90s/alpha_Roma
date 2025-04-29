import React from "react";
import { Helmet } from "react-helmet";
import { SEOProps } from "../../interface/SEOProps";

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  ogType,
  twitterCard
}) => {
  // Procesar el título
  const processedTitle = processTitle(title);
  
  // Procesar la descripción
  const processedDescription = processDescription(description);
  
  // Procesar las palabras clave
  const processedKeywords = processKeywords(keywords);

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{processedTitle}</title>
      {processedDescription && <meta name="description" content={processedDescription} />}
      {processedKeywords && <meta name="keywords" content={processedKeywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={processedTitle} />
      {processedDescription && <meta property="og:description" content={processedDescription} />}
      <meta property="og:type" content={ogType || "website"} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={processedTitle} />
      {processedDescription && <meta name="twitter:description" content={processedDescription} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Metadatos adicionales para SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

// Función para procesar el título
const processTitle = (title: string): string => {
  // Si el título no contiene "NovaFenix", añadirlo
  if (!title.includes("NovaFenix")) {
    return `NovaFenix | ${title}`;
  }
  
  return title;
};

// Función para procesar la descripción
const processDescription = (description: string | undefined): string | undefined => {
  if (!description) return undefined;
  
  // Eliminar etiquetas HTML si hay alguna
  const plainText = description.replace(/<[^>]+>/g, '');
  
  // Limitar a 160 caracteres para SEO
  if (plainText.length > 160) {
    // Encontrar un buen punto para cortar (en un espacio)
    const truncated = plainText.substring(0, 157);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    
    if (lastSpaceIndex > 100) { // Si hay un espacio razonable
      return truncated.substring(0, lastSpaceIndex) + '...';
    }
    
    return truncated + '...';
  }
  
  return plainText;
};

// Función para procesar las palabras clave
const processKeywords = (keywords: string | undefined): string | undefined => {
  if (!keywords) return undefined;
  
  // Lista de palabras a excluir (muy cortas o no relevantes)
  const excludeWords = ['a', 'ante', 'bajo', 'con', 'de', 'desde', 'en', 
    'entre', 'el', 'la', 'los', 'las', 'para', 'por', 'según', 'sin', 
    'sobre', 'y', 'o', 'u', 'e', 'que', 'como', 'esto', 'eso', 'esta',
    'este', 'ese', 'esa', 'un', 'una', 'unos', 'unas', 'al', 'del'];
  
  // Filtrar las palabras clave
  return keywords
    .split(/\s+|,/) // Dividir por espacios o comas
    .filter(word => word.length > 3) // Eliminar palabras muy cortas
    .filter(word => !excludeWords.includes(word.toLowerCase())) // Eliminar palabras comunes
    .filter(word => /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/.test(word)) // Solo palabras, no números o símbolos
    .map(word => word.toLowerCase()) // Convertir a minúsculas
    .filter((word, index, array) => array.indexOf(word) === index) // Eliminar duplicados
    .slice(0, 15) // Limitar a 15 palabras clave
    .join(', '); // Unir con comas
};

export default SEO;