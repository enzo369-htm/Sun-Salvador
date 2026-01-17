import { useState, useEffect, memo } from 'react';

function WhySunSalvador() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      title: 'Música en vivo de alto nivel',
      description: 'Shows potentes en vivo, sin pausas.',
    },
    {
      title: 'Artistas locales + nacionales',
      description: 'La escena jujeña junto a referentes nacionales.',
    },
    {
      title: 'DJs durante toda la noche',
      description: 'Sonido continuo hasta el final.',
    },
    {
      title: 'Comunidad, cultura y celebración',
      description: 'Música, encuentro y experiencia colectiva.',
    },
    {
      title: 'Cobertura audiovisual en tiempo real',
      description: 'El festival también se vive en vivo online.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  return (
    <section className="relative py-8 md:py-16 px-3 md:px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título principal */}
        <div className="backdrop-blur-md inline-block w-full text-center mb-6 py-3" style={{ 
          backgroundColor: 'rgba(0, 19, 255, 0.6)',
          border: '6px solid #000',
          boxShadow: isMobile ? `
            8px 8px 0px rgba(0,0,0,0.9),
            16px 16px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(0, 19, 255, 0.2)
          ` : `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(0, 19, 255, 0.2)
          `,
          padding: isMobile ? '1rem 1.5rem' : '1.5rem 2rem',
          marginLeft: isMobile ? '0.5rem' : '0',
          marginRight: isMobile ? '0.5rem' : '0'
        }}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-wider" style={{ 
            color: '#FFF',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontWeight: 400,
            textShadow: `
              3px 3px 0px #000,
              5px 5px 0px rgba(0,0,0,0.8),
              0 0 10px rgba(0,0,0,0.5)
            `,
            WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
            WebkitTextFillColor: '#FFF',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em',
            transform: 'perspective(500px) rotateX(5deg) rotateY(-2deg)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
            transition: 'transform 0.3s ease'
          }}>
            LA EXPERIENCIA
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-wide mt-4" style={{
            color: '#F2C12E',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontWeight: 400,
            textShadow: `
              3px 3px 0px #000,
              5px 5px 0px rgba(0,0,0,0.8)
            `,
            WebkitTextStroke: 'clamp(2px, 0.4vw, 3px) #000',
            WebkitTextFillColor: '#F2C12E',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em'
          }}>
            Lo que vas a vivir
          </h3>
        </div>

        {/* Carrusel de características */}
        <div className="relative" style={{ minHeight: '300px', padding: isMobile ? '0 0.5rem' : '0' }}>
          {/* Contenedor del carrusel */}
          <div className="relative" style={{ minHeight: '300px', width: '100%', paddingLeft: isMobile ? '0.5rem' : '0', paddingRight: isMobile ? '0.5rem' : '0', overflow: 'hidden', marginLeft: isMobile ? '0.5rem' : '0', marginRight: isMobile ? '0.5rem' : '0', clipPath: 'inset(0)', WebkitClipPath: 'inset(0)' }}>
            <div 
              className="flex"
              style={{
                transform: `translateX(calc(-${currentIndex} * 100%))`,
                display: 'flex',
                willChange: 'transform',
                transition: 'transform 0.5s ease-in-out',
                WebkitTransition: '-webkit-transform 0.5s ease-in-out',
                width: '100%'
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: '100%',
                    width: '100%',
                    flexShrink: 0,
                    flexGrow: 0,
                    boxSizing: 'border-box',
                    padding: '0',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    className="transform"
                    style={{
                      backgroundColor: 'rgba(0, 19, 255, 0.4)',
                      border: '6px solid #000',
                      boxShadow: isMobile ? `
                        0 8px 0px rgba(0,0,0,0.9),
                        0 16px 0px rgba(0,0,0,0.5),
                        inset 0 0 20px rgba(0, 19, 255, 0.2)
                      ` : `
                        0 12px 0px rgba(0,0,0,0.9),
                        0 24px 0px rgba(0,0,0,0.5),
                        inset 0 0 20px rgba(0, 19, 255, 0.2)
                      `,
                      backdropFilter: 'blur(10px)',
                      padding: isMobile ? '1.5rem 1.5rem' : '2rem 2rem',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '1rem',
                      marginLeft: '0',
                      marginRight: '0'
                    }}
                  >
                    <h3 className="font-black text-white" style={{
                      fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                      fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      textShadow: `
                        3px 3px 0px #000,
                        5px 5px 0px rgba(0,0,0,0.8),
                        0 0 10px rgba(0,0,0,0.5)
                      `,
                      WebkitTextStroke: '2px #000',
                      WebkitTextFillColor: '#FFF',
                      paintOrder: 'stroke fill',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
                      marginBottom: '0.5rem'
                    }}>
                      {feature.title}
                    </h3>

                    <p className="leading-relaxed font-bold text-white" style={{
                      fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                      fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      textShadow: `
                        3px 3px 0px #000,
                        5px 5px 0px rgba(0,0,0,0.8),
                        0 0 10px rgba(0,0,0,0.5)
                      `,
                      WebkitTextStroke: '2px #000',
                      WebkitTextFillColor: '#FFF',
                      paintOrder: 'stroke fill',
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-3 md:border-4 border-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
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

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border-3 md:border-4 border-black flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
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

        {/* Indicadores de posición */}
        <div className="flex justify-center gap-2 mt-4">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all duration-300 cursor-pointer"
              style={{
                width: index === currentIndex ? '2.5rem' : '0.75rem',
                height: '0.75rem',
                backgroundColor: index === currentIndex ? '#F2C12E' : 'rgba(255, 255, 255, 0.4)',
                border: '2px solid #000',
                borderRadius: '0.5rem'
              }}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default memo(WhySunSalvador);
