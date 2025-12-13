import { lazy, Suspense, memo, useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loading de componentes para mejorar performance inicial
const Hero = lazy(() => import('./components/Hero'));
const FlyerSection = lazy(() => import('./components/FlyerSection'));
const About = lazy(() => import('./components/About'));
const Tickets = lazy(() => import('./components/Tickets'));
const WhySunSalvador = lazy(() => import('./components/WhySunSalvador'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

// Skeleton loader para componentes en carga
const SectionSkeleton = memo(() => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
));

SectionSkeleton.displayName = 'SectionSkeleton';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen overflow-hidden bg-fixed-mobile" style={{
        backgroundImage: 'url("/fondo rosa.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }}>
        <div className="relative z-10">
          {/* Skip link para accesibilidad */}
          <a 
            href="#hero" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-yellow-300 focus:text-black focus:font-black focus:border-2 focus:border-black"
            style={{ 
              position: 'absolute',
              left: '-9999px',
              zIndex: 100
            }}
            onFocus={(e) => {
              e.currentTarget.style.left = '1rem';
              e.currentTarget.style.top = '1rem';
            }}
            onBlur={(e) => {
              e.currentTarget.style.left = '-9999px';
            }}
          >
            Saltar al contenido principal
          </a>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <Hero />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <FlyerSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <About />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <Tickets />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <WhySunSalvador />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary>
            <Suspense fallback={<SectionSkeleton />}>
              <FinalCTA />
            </Suspense>
          </ErrorBoundary>
        </div>

        <footer className="relative z-10 bg-black border-t-2 border-yellow-300 py-6 text-center">
          <p className="font-black text-white text-base tracking-wide" style={{
            fontFamily: '"Anton", "Impact", "Arial Black", sans-serif',
            fontWeight: 400,
            letterSpacing: '0.05em'
          }}>
            © 2025 SUN SALVADOR FESTIVAL • JUJUY, ARGENTINA
          </p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default memo(App);
