import { Music, ExternalLink, X } from 'lucide-react';
import { useState, useRef } from 'react';

// Función helper para codificar correctamente las rutas de imágenes
const getImageUrl = (path: string): string => {
  const encodedPath = encodeURI(path);
  return `${encodedPath}?v=3`;
};

function Artists() {
  const [expandedArtist, setExpandedArtist] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (artistName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setExpandedArtist(artistName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setExpandedArtist(null);
    }, 200); // Pequeño delay para permitir mover el mouse al modal
  };

  const handleModalMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const artists = [
    { 
      name: 'HOLLYWOOD BUNGALOWS',
      image: '/nuevaholly.png',
      info: 'Hollywood Bungalows es un Trío de Rock Alternativo creado en Jujuy, Argentina. Con su primer disco y su estética particular volcada en sus vivos y videoclips, llegaron a ser destacados como interés cultural en su provincia, así como también, a conquistar el reconocimiento de expertos, de sus pares y del público (ganadores de La Bienal 2021/2022, USINA TV a los mejores videoclips en pandemia, seleccionados en EL NOA TIENE QUE ANDAR 2021 y Experiencia Emergente 2022). Con sus primeras giras nacionales ya lograron pisar escenarios importantes en las principales ciudades de Argentina, como: Primavera Sound, Festival Ciudad emergente, La Bienal en CC Recoleta, Carnaval de los Tekis, entre otros; Actualmente se encuentran grabando y creando su segundo material discográfico.',
      spotify: 'https://open.spotify.com/intl-es/artist/4R8wRxSAhFbsZzHTScrFLv?si=ug7vk3-URMK8nct5llGkyw'
    },
    { 
      name: 'BENITO CERATI',
      image: '/nuevabenito.png',
      info: 'BENITO CERATI nació el 26 de noviembre de 1993 en Santiago de Chile. Creció en un ambiente rodeado de instrumentos y música, características que lo llevaron a construir su identidad artística casi desde su nacimiento. A los 18 años formó Zero Kill, grupo con el que editó 4 álbumes, los dos primeros producidos por Tweety González: "Trip Tour", "Alien Head", "Unisex" y "Lapsus". Con la banda recorrió escenarios de Argentina y Latinoamérica, presentándose en festivales de renombre como Ruido Fest, Personal Fest, Lollapalooza y Vive Latino. En 2022 inició su carrera solista con su disco debut "SHASEI", ganador del Premio Gardel 2023 a Mejor álbum de Pop Alternativo.',
      spotify: 'https://open.spotify.com/intl-es/artist/13QnAhCICgwMtr6HPWoRbH?si=aiZdJYbIR2meH4WacSXO9w'
    },
    { 
      name: 'PEQUEÑO TIRANO',
      image: '/nuevapequeno.png',
      info: 'Pequeño Tirano es una banda jujeño-bonaerense nacida en el 2022, en la Ciudad de Buenos Aires, conformada por Luciano Ferreira (saxofón), Benjamin Yécora (guitarra eléctrica), Matías Paiva (batería), Tomas Longombardo (bajo eléctrico) y Matías Fernández (teclado/piano). La banda propone una experiencia con potencia e identidad, fusionando jazz, funk y rock.',
      spotify: 'https://open.spotify.com/intl-es/artist/6s9Yr18BfnbAUSSW1apWGC?si=fTlUbi5NTtGCktZyeCCiPw'
    },
  ];

  return (
    <section id="artists" className="relative py-16 px-4 overflow-visible">
      {/* Montañas pequeñas de fondo */}
      <div className="absolute bottom-0 right-0 w-1/2 opacity-20 pointer-events-none">
        <svg viewBox="0 0 600 200" className="w-full h-auto">
          <path d="M0,200 Q100,150 200,100 T400,80 L500,140 Q550,180 600,200 Z" fill="#0013FF" stroke="#000" strokeWidth="3" />
          <path d="M320,130 Q360,90 400,80 Q440,100 470,120" fill="#FFF" stroke="#000" strokeWidth="2" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 100 }}>
        <div className="bg-black inline-block w-full text-center mb-10 py-3">
          <h2 className="text-5xl md:text-6xl font-black tracking-wider" style={{ 
            color: '#F2C12E',
            textShadow: `
              3px 3px 0px #FBBF24,
              6px 6px 0px #F59E0B,
              9px 9px 0px #D97706,
              12px 12px 0px #000,
              15px 15px 20px rgba(0,0,0,0.5)
            `,
            WebkitTextStroke: '2px #B45309',
            letterSpacing: '0.1em'
          }}>
            ARTISTAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative" style={{ zIndex: 100 }}>
          {artists.map((artist, index) => (
            <div
              key={artist.name}
              className="relative"
            >
              <div
                className="p-6 transition-all duration-300 cursor-pointer relative z-10 hover:scale-105"
                style={{ backgroundColor: '#0013FF' }}
                onMouseEnter={() => handleMouseEnter(artist.name)}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full aspect-square mb-4
                                flex items-center justify-center overflow-hidden relative"
                     style={{ backgroundColor: '#FF1CDA' }}>
                  {artist.image ? (
                    <img 
                      src={getImageUrl(artist.image)} 
                      alt={artist.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <Music className="w-12 h-12 text-white" strokeWidth={3} />
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-center tracking-tight text-black">
                  {artist.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal emergente */}
        {expandedArtist && (
          <div 
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pointer-events-none"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          >
            <div
              className="relative border-4 border-black max-w-2xl w-full max-h-[80vh] overflow-y-auto
                          shadow-[10px_10px_0px_black] animate-fadeIn pointer-events-auto"
              style={{
                backgroundImage: 'url("/fondo rosa.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
              onMouseEnter={handleModalMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Botón de cierre */}
              <button
                onMouseDown={() => setExpandedArtist(null)}
                className="absolute top-4 right-4 w-10 h-10 border-4 border-black flex items-center justify-center z-20
                           transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{ backgroundColor: '#FF1CDA' }}
              >
                <X className="w-6 h-6 text-white" strokeWidth={3} />
              </button>

              {/* Contenido del modal */}
              <div className="p-8 md:p-12">
                {(() => {
                  const artist = artists.find(a => a.name === expandedArtist);
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
                            onError={(e) => {
                              const triedUrl = getImageUrl(artist.image);
                              console.error('Error loading image in modal:', {
                                original: artist.image,
                                encoded: triedUrl,
                                currentSrc: e.currentTarget.src,
                                artist: artist.name
                              });
                            }}
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
      </div>
    </section>
  );
}


export default Artists;
