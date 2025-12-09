function FinalCTA() {
  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-block px-8 py-4" style={{
          backgroundColor: 'rgba(242, 46, 210, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(242, 46, 210, 0.2)
          `,
          backdropFilter: 'blur(10px)'
        }}>
          <p className="text-2xl md:text-3xl font-black tracking-wide leading-tight text-white" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'
          }}>
            SUMATE AL NACIMIENTO
          </p>
        </div>

        <div className="inline-block px-8 py-4 max-w-2xl" style={{
          backgroundColor: 'rgba(242, 46, 210, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(242, 46, 210, 0.2)
          `,
          backdropFilter: 'blur(10px)'
        }}>
          <p className="text-2xl md:text-3xl font-black tracking-wide leading-tight text-white" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))'
          }}>
            SÉ PARTE DE LA HISTORIA<br />El primer festival de rock en Jujuy está por comenzar
          </p>
        </div>

        <div className="inline-block" style={{
          backgroundColor: 'rgba(242, 46, 210, 0.4)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(242, 46, 210, 0.2)
          `,
          backdropFilter: 'blur(10px)',
          padding: '1.5rem 2rem'
        }}>
          <button
            onClick={scrollToTickets}
            className="group relative px-12 py-7 text-white font-black text-3xl md:text-4xl
                       transition-all duration-300 transform hover:scale-110
                       active:scale-95 inline-block"
            style={{ backgroundColor: 'transparent', textShadow: '3px 3px 0px black' }}
          >
            ¡QUIERO MI ENTRADA!
          </button>
        </div>

      </div>
    </section>
  );
}


export default FinalCTA;
