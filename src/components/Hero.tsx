
import { memo, useState, useEffect, useRef, useCallback } from 'react';

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Función para intentar reproducir el video
  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Asegurar que el video tenga los atributos necesarios
    video.muted = true;
    video.playsInline = true;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Video reproducido exitosamente
          setVideoLoaded(true);
        })
        .catch((error) => {
          // Si falla, intentar después de la primera interacción
          const handleFirstInteraction = () => {
            if (video) {
              video.play()
                .then(() => setVideoLoaded(true))
                .catch(() => {});
            }
            document.removeEventListener('touchstart', handleFirstInteraction);
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
            document.removeEventListener('touchend', handleFirstInteraction);
          };
          document.addEventListener('touchstart', handleFirstInteraction, { once: true, passive: true });
          document.addEventListener('touchend', handleFirstInteraction, { once: true, passive: true });
          document.addEventListener('click', handleFirstInteraction, { once: true });
          document.addEventListener('scroll', handleFirstInteraction, { once: true, passive: true });
        });
    }
  }, []);

  useEffect(() => {
    // Detectar si el usuario prefiere menos movimiento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVideoLoaded(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Pequeño delay para asegurar que el DOM esté listo
    const timeoutId = setTimeout(() => {
      attemptPlay();
    }, 100);

    // Intentar reproducir cuando el video esté listo para reproducir
    const handleCanPlay = () => {
      attemptPlay();
    };

    const handleCanPlayThrough = () => {
      attemptPlay();
    };

    const handleLoadedData = () => {
      attemptPlay();
    };

    const handleLoadedMetadata = () => {
      attemptPlay();
    };

    // Agregar múltiples event listeners para asegurar reproducción
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Limpiar listeners y timeout
    return () => {
      clearTimeout(timeoutId);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [attemptPlay]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.setAttribute('tabIndex', '-1');
      element.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-2 sm:px-3 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden"
      aria-label="Hero - Sun Salvador Festival"
    >
      <style>{`
        @keyframes pulse-button {
          0%, 100% {
            box-shadow: 8px 8px 0px rgba(0,0,0,0.6),
                        0 0 30px rgba(0, 19, 255, 1),
                        0 0 60px rgba(0, 19, 255, 0.8),
                        0 0 90px rgba(0, 19, 255, 0.6),
                        0 0 120px rgba(0, 19, 255, 0.4),
                        0 0 150px rgba(0, 19, 255, 0.3),
                        inset 0 0 30px rgba(0, 19, 255, 0.2),
                        inset 0 2px 4px rgba(255,255,255,0.4);
          }
          50% {
            box-shadow: 8px 8px 0px rgba(0,0,0,0.6),
                        0 0 50px rgba(0, 19, 255, 1),
                        0 0 100px rgba(0, 19, 255, 1),
                        0 0 150px rgba(0, 19, 255, 0.8),
                        0 0 200px rgba(0, 19, 255, 0.6),
                        0 0 250px rgba(0, 19, 255, 0.4),
                        inset 0 0 40px rgba(0, 19, 255, 0.3),
                        inset 0 2px 4px rgba(255,255,255,0.6);
          }
        }
        @keyframes shimmer-button {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
      {/* Video de fondo - optimizado para móviles */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ 
          minWidth: '100%', 
          minHeight: '100%',
          objectFit: 'cover',
          WebkitPlaysinline: true
        }}
        onLoadedData={attemptPlay}
        onCanPlay={attemptPlay}
        onCanPlayThrough={attemptPlay}
        onLoadedMetadata={attemptPlay}
        onPlay={() => setVideoLoaded(true)}
        aria-hidden="true"
      >
        <source src="/video%20sun%20salvador%202.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay oscuro sutil para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Nubes decorativas - mucho más pequeñas en móvil */}
      <div className="absolute top-32 left-4 w-16 sm:w-20 md:w-28 lg:w-36 opacity-50 animate-float gpu-accelerated" style={{ animationDelay: '0s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-1.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="144" height="96" />
      </div>
      <div className="absolute top-28 right-8 w-20 sm:w-24 md:w-32 lg:w-40 opacity-45 animate-float gpu-accelerated" style={{ animationDelay: '1.5s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-2.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="160" height="120" />
      </div>
      <div className="absolute top-40 right-1/4 w-16 sm:w-20 md:w-28 lg:w-36 opacity-50 animate-float gpu-accelerated" style={{ animationDelay: '0.8s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-1.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="144" height="96" />
      </div>
      <div className="absolute top-36 left-1/3 w-14 sm:w-18 md:w-24 lg:w-32 opacity-40 animate-float gpu-accelerated" style={{ animationDelay: '2.2s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-3.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="128" height="80" />
      </div>

      <div className="relative z-30 text-center flex flex-col items-center justify-center">
        {/* Contenedor del título con sol */}
        <div className="relative inline-block">
          {/* Imagen del título Sun Salvador */}
          <img 
            src="/sun salvador solo@2x.png"
            alt="Sun Salvador Festival"
            className="w-full max-w-[280px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto object-contain relative"
            style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))', marginBottom: '1rem' }}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="800"
            height="200"
          />
          {/* Sol amarillo al lado de la N */}
          <img 
            src="/SOLROSA.png"
            alt=""
            className="absolute gpu-accelerated"
            style={{
              width: 'clamp(4rem, 10vw, 10rem)',
              height: 'auto',
              top: 'clamp(20%, 25%, 30%)',
              left: 'clamp(65%, 68%, 72%)',
              transform: 'translateY(-50%)',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              zIndex: 10
            }}
            loading="eager"
            decoding="async"
            width="160"
            height="160"
            aria-hidden="true"
          />
        </div>

        {/* Botón "Comprar mi entrada" */}
        <a
          href="https://clubtopado.com.ar/evento/155/SunSalvador"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 sm:mt-8 md:mt-16 px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-5 font-black text-lg sm:text-xl md:text-2xl lg:text-3xl
                     border-3 sm:border-4 border-black transition-all duration-300 transform hover:scale-110
                     active:scale-95 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2
                     inline-block cursor-pointer min-h-[44px] no-underline"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 19, 255, 0.5) 0%, rgba(0, 19, 255, 0.4) 50%, rgba(0, 19, 255, 0.5) 100%)',
            backdropFilter: 'blur(10px)',
            color: '#FF1CDA',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontSize: 'clamp(1.3rem, 5.5vw, 2.5rem)',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textShadow: 'none',
            WebkitTextStroke: 'clamp(4px, 0.6vw, 6px) #000',
            WebkitTextFillColor: '#FF1CDA',
            paintOrder: 'stroke fill',
            boxShadow: `
              8px 8px 0px rgba(0,0,0,0.6),
              0 0 30px rgba(0, 19, 255, 1),
              0 0 60px rgba(0, 19, 255, 0.8),
              0 0 90px rgba(0, 19, 255, 0.6),
              0 0 120px rgba(0, 19, 255, 0.4),
              0 0 150px rgba(0, 19, 255, 0.3),
              inset 0 0 30px rgba(0, 19, 255, 0.2),
              inset 0 2px 4px rgba(255,255,255,0.4)
            `,
            filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
            textDecoration: 'none',
            position: 'relative',
            borderRadius: '12px',
            borderWidth: '5px',
            animation: 'pulse-button 2s ease-in-out infinite',
            overflow: 'hidden'
          }}
          aria-label="Comprar entrada - Abre en nueva pestaña"
          onClick={() => {
            // Tracking de evento (preparado para analytics)
            // gtag('event', 'click', { event_category: 'CTA', event_label: 'Hero Button' });
          }}
        >
          {/* Efecto shimmer */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
            animation: 'shimmer-button 3s infinite',
            pointerEvents: 'none',
            zIndex: 1
          }} />
          <span style={{ position: 'relative', zIndex: 2 }}>
            ¡COMPRAR MI ENTRADA!
          </span>
        </a>

        {/* Flecha indicadora hacia abajo */}
        <button
          onClick={() => scrollToSection('artistas')}
          onKeyDown={(e) => handleKeyDown(e, 'artistas')}
          className="mt-8 md:mt-12 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 rounded-full p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          style={{ willChange: 'transform' }}
          aria-label="Desplazarse hacia abajo"
        >
          <svg 
            className="w-8 h-8 md:w-10 md:h-10" 
            fill="none" 
            stroke="#F2C12E" 
            viewBox="0 0 24 24"
            style={{ filter: 'drop-shadow(2px 2px 0px black)' }}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>


      {/* Gradiente de transición al final - se difumina hacia la siguiente sección */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-25"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 19, 255, 0.15) 20%, rgba(0, 19, 255, 0.3) 40%, rgba(0, 19, 255, 0.5) 60%, rgba(0, 19, 255, 0.7) 80%, rgba(0, 19, 255, 0.85) 95%, rgba(0, 19, 255, 1) 100%)'
        }}
      ></div>
    </section>
  );
}


export default memo(Hero);
