import { Calendar, MapPin } from 'lucide-react';

function DatePlace() {
  return (
    <section className="relative py-20 px-4 border-y-8 border-black overflow-hidden">
      {/* Montañas al fondo */}
      <div className="absolute bottom-0 left-0 w-full opacity-25 pointer-events-none">
        <svg viewBox="0 0 1200 180" className="w-full h-auto">
          <path d="M0,180 Q150,120 300,80 T600,60 L700,100 Q800,140 900,180 Z" fill="#0013FF" stroke="#000" strokeWidth="3" />
          <path d="M480,100 Q540,70 600,60 Q660,80 700,100" fill="#FFF" stroke="#000" strokeWidth="2" />
        </svg>
      </div>
      
      {/* Cactus pequeño derecha */}
      <div className="absolute right-10 bottom-20 w-28 md:w-36 opacity-30">
        <MiniCactus />
      </div>
      
      {/* Nubes */}
      <div className="absolute top-20 right-20 w-32 opacity-35 animate-float" style={{ animationDelay: '1s' }}>
        <WhiteCloud />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="border-8 border-black inline-block w-full text-center mb-12 py-4" style={{ backgroundColor: '#0013FF' }}>
          <h2 className="text-6xl md:text-7xl font-black tracking-wider text-white" style={{
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontWeight: 400,
            textShadow: `
              3px 3px 0px #FBBF24,
              6px 6px 0px #F59E0B,
              9px 9px 0px #D97706,
              12px 12px 0px #000,
              15px 15px 20px rgba(0,0,0,0.5)
            `,
            WebkitTextStroke: '2px #B45309',
            letterSpacing: '0.05em'
          }}>
            FECHA Y LUGAR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-8 border-black p-10 transform hover:scale-110 hover:rotate-1 transition-all duration-300
                          shadow-[12px_12px_0px_black] hover:shadow-[16px_16px_0px_black]" style={{ backgroundColor: '#F2C12E' }}>
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 border-4 border-black flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0013FF' }}>
                <Calendar className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-black mb-2 tracking-tight" style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>CUÁNDO</h3>
                <p className="text-black text-2xl md:text-3xl font-black" style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>
                  Sábado 17
                </p>
                <p className="text-black text-2xl font-black mt-1" style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>de enero</p>
                <p className="text-xl font-black mt-2" style={{ 
                  color: '#0013FF',
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>2025</p>
              </div>
            </div>
          </div>

          <div className="border-8 border-black p-10 transform hover:scale-110 hover:-rotate-1 transition-all duration-300
                          shadow-[12px_12px_0px_black] hover:shadow-[16px_16px_0px_black]" style={{ backgroundColor: '#F2C12E' }}>
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 border-4 border-black flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0013FF' }}>
                <MapPin className="w-12 h-12 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-black mb-2 tracking-tight" style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>DÓNDE</h3>
                <p className="text-black text-2xl md:text-3xl font-black" style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>
                  Av. Bolivia
                </p>
                <p className="text-black text-2xl font-black mt-1" style={{
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>1501</p>
                <p className="text-lg font-black mt-2" style={{ 
                  color: '#0013FF',
                  fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.05em'
                }}>San Salvador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniCactus() {
  return (
    <svg viewBox="0 0 90 130" className="w-full h-auto">
      <rect x="35" y="45" width="20" height="85" fill="#0BD904" stroke="#000" strokeWidth="3" rx="10" />
      <rect x="20" y="65" width="15" height="30" fill="#0BD904" stroke="#000" strokeWidth="3" rx="7" />
      <rect x="55" y="70" width="15" height="25" fill="#0BD904" stroke="#000" strokeWidth="3" rx="7" />
      <line x1="37" y1="55" x2="53" y2="55" stroke="#000" strokeWidth="1.5" />
      <line x1="37" y1="70" x2="53" y2="70" stroke="#000" strokeWidth="1.5" />
      <line x1="37" y1="85" x2="53" y2="85" stroke="#000" strokeWidth="1.5" />
      <line x1="37" y1="100" x2="53" y2="100" stroke="#000" strokeWidth="1.5" />
      <line x1="37" y1="115" x2="53" y2="115" stroke="#000" strokeWidth="1.5" />
      <circle cx="45" cy="38" r="7" fill="#FF1CDA" stroke="#000" strokeWidth="2.5" />
      <circle cx="39" cy="44" r="5" fill="#FF1CDA" stroke="#000" strokeWidth="2" />
      <circle cx="51" cy="44" r="5" fill="#FF1CDA" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

function WhiteCloud() {
  return (
    <svg viewBox="0 0 120 60" className="w-full h-auto">
      <ellipse cx="30" cy="35" rx="25" ry="20" fill="#FFF" stroke="#000" strokeWidth="3" />
      <ellipse cx="50" cy="25" rx="28" ry="23" fill="#FFF" stroke="#000" strokeWidth="3" />
      <ellipse cx="75" cy="30" rx="30" ry="25" fill="#FFF" stroke="#000" strokeWidth="3" />
      <ellipse cx="90" cy="38" rx="22" ry="18" fill="#FFF" stroke="#000" strokeWidth="3" />
      <rect x="20" y="30" width="80" height="20" fill="#FFF" />
    </svg>
  );
}

export default DatePlace;
