import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary para capturar errores en componentes hijos
 * Previene que errores rompan toda la aplicación
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error para debugging (en producción, enviar a servicio de logging)
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-black mb-4" style={{ color: '#FF1CDA' }}>
              Algo salió mal
            </h1>
            <p className="mb-6">
              Lo sentimos, hubo un error al cargar esta sección. Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded border-2 border-black hover:bg-blue-700 transition-colors"
              style={{
                backgroundColor: '#0013FF',
                color: '#FFF',
                border: '2px solid #000'
              }}
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;





