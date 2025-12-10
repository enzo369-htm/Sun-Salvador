
import { memo, useState, useEffect } from 'react';

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Detectar si el usuario prefiere menos movimiento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVideoLoaded(true); // No cargar video si prefiere menos movimiento
    }
  }, []);

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
      className="relative min-h-screen flex flex-col items-center justify-center px-3 pt-20 pb-16 overflow-hidden"
      aria-label="Hero - Sun Salvador Festival"
    >
      {/* Video de fondo - optimizado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minWidth: '100%', minHeight: '100%' }}
        onLoadedData={() => setVideoLoaded(true)}
        aria-hidden="true"
      >
        <source src="/video%20sun%20salvador%202.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay oscuro sutil para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Nubes decorativas - reducidas para mejor rendimiento */}
      <div className="absolute top-32 left-4 w-28 md:w-36 opacity-50 animate-float gpu-accelerated" style={{ animationDelay: '0s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-1.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="144" height="96" />
      </div>
      <div className="absolute top-28 right-8 w-32 md:w-40 opacity-45 animate-float gpu-accelerated" style={{ animationDelay: '1.5s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-2.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="160" height="120" />
      </div>
      <div className="absolute top-40 right-1/4 w-28 md:w-36 opacity-50 animate-float gpu-accelerated" style={{ animationDelay: '0.8s', zIndex: 15 }} aria-hidden="true">
        <img src="/Nube-1.png" alt="" className="w-full h-auto" loading="lazy" decoding="async" width="144" height="96" />
      </div>
      <div className="absolute top-36 left-1/3 w-24 md:w-32 opacity-40 animate-float gpu-accelerated" style={{ animationDelay: '2.2s', zIndex: 15 }} aria-hidden="true">
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
            style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))' }}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            width="800"
            height="200"
          />
          {/* Sol amarillo al lado de la N */}
          <img 
            src="/Sol-amarillo@2x.png"
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
        <button
          onClick={() => scrollToSection('artistas')}
          onKeyDown={(e) => handleKeyDown(e, 'artistas')}
          className="mt-8 md:mt-16 px-6 py-4 md:px-10 md:py-5 font-black text-xl sm:text-2xl md:text-3xl
                     border-4 border-black transition-all duration-300 transform hover:scale-110
                     active:scale-95 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2
                     inline-block cursor-pointer min-h-[44px]"
          style={{
            backgroundColor: 'transparent',
            color: '#FF1CDA',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
            fontWeight: 400,
            letterSpacing: '0.05em',
            textShadow: `
              8px 12px 0px #000,
              10px 14px 0px rgba(0,0,0,0.8)
            `,
            WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
            WebkitTextFillColor: '#FF1CDA',
            paintOrder: 'stroke fill',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.6)',
            filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))'
          }}
          aria-label="Comprar entrada - Ir a sección de artistas"
        >
          ¡COMPRAR MI ENTRADA!
        </button>

        {/* Flecha indicadora hacia abajo */}
        <button
          onClick={() => scrollToSection('artistas')}
          onKeyDown={(e) => handleKeyDown(e, 'artistas')}
          className="mt-8 md:mt-12 animate-bounce cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 rounded-full p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          style={{ willChange: 'transform' }}
          aria-label="Desplazarse hacia abajo"
        >
          <svg 
            className="w-12 h-12 md:w-16 md:h-16" 
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
