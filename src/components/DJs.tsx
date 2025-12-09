import { Disc3 } from 'lucide-react';

// Función helper para codificar correctamente las rutas de imágenes
const getImageUrl = (path: string): string => {
  // Vite sirve archivos de public directamente, pero necesitamos codificar la ruta completa
  // Usamos encodeURI para codificar espacios y caracteres especiales
  return encodeURI(path);
};

function DJs() {
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

  return (
    <section className="relative py-10 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-block w-full text-center mb-10 py-3" style={{ backgroundColor: '#0C2FF2' }}>
          <h2 className="text-5xl md:text-6xl font-black tracking-wider text-white" style={{
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
            DJs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {djs.map((dj, index) => (
            <div
              key={dj.name}
                className="p-6 transform hover:scale-110 hover:rotate-3 transition-all duration-300"
              style={{ backgroundColor: '#F22ED2' }}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#F2C12E' }}>
                  {dj.image ? (
                    <img 
                      src={getImageUrl(dj.image)} 
                      alt={dj.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Error loading DJ image:', dj.image, 'Tried URL:', getImageUrl(dj.image));
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : (
                    <Disc3 className="w-12 h-12 text-black animate-spin-slow" strokeWidth={2} />
                  )}
                </div>
                <h3 className="text-3xl font-black text-center tracking-tight text-white">
                  {dj.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DJs;
