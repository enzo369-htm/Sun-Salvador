import { useState, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  aspectRatio?: string;
}

/**
 * Componente de imagen optimizado con lazy loading, aspect ratio y manejo de errores
 * Previene layout shifts y mejora performance
 */
function LazyImage({ 
  src, 
  alt, 
  fallback = '/placeholder.png',
  aspectRatio,
  className = '',
  style,
  ...props 
}: LazyImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const imageSrc = imageError ? fallback : src;
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(aspectRatio && { aspectRatio }),
    ...style
  };

  return (
    <div style={containerStyle} className={className}>
      <img
        {...props}
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={props.loading || 'lazy'}
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          ...props.style
        }}
      />
      {!imageLoaded && !imageError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ backgroundColor: 'rgba(0, 19, 255, 0.1)' }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default LazyImage;






