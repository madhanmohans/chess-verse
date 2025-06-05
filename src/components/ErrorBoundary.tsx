import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#1a1a1a',
          color: '#eee',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ color: '#ffd700', marginBottom: '1rem' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ marginBottom: '2rem', color: '#aaa' }}>
            An unexpected error occurred while running the application.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              backgroundColor: '#ffd700',
              color: '#1a1a1a',
              border: 'none',
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '6px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Reload Game
          </button>
          {this.state.error && (
            <details style={{ marginTop: '2rem', textAlign: 'left', maxWidth: '600px' }}>
              <summary style={{ cursor: 'pointer', color: '#ffd700' }}>
                Error Details
              </summary>
              <pre style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '4px',
                fontSize: '0.8rem',
                overflowX: 'auto'
              }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 