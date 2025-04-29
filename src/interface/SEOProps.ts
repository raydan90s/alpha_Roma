export interface SEOProps {
  title: string;     // Mantenemos esta propiedad como obligatoria
  description?: string;
  keywords?: string;
  canonical?: string;
  // Nuevas propiedades opcionales
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}