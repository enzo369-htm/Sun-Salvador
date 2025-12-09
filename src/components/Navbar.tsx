function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ 
      background: 'rgba(12, 47, 242, 0.75)',
      backdropFilter: 'blur(10px)',
      borderBottom: '4px solid #F2C12E',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Título */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-black transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{
              color: '#F2C12E',
              textShadow: `
                2px 2px 0px #000,
                4px 4px 0px #000,
                0 0 10px rgba(242, 193, 46, 0.5)
              `,
              letterSpacing: '0.05em'
            }}
          >
            SUN SALVADOR
          </button>

          {/* Menú de navegación */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={() => scrollToSection('about')}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-black text-white transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-transparent hover:border-yellow-300"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
            >
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection('artists')}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-black text-white transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-transparent hover:border-yellow-300"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
            >
              ARTISTAS
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-black transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-yellow-300"
              style={{
                backgroundColor: '#F2C12E',
                color: '#000',
                textShadow: 'none',
                boxShadow: '2px 2px 0px #000'
              }}
            >
              ENTRADAS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

