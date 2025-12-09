
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20 overflow-hidden">
      {/* Video de fondo - optimizado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ minWidth: '100%', minHeight: '100%' }}
      >
        <source src="/video%20sun%20salvador%202.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay oscuro sutil para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Nubes decorativas - reducidas para mejor rendimiento */}
      <div className="absolute top-32 left-4 w-28 md:w-36 opacity-50 animate-float" style={{ animationDelay: '0s', zIndex: 15, willChange: 'transform' }}>
        <img src="/Nube-1.png" alt="Nube" className="w-full h-auto" loading="lazy" />
      </div>
      <div className="absolute top-28 right-8 w-32 md:w-40 opacity-45 animate-float" style={{ animationDelay: '1.5s', zIndex: 15, willChange: 'transform' }}>
        <img src="/Nube-2.png" alt="Nube" className="w-full h-auto" loading="lazy" />
      </div>
      <div className="absolute top-40 right-1/4 w-28 md:w-36 opacity-50 animate-float" style={{ animationDelay: '0.8s', zIndex: 15, willChange: 'transform' }}>
        <img src="/Nube-1.png" alt="Nube" className="w-full h-auto" loading="lazy" />
      </div>
      <div className="absolute top-36 left-1/3 w-24 md:w-32 opacity-40 animate-float" style={{ animationDelay: '2.2s', zIndex: 15, willChange: 'transform' }}>
        <img src="/Nube-3.png" alt="Nube" className="w-full h-auto" loading="lazy" />
      </div>

      <div className="relative z-30 text-center flex flex-col items-center justify-center">
        {/* Contenedor del título con sol */}
        <div className="relative inline-block">
          {/* Imagen del título Sun Salvador */}
          <img 
            src="/sun salvador solo@2x.png"
            alt="Sun Salvador"
            className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl h-auto object-contain relative"
            style={{ filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))' }}
            loading="eager"
            fetchpriority="high"
          />
          {/* Sol amarillo al lado de la N */}
          <img 
            src="/Sol-amarillo@2x.png"
            alt="Sol"
            className="absolute"
            style={{
              width: 'clamp(6rem, 12vw, 10rem)',
              height: 'auto',
              top: 'clamp(20%, 25%, 30%)',
              left: 'clamp(65%, 68%, 72%)',
              transform: 'translateY(-50%)',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              zIndex: 10
            }}
            loading="eager"
          />
        </div>

        {/* Botón "Comprar mi entrada" */}
        <button
          onClick={() => {
            document.getElementById('artistas')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-12 md:mt-16 px-10 py-5 text-white font-black text-2xl md:text-3xl
                     border-4 border-black transition-all duration-300 transform hover:scale-110
                     active:scale-95 inline-block cursor-pointer"
          style={{
            backgroundColor: 'rgba(242, 46, 210, 0.9)',
            textShadow: '3px 3px 0px black',
            boxShadow: '8px 8px 0px rgba(0,0,0,0.6)'
          }}
        >
          ¡COMPRAR MI ENTRADA!
        </button>

        {/* Flecha indicadora hacia abajo */}
        <div 
          className="mt-8 md:mt-12 animate-bounce cursor-pointer"
          onClick={() => {
            document.getElementById('artistas')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ willChange: 'transform' }}
        >
          <svg 
            className="w-12 h-12 md:w-16 md:h-16" 
            fill="none" 
            stroke="#F2C12E" 
            viewBox="0 0 24 24"
            style={{ filter: 'drop-shadow(2px 2px 0px black)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>


      {/* Gradiente de transición al final - se difumina hacia la siguiente sección */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none z-25"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(12, 47, 242, 0.15) 20%, rgba(12, 47, 242, 0.3) 40%, rgba(12, 47, 242, 0.5) 60%, rgba(12, 47, 242, 0.7) 80%, rgba(12, 47, 242, 0.85) 95%, rgba(12, 47, 242, 1) 100%)'
        }}
      ></div>
    </section>
  );
}


export default Hero;
