import { useState, useEffect } from 'react';

function About() {
  const phrases = [
    "Sun Salvador nace en Jujuy para devolverle a la ciudad un espacio donde la música y el arte puedan respirar de nuevo.",
    "Durante años la escena local buscó un lugar donde expresarse; este festival surge del deseo de encender ese movimiento artístico que nunca dejó de latir.",
    "Sun Salvador reúne a quienes aman la música y creen que Jujuy merece un escenario a la altura de su energía, su talento y su identidad.",
    "Creamos este festival para experimentar el sonido al máximo nivel y vivir una experiencia que sólo puede suceder acá, en el norte."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section id="about" className="relative py-10 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-8 md:p-12" style={{
          backgroundColor: 'rgba(242, 46, 210, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(242, 46, 210, 0.2)
          `,
          backdropFilter: 'blur(10px)'
        }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight text-white whitespace-nowrap" style={{
            textShadow: `
              3px 3px 0px #F2C12E,
              6px 6px 0px #F22ED2,
              9px 9px 0px #0C2FF2,
              12px 12px 0px #000,
              15px 15px 20px rgba(0,0,0,0.8)
            `,
            WebkitTextStroke: '2px #F2C12E',
            letterSpacing: '0.1em',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))'
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
                  <div className="text-white text-2xl md:text-3xl leading-relaxed font-bold" style={{
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
          <div className="flex justify-center gap-2 mt-6">
            {phrases.map((_, index) => (
              <div
                key={index}
                className="transition-all duration-300"
                style={{
                  width: index === currentIndex ? '2rem' : '0.75rem',
                  height: '0.75rem',
                  backgroundColor: index === currentIndex ? '#F2C12E' : 'rgba(255, 255, 255, 0.4)',
                  border: '2px solid #000',
                  borderRadius: '0.5rem',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
