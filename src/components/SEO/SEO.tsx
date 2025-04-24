import React from "react";
import { Helmet } from "react-helmet";
import { SEOProps } from "../../interface/SEOProps";

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
    );

};

export default SEO;

