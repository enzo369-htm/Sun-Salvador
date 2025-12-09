import Hero from './components/Hero';
import FlyerSection from './components/FlyerSection';
import About from './components/About';
import Tickets from './components/Tickets';
import WhySunSalvador from './components/WhySunSalvador';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{
      backgroundImage: 'url("/Sunfondo.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>

      <div className="relative z-10">
        <Hero />
        <FlyerSection />
        <About />
        <Tickets />
        <WhySunSalvador />
        <FinalCTA />
      </div>

      <footer className="relative z-10 bg-black border-t-2 border-yellow-300 py-6 text-center">
        <p className="font-black text-white text-base tracking-wide">© 2025 SUN SALVADOR FESTIVAL • JUJUY, ARGENTINA</p>
      </footer>
    </div>
  );
}

export default App;
