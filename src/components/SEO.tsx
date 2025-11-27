import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  img?: string; // 分享时的预览图
}

export default function SEO({ 
  title, 
  description = "Jack的个人作品集，分享前端技术与项目经验。", 
  name = "Jackify", 
  type = "website",
  img = "/preview.png" // 默认预览图，请放入 public/preview.png
}: SEOProps) {
  return (
    <Helmet>
      {/* 标准 metadata */}
      <title>{title} | {name}</title>
      <meta name='description' content={description} />
      
      {/* Facebook / Open Graph (社交媒体分享卡片) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      
      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}