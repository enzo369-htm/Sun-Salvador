import { Music, ExternalLink, X, Headphones } from 'lucide-react';
import { useState, useEffect, memo } from 'react';

// Función helper para codificar correctamente las rutas de imágenes
const getImageUrl = (path: string): string => {
  // Para archivos sin espacios, devolver directamente
  if (!path.includes(' ')) {
    return path;
  }
  // Para archivos con espacios, codificar
  return encodeURI(path);
};


// Datos de artistas (reutilizados de Artists.tsx)
const artists = [
  { 
    name: 'HOLLYWOOD BUNGALOWS',
    image: '/nuevaholly.png',
    info: 'Hollywood Bungalows es un Trío de Rock Alternativo creado en Jujuy, Argentina. Con su primer disco y su estética particular volcada en sus vivos y videoclips, llegaron a ser destacados como interés cultural en su provincia, así como también, a conquistar el reconocimiento de expertos, de sus pares y del público (ganadores de La Bienal 2021/2022, USINA TV a los mejores videoclips en pandemia, seleccionados en EL NOA TIENE QUE ANDAR 2021 y Experiencia Emergente 2022). Con sus primeras giras nacionales ya lograron pisar escenarios importantes en las principales ciudades de Argentina, como: Primavera Sound, Festival Ciudad emergente, La Bienal en CC Recoleta, Carnaval de los Tekis, entre otros; Actualmente se encuentran grabando y creando su segundo material discográfico.',
    spotify: 'https://open.spotify.com/intl-es/artist/4R8wRxSAhFbsZzHTScrFLv?si=ug7vk3-URMK8nct5llGkyw',
    color: '#FFFFFF'
  },
    { 
      name: 'LICHI',
      image: '/lichi2.png',
      info: 'Después de pasar por el festival Lollapalooza y presentar su disco en Niceto, Lichi llega junto a su banda por primera vez a Jujuy para presentar ¡COCOLICHE!, una aventura de rock psicodélico que se sirve de referencias clásicas y no tanto para trazar su propio camino en el cancionero de la música nacional. El músico, comunicador y activista LGBTIQ abrirá su 2026 presentándose en la primera edición del festival Sun Salvador.',
      spotify: 'https://open.spotify.com/intl-es/artist/1VJpLdCb3HI6WfG3uUA9ht?si=p2fcsiukRsSI_YscNjnWHA',
      color: '#F2C12E'
    },
  { 
    name: 'PEQUEÑO TIRANO',
    image: '/nuevapequeno.png',
    info: 'Pequeño Tirano es una banda jujeño-bonaerense nacida en el 2022, en la Ciudad de Buenos Aires, conformada por Luciano Ferreira (saxofón), Benjamin Yécora (guitarra eléctrica), Matías Paiva (batería), Tomas Longombardo (bajo eléctrico) y Matías Fernández (teclado/piano). La banda propone una experiencia con potencia e identidad, fusionando jazz, funk y rock.',
    spotify: 'https://open.spotify.com/intl-es/artist/6s9Yr18BfnbAUSSW1apWGC?si=fTlUbi5NTtGCktZyeCCiPw',
    color: '#FF1CDA'
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
        .group:hover {
          filter: brightness(1.1);
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
          boxShadow: isMobile ? `
            4px 4px 0px rgba(0,0,0,0.9),
            8px 8px 0px rgba(0,0,0,0.5),
            inset 0 0 20px rgba(0, 19, 255, 0.2)
          ` : `
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
          gap: 0,
          alignItems: 'stretch',
          width: 'auto',
          maxWidth: '95%',
          transform: isMobile ? 'scale(1)' : 'scale(1.3)',
          zIndex: 10
        }}>
              {/* Banner superior dentro del recuadro - ocupa todo el ancho */}
              <div className="w-full" style={{ willChange: 'transform', marginBottom: 0, marginTop: 0 }}>
                <p className={`text-white font-bold ${isMobile ? 'py-3' : 'py-3'} border-3 border-black text-center`} style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontSize: isMobile ? 'clamp(1.1rem, 4.5vw, 1.5rem)' : 'clamp(1rem, 2vw, 1.5rem)',
                  backgroundColor: '#FF1CDA',
                  textShadow: '3px 3px 0px #000, 5px 5px 0px rgba(0,0,0,0.5)',
                  WebkitTextStroke: '1.5px #000',
                  letterSpacing: '0.05em',
                  boxShadow: isMobile ? `
                    3px 3px 0px rgba(0,0,0,0.9),
                    6px 6px 0px rgba(0,0,0,0.5),
                    inset 0 0 10px rgba(255, 28, 218, 0.2)
                  ` : `
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
                  SABADO 17 DE ENERO - DIONISIO (AV BOLIVIA 1593)
                </p>
              </div>
              
              {/* Contenedor interno para los nombres con padding */}
              <div style={{ padding: isMobile ? '1rem 1rem 1rem 1rem' : '0.5rem 2rem 0.5rem 2rem', marginTop: isMobile ? '1.5rem' : '1rem', marginBottom: isMobile ? '1rem' : '0.5rem', display: 'flex', flexDirection: 'column', gap: isMobile ? '1rem' : '0.5rem', alignItems: 'center', width: '100%', flex: 1 }}>
              {/* HOLLYWOOD BUNGALOWS - primero */}
              <div 
                onClick={() => handleArtistClick('HOLLYWOOD BUNGALOWS')}
                className="cursor-pointer transition-all duration-300 hover:scale-105 group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '0.75rem',
                  width: '100%',
                  position: 'relative'
                }}
                title="Click para más información"
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
                    transform: 'rotate(0deg)',
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
                    position: 'relative',
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  HOLLYWOOD BUNGALOWS
                </div>
              </div>

              {/* LICHI - segundo */}
              <div 
                onClick={() => handleArtistClick('LICHI')}
                className="cursor-pointer transition-all duration-300 hover:scale-105 group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '0.75rem',
                  width: '100%',
                  position: 'relative'
                }}
                title="Click para más información"
              >
                <div
                  className="text-center"
                  style={{
                    color: '#FFFFFF',
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: isMobile ? 'clamp(1.9rem, 6.2vw, 3.2rem)' : 'clamp(1.8rem, 4.2vw, 3.5rem)',
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
                    transform: 'rotate(0deg)',
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
                    position: 'relative'
                  }}
                >
                  <span style={{ fontSize: '0.7em', display: 'inline-block', transform: 'rotate(0deg)' }}>~</span>
                  {' '}LICHI{' '}
                  <span style={{ fontSize: '0.7em', display: 'inline-block', transform: 'rotate(0deg)' }}>~</span>
                </div>
              </div>

              {/* PEQUEÑO TIRANO - más pequeño */}
              <div 
                onClick={() => handleArtistClick('PEQUEÑO TIRANO')}
                className="cursor-pointer transition-all duration-300 hover:scale-105 group"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: isMobile ? '1rem' : '0.75rem',
                  width: '100%',
                  position: 'relative'
                }}
                title="Click para más información"
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
                    transform: 'rotate(0deg)',
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
                <div className="text-center flex items-center justify-center gap-2 flex-wrap" style={{ transform: 'rotate(0deg)', flex: 1 }}>
                  <span style={{
                    color: '#FF1CDA',
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: isMobile ? 'clamp(1.2rem, 4vw, 2rem)' : 'clamp(1.2rem, 2.5vw, 2rem)',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    textShadow: `
                      4px 4px 0px #000,
                      6px 6px 0px rgba(0,0,0,0.8),
                      0 0 15px rgba(255,28,218,0.6)
                    `,
                    WebkitTextStroke: 'clamp(3px, 0.5vw, 4px) #000',
                    WebkitTextFillColor: '#FF1CDA',
                    paintOrder: 'stroke fill',
                    fontStyle: 'normal',
                    transform: 'skew(0deg) rotate(0deg)',
                    display: 'inline-block',
                    marginRight: '1rem',
                    textTransform: 'uppercase',
                    filter: 'drop-shadow(0 0 8px rgba(255,28,218,0.4))'
                  }}>
                    DJS
                  </span>
                  <div 
                    onClick={() => handleDJClick('MAR VACCARELLA')}
                    className="inline-block cursor-pointer transition-all duration-300 hover:scale-105 group"
                    style={{ position: 'relative' }}
                    title="Click para más información"
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
                    className="inline-block cursor-pointer transition-all duration-300 hover:scale-105 group"
                    style={{ position: 'relative' }}
                    title="Click para más información"
                  >
                    <div
                      style={{
                        color: '#F2C12E',
                        fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                        fontSize: isMobile ? 'clamp(1.5rem, 5vw, 2.5rem)' : 'clamp(1.3rem, 3vw, 2.4rem)',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        textShadow: `
                          8px 12px 0px #000,
                          10px 14px 0px rgba(0,0,0,0.8)
                        `,
                        WebkitTextStroke: 'clamp(3px, 0.5vw, 5px) #000',
                        WebkitTextFillColor: '#F2C12E',
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
              
              {/* Banner inferior dentro del recuadro - botón clickeable a Spotify */}
              <div className="w-full" style={{ willChange: 'transform', marginTop: 0, marginBottom: 0 }}>
                <a
                  href="https://open.spotify.com/playlist/1SGYrBPx92nL6cL6yUK5a4?si=Cu8LjLIUREWXDch2Xe2SgA&pi=AZs-lYHvQnO6S"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    textDecoration: 'none',
                    display: 'block',
                    width: '100%'
                  }}
                >
                  <p className={`text-white font-bold ${isMobile ? 'py-3' : 'py-3'} border-3 border-black text-center`} style={{
                    fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                    fontSize: isMobile ? 'clamp(1.1rem, 4.5vw, 1.5rem)' : 'clamp(1rem, 2vw, 1.5rem)',
                    backgroundColor: '#FF1CDA',
                    textShadow: '3px 3px 0px #000, 5px 5px 0px rgba(0,0,0,0.5)',
                    WebkitTextStroke: '1.5px #000',
                    letterSpacing: '0.05em',
                    boxShadow: isMobile ? `
                      3px 0px 0px rgba(0,0,0,0.9),
                      6px 0px 0px rgba(0,0,0,0.5),
                      inset 0 0 10px rgba(255, 28, 218, 0.2)
                    ` : `
                      12px 0px 0px rgba(0,0,0,0.9),
                      24px 0px 0px rgba(0,0,0,0.5),
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
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <Headphones className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} style={{ flexShrink: 0 }} />
                      Escuchá a los artistas del Sun salvador
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} style={{ flexShrink: 0 }} />
                    </span>
                  </p>
                </a>
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
            style={{
              backgroundImage: 'url("/fondo rosa.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
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

                    {/* Información */}
                    <div className="border-4 border-black p-6 mb-6" style={{ backgroundColor: '#0013FF' }}>
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
