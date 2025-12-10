import { useState, useEffect, memo, KeyboardEvent } from 'react';

function FinalCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTickets = () => {
    const element = document.getElementById('tickets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.setAttribute('tabIndex', '-1');
      element.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTickets();
    }
  };

  return (
    <section className="py-6 md:py-12 px-3 md:px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Imagen Sun Salvador con sol amarillo */}
        <div className="flex justify-center mb-6 md:mb-8">
          <img 
            src="/sun salvador con sol amarillo@2x.png"
            alt="Sun Salvador Festival"
            className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[800px] h-auto object-contain"
            style={{ 
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))',
              maxHeight: isMobile ? '160px' : '280px'
            }}
            loading="lazy"
            decoding="async"
            width="800"
            height="200"
          />
        </div>

        {/* Contenedor único con ambos textos */}
        <div className="p-5 md:p-8 lg:p-12" style={{
          backgroundColor: 'rgba(255, 28, 218, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(255, 28, 218, 0.2)
          `,
          backdropFilter: 'blur(10px)'
        }}>
          {/* Título */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-wide leading-tight mb-4 md:mb-6" style={{
            color: '#FFF',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
            fontWeight: 400,
            textShadow: `
              3px 3px 0px #000,
              5px 5px 0px rgba(0,0,0,0.8),
              0 0 10px rgba(0,0,0,0.5)
            `,
            WebkitTextStroke: 'clamp(2px, 0.4vw, 3px) #000',
            WebkitTextFillColor: '#FFF',
            paintOrder: 'stroke fill',
            letterSpacing: '0.05em'
          }}>
            La primera edición no se repite.
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide leading-relaxed text-white" style={{
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontSize: 'clamp(1rem, 3vw, 1.8rem)',
            fontWeight: 400,
            letterSpacing: '0.05em',
            textShadow: `
              3px 3px 0px #000,
              5px 5px 0px rgba(0,0,0,0.8),
              0 0 10px rgba(0,0,0,0.5)
            `,
            WebkitTextStroke: 'clamp(2px, 0.4vw, 3px) #000',
            WebkitTextFillColor: '#FFF',
            paintOrder: 'stroke fill',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'
          }}>
            Viví la noche que va a marcar el inicio de una nueva era en la música alternativa de Jujuy.
          </p>
        </div>

        {/* Botón grande final */}
        <div className="inline-block" style={{
          backgroundColor: 'rgba(255, 28, 218, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(255, 28, 218, 0.2)
          `,
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '1rem 1.5rem' : '1.5rem 2rem'
        }}>
          <button
            onClick={() => {
              scrollToTickets();
              // Tracking de evento (preparado para analytics)
              // gtag('event', 'click', { event_category: 'CTA', event_label: 'Comprar Entrada Ahora' });
            }}
            onKeyDown={handleKeyDown}
            className="group relative px-6 py-4 md:px-12 md:py-7 font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl
                       transition-all duration-300 transform hover:scale-110 focus:scale-110
                       active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2
                       inline-block cursor-pointer min-h-[44px]"
            aria-label="Comprar entrada ahora - Ir a sección de entradas"
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
              filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))'
            }}
          >
            COMPRAR ENTRADA AHORA
          </button>
        </div>

      </div>
    </section>
  );
}


export default memo(FinalCTA);
