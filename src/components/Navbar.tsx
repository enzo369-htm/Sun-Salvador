import { memo, KeyboardEvent } from 'react';

function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Enfocar el elemento para accesibilidad
      element.setAttribute('tabIndex', '-1');
      element.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50" 
      role="navigation"
      aria-label="Navegación principal"
      style={{ 
        background: 'rgba(0, 19, 255, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: '4px solid #F2C12E',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo/Título */}
          <button
            onClick={() => scrollToSection('hero')}
            onKeyDown={(e) => handleKeyDown(e, 'hero')}
            className="text-lg sm:text-xl md:text-2xl font-black transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-blue-600 cursor-pointer min-h-[44px] min-w-[44px] flex items-center"
            style={{
              color: '#F2C12E',
              textShadow: `
                2px 2px 0px #000,
                4px 4px 0px #000,
                0 0 10px rgba(242, 193, 46, 0.5)
              `,
              letterSpacing: '0.05em'
            }}
            aria-label="Ir al inicio - Sun Salvador"
          >
            SUN SALVADOR
          </button>

          {/* Menú de navegación */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-5" role="menubar">
            <button
              onClick={() => scrollToSection('about')}
              onKeyDown={(e) => handleKeyDown(e, 'about')}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-black text-white transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-blue-600 cursor-pointer border-2 border-transparent hover:border-yellow-300 min-h-[44px]"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
              role="menuitem"
              aria-label="Ir a sección Sobre el Festival"
            >
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection('artistas')}
              onKeyDown={(e) => handleKeyDown(e, 'artistas')}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-black text-white transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-blue-600 cursor-pointer border-2 border-transparent hover:border-yellow-300 min-h-[44px]"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
              }}
              role="menuitem"
              aria-label="Ir a sección Artistas"
            >
              ARTISTAS
            </button>
            <button
              onClick={() => scrollToSection('tickets')}
              onKeyDown={(e) => handleKeyDown(e, 'tickets')}
              className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-black transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-yellow-300 cursor-pointer border-2 border-yellow-300 min-h-[44px]"
              style={{
                backgroundColor: '#F2C12E',
                color: '#000',
                textShadow: 'none',
                boxShadow: '2px 2px 0px #000'
              }}
              role="menuitem"
              aria-label="Ir a sección Entradas - Comprar entradas"
            >
              ENTRADAS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);

