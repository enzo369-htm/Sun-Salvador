import { useState, useEffect, memo, useCallback } from 'react';

function About() {
  const phrases = [
    "La ciudad de San Salvador de Jujuy se prepara para recibir una propuesta musical innovadora para este enero en la capital: el lanzamiento de la primera edición del Festival Sun Salvador",
    "Impulsado por la banda local Hollywood Bungalows, el festival surge del deseo de crear un punto de encuentro distinto para quienes buscan nuevas experiencias sonoras en la provincia.",
    "Esta primera edición reúne artistas locales y nacionales, con un hito histórico para Jujuy: la llegada por primera vez de Benito Cerati junto a su banda desde Buenos Aires.",
    "Sun Salvador es un evento que promete ser el epicentro del indie rock y la música alternativa en la región año a año, y vos podes vivir la primera edición."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section id="about" className="relative py-6 md:py-10 px-3 md:px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-3 sm:p-4 md:p-8 lg:p-12" style={{
          backgroundColor: 'rgba(255, 28, 218, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(255, 28, 218, 0.2)
          `,
          backdropFilter: 'blur(10px)'
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
          <div className="relative overflow-hidden" style={{ minHeight: '200px', width: '100%', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex} * 100%))`,
                display: 'flex'
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
                    boxSizing: 'border-box'
                  }}
                >
                  <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-bold font-primary" style={{
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'
                  }}>
                    {phrase}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de posición */}
          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Navegación del carrusel">
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
        </div>
      </div>
    </section>
  );
}

export default memo(About);
