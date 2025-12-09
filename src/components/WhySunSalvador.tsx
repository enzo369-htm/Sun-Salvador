import { Sparkles, Users, Music2, Heart } from 'lucide-react';

function WhySunSalvador() {
  const reasons = [
    {
      icon: Music2,
      title: 'MÚSICA AL MÁXIMO NIVEL',
      description: 'Sun Salvador es música al máximo nivel técnico, artístico y emocional.',
    },
    {
      icon: Sparkles,
      title: 'DESCUBRÍ NUEVAS BANDAS',
      description: 'Descubrí nuevas bandas, vibrá con artistas, bailá con DJs que expanden el viaje sonoro.',
    },
    {
      icon: Users,
      title: 'ESPACIO SEGURO',
      description: 'Un espacio seguro para experimentar, encontrarse y celebrar la cultura.',
    },
    {
      icon: Heart,
      title: 'JUJUY LO MERECE',
      description: 'Creamos Sun Salvador porque creemos que Jujuy merece un evento a la altura de su talento, su público y su historia. Sun Salvador une a músicos, productores, artistas y público en un mismo fuego creativo: hacer que la música suceda acá.',
    },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="backdrop-blur-md inline-block w-full text-center mb-10 py-3" style={{ 
          backgroundColor: 'rgba(12, 47, 242, 0.6)',
          border: '6px solid #000',
          boxShadow: `
            15px 15px 0px rgba(0,0,0,0.9),
            30px 30px 0px rgba(0,0,0,0.5),
            inset 0 0 25px rgba(12, 47, 242, 0.2)
          `,
          padding: '1.5rem 2rem'
        }}>
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
            ¿POR QUÉ SUN SALVADOR?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="transform hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(12, 47, 242, 0.4)',
                  border: '6px solid #000',
                  boxShadow: `
                    15px 15px 0px rgba(0,0,0,0.9),
                    30px 30px 0px rgba(0,0,0,0.5),
                    inset 0 0 25px rgba(12, 47, 242, 0.2)
                  `,
                  backdropFilter: 'blur(10px)',
                  padding: '1.5rem 2rem'
                }}
              >
                <div className="w-20 h-20
                                flex items-center justify-center mb-6"
                     style={{ backgroundColor: '#F2C12E' }}>
                  <Icon className="w-10 h-10 text-black" strokeWidth={3} />
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-3 tracking-tight text-white">
                  {reason.title}
                </h3>

                <p className="text-lg leading-relaxed font-bold text-white">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default WhySunSalvador;
