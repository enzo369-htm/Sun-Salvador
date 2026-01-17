import { useState, useEffect, memo, useCallback } from 'react';

function About() {
  const phrases = [
    "La ciudad de San Salvador de Jujuy se prepara para recibir una propuesta musical innovadora para este enero en la capital: el lanzamiento de la primera edición del Festival Sun Salvador",
    "Impulsado por la banda local Hollywood Bungalows, el festival surge del deseo de crear un punto de encuentro distinto para quienes buscan nuevas experiencias sonoras en la provincia.",
    "Esta primera edición reúne artistas locales y nacionales, con un hito histórico para Jujuy: la llegada por primera vez de Lichi junto a su banda desde Buenos Aires.",
    "Sun Salvador es un evento que promete ser el epicentro del indie rock y la música alternativa en la región año a año, y vos podes vivir la primera edición."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + phrases.length) % phrases.length);
  }, [phrases.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  }, [phrases.length]);


  return (
    <section id="about" className="relative py-6 md:py-10 px-3 md:px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-3 sm:p-4 md:p-8 lg:p-12" style={{
          backgroundColor: 'rgba(255, 28, 218, 0.4)',
          border: '6px solid #000',
          boxShadow: isMobile ? `
            8px 8px 0px rgba(0,0,0,0.9),
            16px 16px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(255, 28, 218, 0.2)
          ` : `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(255, 28, 218, 0.2)
          `,
          backdropFilter: 'blur(10px)',
          marginLeft: isMobile ? '0.5rem' : '0',
          marginRight: isMobile ? '0.5rem' : '0'
        }}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-8 tracking-tight" style={{
            color: '#F2C12E',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontWeight: 400,
            textShadow: `
              4px 4px 0px rgba(0,0,0,0.8),
              8px 8px 0px rgba(0,0,0,0.6),
              12px 12px 0px rgba(0,0,0,0.4),
              16px 16px 0px rgba(0,0,0,0.2),
              20px 20px 20px rgba(0,0,0,0.5)
            `,
            WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
            WebkitTextFillColor: '#F2C12E',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
            transform: 'perspective(500px) rotateX(5deg) rotateY(-2deg)',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.8))',
            transition: 'transform 0.3s ease'
          }}>
            SOBRE EL FESTIVAL
          </h2>
          
          {/* Contenedor del carrusel */}
          <div className="relative" style={{ 
            minHeight: '200px', 
            width: '100%',
            paddingLeft: '0.5rem', 
            paddingRight: '0.5rem'
          }}>
            {/* Contenedor interno con overflow hidden */}
            <div style={{
              overflow: 'hidden',
              width: '100%',
              position: 'relative',
              isolation: 'isolate',
              contain: 'layout style paint',
              clipPath: 'inset(0)',
              WebkitClipPath: 'inset(0)'
            }}>
              <div 
                className="flex"
                style={{
                  transform: `translateX(calc(-${currentIndex} * 100%))`,
                  display: 'flex',
                  willChange: 'transform',
                  transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  WebkitTransition: '-webkit-transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  msTransition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {phrases.map((phrase, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: '100%',
                      width: '100%',
                      flexShrink: 0,
                      flexGrow: 0,
                      paddingLeft: '0.5rem',
                      paddingRight: '0.5rem',
                      boxSizing: 'border-box',
                      position: 'relative',
                      overflow: 'hidden',
                      opacity: index === currentIndex ? 1 : 0.7
                    }}
                  >
                    <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-bold font-primary" style={{
                      fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))',
                      contain: 'layout style paint'
                    }}>
                      {phrase}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicadores de posición con flechas */}
          <div className="flex items-center justify-center gap-3 mt-6" role="tablist" aria-label="Navegación del carrusel">
            {/* Flecha izquierda */}
            <button
              onClick={goToPrevious}
              className="w-10 h-10 md:w-12 md:h-12 border-3 md:border-4 border-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              style={{
                backgroundColor: '#FF1CDA',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.8)'
              }}
              aria-label="Anterior"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {phrases.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Ir a slide ${index + 1}`}
                  className="transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 rounded"
                  style={{
                    width: index === currentIndex ? '2rem' : '0.75rem',
                    height: '0.75rem',
                    minWidth: '0.75rem',
                    minHeight: '0.75rem',
                    backgroundColor: index === currentIndex ? '#F2C12E' : 'rgba(255, 255, 255, 0.4)',
                    border: '2px solid #000',
                    borderRadius: '0.5rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={goToNext}
              className="w-10 h-10 md:w-12 md:h-12 border-3 md:border-4 border-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
              style={{
                backgroundColor: '#FF1CDA',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.8)'
              }}
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
