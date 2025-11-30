import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO = ({ title, description, keywords, image }: SEOProps) => {
  const { t } = useTranslation();

  const siteTitle = "ENGINEER1";
  const defaultDescription = "AI x FANDOM. Next Gen Entertainment Studio specialized in IP-based commerce and AI content development.";
  const defaultKeywords = "Engineer1, AI, Fandom, Entertainment, K-pop, Technology, Commerce, soyo-mo store";
  const defaultImage = "/vite.svg"; // 임시 이미지

  const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEO;

