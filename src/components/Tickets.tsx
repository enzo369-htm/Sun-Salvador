function Tickets() {
  return (
    <section id="tickets" className="relative py-16 px-4 overflow-hidden">
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
        backgroundColor: 'rgba(12, 47, 242, 0.4)',
        border: '6px solid #000',
        boxShadow: `
          15px 15px 0px rgba(0,0,0,0.9),
          30px 30px 0px rgba(0,0,0,0.5),
          inset 0 0 25px rgba(12, 47, 242, 0.2)
        `,
        backdropFilter: 'blur(10px)',
        padding: '2rem 1.5rem'
      }}>
        {/* Título "ENTRADAS" arriba con recuadro */}
        <div className="text-center mb-12 md:mb-16">
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(12, 47, 242, 0.4)',
            border: '6px solid #000',
            boxShadow: `
              15px 15px 0px rgba(0,0,0,0.9),
              30px 30px 0px rgba(0,0,0,0.5),
              inset 0 0 25px rgba(12, 47, 242, 0.2)
            `,
            backdropFilter: 'blur(10px)',
            padding: '1.5rem 3rem'
          }}>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-white" style={{
              textShadow: `
                3px 3px 0px #F2C12E,
                6px 6px 0px #F22ED2,
                9px 9px 0px #0C2FF2,
                12px 12px 0px #000,
                15px 15px 20px rgba(0,0,0,0.8)
              `,
              WebkitTextStroke: '2px #F2C12E',
              letterSpacing: '0.1em'
            }}>
              ENTRADAS
            </h2>
          </div>
        </div>

        {/* Contenedor de los botones de compra */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'transparent'
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
              backgroundColor: 'rgba(11, 217, 4, 0.95)',
              border: '4px solid #000',
              padding: '1.5rem 2.5rem',
              borderRadius: '8px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{
                color: '#000',
                fontSize: '1.5rem',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textShadow: '2px 2px 0px rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap'
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
          >
            <div className="buy-button" style={{
              backgroundColor: 'rgba(220, 38, 38, 0.95)',
              border: '4px solid #000',
              padding: '1.75rem 2.75rem',
              borderRadius: '8px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.3)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{
                color: '#000',
                fontSize: '1.65rem',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textShadow: '2px 2px 0px rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap'
              }}>
                🎫 CLICKEA PARA COMPRAR PROMO 4x3 →
              </span>
            </div>
          </a>
        </div>

        {/* Texto "CAPACIDAD LIMITADA" */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-2xl md:text-3xl font-black tracking-wider" style={{
            color: '#DC2626',
            textShadow: '3px 3px 0px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5)',
            letterSpacing: '0.15em',
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


export default Tickets;
