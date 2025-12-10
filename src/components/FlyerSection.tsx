import { Music, ExternalLink, X } from 'lucide-react';
import { useState, useEffect, memo } from 'react';

// Función helper para codificar correctamente las rutas de imágenes
const getImageUrl = (path: string): string => {
  if (path.includes(' ')) {
    return encodeURI(path);
  }
  return path;
};


// Datos de artistas (reutilizados de Artists.tsx)
const artists = [
  { 
    name: 'HOLLYWOOD BUNGALOWS',
    image: '/Captura de Pantalla 2025-12-05 a la(s) 19.33.19.png',
    info: 'Hollywood Bungalows es un Trio de Rock Alternativo creado en Jujuy, Argentina. Con su primer disco y su estética particular volcada en sus vivos y videoclips, llegaron a ser destacados como interés cultural en su provincia, así como también, a conquistar el reconocimiento de expertos, de sus pares y del público (ganadores de La Bienal 2021/2022, USINA TV a los mejores videoclips en pandemia, seleccionados en EL NOA TIENE QUE ANDAR 2021 y Experiencia Emergente 2022). Con sus primeras giras nacionales ya lograron pisar escenarios importantes en las principales ciudades de Argentina, como: Primavera Sound, Festival Ciudad emergente, La Bienal en CC Recoleta, Carnaval de los Tekis, entre otros; Actualmente se encuentran grabando y creando su segundo material discográfico.',
    spotify: 'https://open.spotify.com/intl-es/artist/4R8wRxSAhFbsZzHTScrFLv?si=ug7vk3-URMK8nct5llGkyw'
  },
  { 
    name: 'BENITO CERATI',
    image: '/BENITO CERATI.png',
    info: 'BENITO CERATI nació el 26 de noviembre de 1993 en Santiago de Chile. Creció en un ambiente rodeado de instrumentos y música, características que lo llevaron a construir su identidad artística casi desde su nacimiento. A los 18 años formó Zero Kill, grupo con el que editó 4 álbumes, los dos primeros producidos por Tweety González: "Trip Tour", "Alien Head", "Unisex" y "Lapsus". Con la banda recorrió escenarios de Argentina y Latinoamérica, presentándose en festivales de renombre como Ruido Fest, Personal Fest, Lollapalooza y Vive Latino. En 2022 inició su carrera solista con su disco debut "SHASEI", ganador del Premio Gardel 2023 a Mejor álbum de Pop Alternativo.',
    spotify: 'https://open.spotify.com/intl-es/artist/13QnAhCICgwMtr6HPWoRbH?si=aiZdJYbIR2meH4WacSXO9w'
  },
  { 
    name: 'PEQUEÑO TIRANO',
    image: '/pequeno tirano.png',
    info: 'Pequeño Tirano es una banda jujueño-bonaerense nacida en el 2022, en la Ciudad de Buenos Aires, conformada por Luciano Ferreira (saxofón), Benjamin Yécora (guitarra eléctrica), Matías Paiva (batería), Tomas Longombardo (bajo eléctrico) y Matías Fernández (teclado/piano). La banda propone una experiencia con potencia e identidad, fusionando jazz, funk y rock.',
    spotify: 'https://open.spotify.com/intl-es/artist/6s9Yr18BfnbAUSSW1apWGC?si=fTlUbi5NTtGCktZyeCCiPw'
  },
];

// Datos de DJs (reutilizados de DJs.tsx)
const djs = [
  { 
    name: 'SAPAI',
    image: '/SAPAI .png'
  },
  { 
    name: 'MAR VACCARELLA',
    image: '/Mar vaccarela.png'
  },
];

