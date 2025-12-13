import { useState, useEffect, memo } from 'react';

function Tickets() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="tickets" className="relative py-8 md:py-16 px-4 overflow-hidden">
      <style>{`
        .ticket-button {
          position: relative;
          display: block;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .ticket-button:hover {
          transform: scale(1.05) !important;
        }
        .ticket-button:hover .buy-button {
          transform: scale(1.05);
          boxShadow: '0 12px 24px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.4)';
        }
      `}</style>
      
      {/* Recuadro azul 3D transparente que envuelve toda la sección */}
      <div className="max-w-6xl mx-auto relative z-10" style={{
        backgroundColor: 'rgba(0, 19, 255, 0.4)',
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
        backdropFilter: 'blur(10px)',
        padding: isMobile ? '1.5rem 1rem' : '2rem 1.5rem'
      }}>
        {/* Título "ENTRADAS" arriba con recuadro */}
        <div className="text-center mb-12 md:mb-16">
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(0, 19, 255, 0.4)',
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
            backdropFilter: 'blur(10px)',
            padding: isMobile ? '1rem 1.5rem' : '1.5rem 3rem'
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
              ENTRADAS
            </h2>
          </div>
        </div>

        {/* Contenedor de los botones de compra */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '1rem' : '2rem',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'transparent',
          width: '100%',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          {/* Botón 1: Entrada General */}
          <a
            href="https://clubtopado.com.ar/evento/155/SunSalvador"
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-button"
            style={{ 
              transform: 'rotate(-2deg)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <div className="buy-button" style={{
              backgroundColor: '#6722d3',
              border: '4px solid #000',
              padding: isMobile ? '1rem 1rem' : '1.5rem 2.5rem',
              borderRadius: '8px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : 'none'
            }}>
              <span style={{
                color: '#FFF',
                fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                fontSize: isMobile ? 'clamp(0.9rem, 3.5vw, 1.3rem)' : 'clamp(1rem, 3vw, 1.5rem)',
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                textAlign: 'center',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
              }}>
                🎫 CLICKEA PARA COMPRAR ENTRADA GENERAL →
              </span>
            </div>
          </a>

          {/* Botón 2: Promo 4x3 */}
          <a
            href="https://clubtopado.com.ar/evento/155/SunSalvador"
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-button"
            style={{ 
              transform: 'rotate(2deg)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            aria-label="Comprar promo 4x3 - Abre en nueva pestaña"
            onClick={() => {
              // Tracking de evento (preparado para analytics)
              // gtag('event', 'click', { event_category: 'CTA', event_label: 'Promo 4x3' });
            }}
          >
            <div className="buy-button" style={{
              backgroundColor: '#FF1CDA',
              border: '4px solid #000',
              padding: isMobile ? '1rem 1rem' : '1.75rem 2.75rem',
              borderRadius: '8px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : 'none'
            }}>
              <span style={{
                color: '#000',
                fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                fontSize: isMobile ? 'clamp(0.9rem, 3.5vw, 1.3rem)' : 'clamp(1rem, 3vw, 1.65rem)',
                fontWeight: 400,
                letterSpacing: '0.05em',
                textShadow: '2px 2px 0px rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                textAlign: 'center'
              }}>
                🎫 CLICKEA PARA COMPRAR PROMO 4x3 →
              </span>
            </div>
          </a>

          {/* Botón 3: Comprar entradas físicas */}
          <a
            href="https://maps.app.goo.gl/7mqZ5msUcXiaQdsp7"
            target="_blank"
            rel="noopener noreferrer"
            className="ticket-button"
            style={{ 
              transform: 'rotate(-1deg)',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            aria-label="Comprar entradas físicas - Abre en nueva pestaña"
          >
            <div className="buy-button" style={{
              backgroundColor: '#6722d3',
              border: '4px solid #000',
              padding: isMobile ? '1rem 1rem' : '1.5rem 2.5rem',
              borderRadius: '8px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease',
              width: isMobile ? '100%' : 'auto',
              maxWidth: isMobile ? '100%' : 'none'
            }}>
              <span style={{
                color: '#FFF',
                fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                fontSize: isMobile ? 'clamp(0.9rem, 3.5vw, 1.3rem)' : 'clamp(1rem, 3vw, 1.5rem)',
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                textAlign: 'center',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
              }}>
                🎫 COMPRAR ENTRADAS FÍSICAS →
              </span>
            </div>
          </a>
        </div>

        {/* Texto "CAPACIDAD LIMITADA" */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black tracking-wider" style={{
            color: '#DC2626',
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontWeight: 400,
            textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)',
            letterSpacing: '0.05em',
            textDecoration: 'underline',
            textDecorationThickness: '3px',
            textUnderlineOffset: '8px'
          }}>
            CAPACIDAD LIMITADA
          </p>
        </div>
      </div>
    </section>
  );
}


export default memo(Tickets);
