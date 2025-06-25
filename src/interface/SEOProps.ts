export interface SEOProps {
  title: string;     // Mantenemos esta propiedad como obligatoria
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}