function FlyerSection() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [selectedDJ, setSelectedDJ] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 375); // iPhone SE y similares
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleArtistClick = (artistName: string) => {
    setSelectedArtist(artistName);
    setSelectedDJ(null);
  };

  const handleDJClick = (djName: string) => {
    setSelectedDJ(djName);
    setSelectedArtist(null);
  };

  const closeModal = () => {
    setSelectedArtist(null);
    setSelectedDJ(null);
  };

  return (
    <section id="artistas" className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden">
      <style>{`
        @keyframes noise {
          0%, 100% { background-position: 0 0; }
          10% { background-position: -5% -10%; }
          20% { background-position: -15% 5%; }
          30% { background-position: 7% -25%; }
          40% { background-position: 20% 25%; }
          50% { background-position: -25% 10%; }
          60% { background-position: 15% 5%; }
          70% { background-position: 0% 15%; }
          80% { background-position: 3% 35%; }
          90% { background-position: -10% 10%; }
        }
        .texture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.08;
          background-image: 
            repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px);
          background-size: 2px 2px;
          pointer-events: none;
          z-index: 1;
          animation: noise 0.2s infinite;
        }
      `}</style>
      {/* Gradiente de transición al inicio - continúa desde el Hero */}
      <div 
        className="absolute top-0 left-0 right-0 h-96 pointer-events-none z-5"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 19, 255, 1) 0%, rgba(0, 19, 255, 0.85) 5%, rgba(0, 19, 255, 0.7) 20%, rgba(0, 19, 255, 0.5) 40%, rgba(0, 19, 255, 0.3) 60%, rgba(0, 19, 255, 0.15) 80%, transparent 100%)'
        }}
      ></div>

      {/* Overlay de fondo sutil para continuidad con el Hero */}
      <div 
        className="absolute inset-0 pointer-events-none z-3"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 19, 255, 0.2) 0%, rgba(0, 19, 255, 0.1) 25%, transparent 60%, transparent 85%, rgba(0, 19, 255, 0.05) 100%)'
        }}
      ></div>

      {/* Contenedor principal - nombres flotantes sin fondo */}
      <div className="relative w-full max-w-6xl z-10 py-4 sm:py-6 md:py-8 lg:py-12 flex flex-col items-center">
        {/* Nombres flotantes - área principal con un solo recuadro */}
        <div className="relative inline-block" style={{
          backgroundColor: 'rgba(0, 19, 255, 0.4)',
          border: isMobile ? '6px solid #000' : '10px solid #000',
          boxShadow: `
            20px 20px 0px rgba(0,0,0,0.9),
            40px 40px 0px rgba(0,0,0,0.5),
            inset 0 0 35px rgba(0, 19, 255, 0.2)
          `,
          backdropFilter: 'blur(10px)',
          padding: '0',
          minHeight: isMobile ? '400px' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: isMobile ? '1.5rem' : '1rem',
          alignItems: 'stretch',
          width: 'auto',
          maxWidth: '95%',
          transform: isMobile ? 'scale(1)' : 'scale(1.3)',
          zIndex: 10
        }}>
              {/* Banner superior dentro del recuadro - ocupa todo el ancho */}
              <div className="w-full" style={{ willChange: 'transform', marginBottom: isMobile ? '1rem' : '0.5rem', marginTop: 0 }}>
                <p className={`text-white font-bold ${isMobile ? 'py-3' : 'py-3'} border-3 border-black text-center`} style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontSize: isMobile ? 'clamp(1.1rem, 4.5vw, 1.5rem)' : 'clamp(1rem, 2vw, 1.5rem)',
                  backgroundColor: '#FF1CDA',
                  textShadow: '3px 3px 0px #000, 5px 5px 0px rgba(0,0,0,0.5)',
                  WebkitTextStroke: '1.5px #000',
                  letterSpacing: '0.05em',
                  boxShadow: `
                    12px 12px 0px rgba(0,0,0,0.9),
                    24px 24px 0px rgba(0,0,0,0.5),
                    inset 0 0 15px rgba(255, 28, 218, 0.2)
                  `,
                  transform: 'none',
                  borderWidth: '3px',
                  fontWeight: 400,
                  position: 'relative',
                  display: 'block',
                  width: '100%',
                  boxSizing: 'border-box',
                  margin: 0,
                  paddingLeft: isMobile ? '0.75rem' : '1rem',
                  paddingRight: isMobile ? '0.75rem' : '1rem'
                }}>
                  SABADO 17 DE ENERO - AV BOLIVIA 1501
                </p>
              </div>
              
              {/* Contenedor interno para los nombres con padding */}
              <div style={{ padding: isMobile ? '1rem 1rem 1.5rem 1rem' : '0.5rem 2rem 1rem 2rem', display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '0.5rem', alignItems: 'center', width: '100%' }}>
              {/* BENITO CERATI - MÁS GRANDE Y ANCHO */}
              <div 
                onClick={() => handleArtistClick('BENITO CERATI')}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '0.75rem',
                  width: '100%'
                }}
              >
                <div
                  className="text-center"
                  style={{
                    color: '#FFFFFF',
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: isMobile ? 'clamp(2.2rem, 7vw, 3.5rem)' : 'clamp(2rem, 4.5vw, 3.8rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    textShadow: `
                      8px 12px 0px #000,
                      10px 14px 0px rgba(0,0,0,0.8)
                    `,
                    WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
                    WebkitTextFillColor: '#FFFFFF',
                    paintOrder: 'stroke fill',
                    lineHeight: '1.1',
                    textTransform: 'uppercase',
                    transform: 'rotate(-0.5deg)',
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
                    position: 'relative'
                  }}
                >
                  <span style={{ fontSize: '0.7em', display: 'inline-block', transform: 'rotate(-5deg)' }}>~</span>
                  {' '}BENITO CERATI{' '}
                  <span style={{ fontSize: '0.7em', display: 'inline-block', transform: 'rotate(5deg)' }}>~</span>
                </div>
              </div>

              {/* HOLLYWOOD BUNGALOWS - tamaño medio */}
              <div 
                onClick={() => handleArtistClick('HOLLYWOOD BUNGALOWS')}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '0.75rem',
                  width: '100%'
                }}
              >
                <div
                  className="text-center"
                  style={{
                    color: '#F2C12E',
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: isMobile ? 'clamp(1.8rem, 6.5vw, 3rem)' : 'clamp(1.8rem, 4vw, 3rem)',
                    fontWeight: 400,
                    letterSpacing: '-0.02em',
                    textShadow: `
                      8px 12px 0px #000,
                      10px 14px 0px rgba(0,0,0,0.8)
                    `,
                    WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
                    WebkitTextFillColor: '#F2C12E',
                    paintOrder: 'stroke fill',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    transform: 'rotate(1deg)',
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
                    position: 'relative'
                  }}
                >
                  HOLLYWOOD BUNGALOWS
                </div>
              </div>

              {/* PEQUEÑO TIRANO - más pequeño */}
              <div 
                onClick={() => handleArtistClick('PEQUEÑO TIRANO')}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '0.75rem',
                  width: '100%'
                }}
              >
                <div
                  className="text-center"
                  style={{
                    color: '#FF1CDA',
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: isMobile ? 'clamp(1.6rem, 5.5vw, 2.4rem)' : 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: `
                      8px 12px 0px #000,
                      10px 14px 0px rgba(0,0,0,0.8)
                    `,
                    WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
                    WebkitTextFillColor: '#FF1CDA',
                    paintOrder: 'stroke fill',
                    lineHeight: '1.1',
                    textTransform: 'uppercase',
                    transform: 'rotate(-1deg)',
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
                    position: 'relative'
                  }}
                >
                  * PEQUEÑO TIRANO *
                </div>
              </div>

              {/* DJS MAR VACCARELLA - SAPAI - flotantes y locos */}
              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  flexWrap: 'wrap',
                  width: '100%'
              }}>
                <div className="text-center flex items-center justify-center gap-2 flex-wrap" style={{ transform: 'rotate(1deg)', flex: 1 }}>
                  <span style={{
                    color: '#FF1CDA',
                    fontFamily: '"Pacifico", "Bangers", "Luckiest Guy", cursive',
                    fontSize: isMobile ? 'clamp(0.9rem, 3vw, 1.5rem)' : 'clamp(1.2rem, 2.5vw, 2rem)',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: '3px 3px 0px #000, 0 0 15px rgba(242,46,210,0.6)',
                    WebkitTextStroke: '2px #000',
                    fontStyle: 'normal',
                    transform: 'skew(-12deg) rotate(-5deg)',
                    display: 'inline-block',
                    marginRight: '1rem',
                    textTransform: 'none',
                    filter: 'drop-shadow(0 0 8px rgba(242,46,210,0.4))'
                  }}>
                    DJS
                  </span>
                  <div 
                    onClick={() => handleDJClick('MAR VACCARELLA')}
                    className="inline-block cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{ position: 'relative' }}
                  >
                    <div
                      style={{
                        color: '#FFFFFF',
                        fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                        fontSize: isMobile ? 'clamp(1.5rem, 5vw, 2.5rem)' : 'clamp(1.3rem, 3vw, 2.4rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        textShadow: '4px 4px 0px #000',
                        WebkitTextStroke: 'clamp(2px, 0.4vw, 4px) #000',
                        WebkitTextFillColor: '#FFFFFF',
                        paintOrder: 'stroke fill',
                        lineHeight: '1.1',
                        textTransform: 'uppercase'
                      }}
                    >
                      MAR VACCARELLA
                    </div>
                  </div>
                  <span style={{ 
                    color: '#FFFFFF', 
                    fontSize: isMobile ? 'clamp(1.5rem, 5vw, 2.5rem)' : 'clamp(1.3rem, 3vw, 2.4rem)', 
                    margin: '0 0.5rem',
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontWeight: 400,
                    WebkitTextStroke: 'clamp(5px, 0.8vw, 8px) #000',
                    textShadow: '4px 4px 0px #000'
                  }}> - </span>
                  <div 
                    onClick={() => handleDJClick('SAPAI')}
                    className="inline-block cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{ position: 'relative' }}
                  >
                    <div
                      style={{
                        color: '#FFFFFF',
                        fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                        fontSize: isMobile ? 'clamp(1.5rem, 5vw, 2.5rem)' : 'clamp(1.3rem, 3vw, 2.4rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        textShadow: '4px 4px 0px #000',
                        WebkitTextStroke: 'clamp(2px, 0.4vw, 4px) #000',
                        WebkitTextFillColor: '#FFFFFF',
                        paintOrder: 'stroke fill',
                        lineHeight: '1.1',
                        textTransform: 'uppercase'
                      }}
                    >
                      SAPAI
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
      </div>

      {/* Modal para Artista */}
      {selectedArtist && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={closeModal}
        >
          <div
            className="relative border-4 border-black max-w-2xl w-full max-h-[80vh] overflow-y-auto
                        shadow-[10px_10px_0px_black] animate-fadeIn"
            style={{ backgroundColor: '#0013FF' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 border-4 border-black flex items-center justify-center z-20
                         transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{ backgroundColor: '#FF1CDA' }}
            >
              <X className="w-6 h-6 text-white" strokeWidth={3} />
            </button>

            {/* Contenido del modal */}
            <div className="p-8 md:p-12">
              {(() => {
                const artist = artists.find(a => a.name === selectedArtist);
                if (!artist) return null;
                
                return (
                  <>
                    {/* Imagen del artista */}
                    <div className="w-full aspect-square mb-6 border-4 border-black overflow-hidden"
                         style={{ backgroundColor: '#FF1CDA' }}>
                      {artist.image ? (
                        <img 
                          src={getImageUrl(artist.image)} 
                          alt={artist.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Music className="w-16 h-16 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Nombre */}
                    <h3 className="text-3xl md:text-4xl font-black text-center tracking-tight text-black mb-6">
                      {artist.name}
                    </h3>

                    {/* Información */}
                    <div className="border-4 border-black p-6 mb-6" style={{ backgroundColor: '#FF1CDA' }}>
                      <p className="text-white text-base md:text-lg leading-relaxed font-bold">
                        {artist.info}
                      </p>
                    </div>
                    
                    {/* Botón de Spotify */}
                    <a
                      href={artist.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-4 border-black p-4 text-center transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: '#0BD904' }}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-black font-black text-lg md:text-xl">ESCUCHAR EN SPOTIFY</span>
                        <ExternalLink className="w-6 h-6 text-black" strokeWidth={3} />
                      </div>
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Modal para DJ - solo foto */}
      {selectedDJ && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={closeModal}
        >
          <div
            className="relative border-4 border-black max-w-xl w-full
                        shadow-[10px_10px_0px_black] animate-fadeIn"
            style={{ backgroundColor: '#FF1CDA' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 border-4 border-black flex items-center justify-center z-20
                         transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{ backgroundColor: '#0013FF' }}
            >
              <X className="w-6 h-6 text-white" strokeWidth={3} />
            </button>

            {/* Contenido del modal - solo foto */}
            <div className="p-8">
              {(() => {
                const dj = djs.find(d => d.name === selectedDJ);
                if (!dj) return null;
                
                return (
                  <>
                    {/* Imagen del DJ */}
                    <div className="w-full aspect-square border-4 border-black overflow-hidden"
                         style={{ backgroundColor: '#F2C12E' }}>
                      {dj.image ? (
                        <img 
                          src={getImageUrl(dj.image)} 
                          alt={dj.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Music className="w-16 h-16 text-black" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Nombre */}
                    <h3 className="text-2xl md:text-3xl font-black text-center tracking-tight text-white mt-6">
                      {dj.name}
                    </h3>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(FlyerSection);
