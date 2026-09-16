import React, { useEffect, useState } from 'react';

export const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onFinish();
      return;
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(() => {
            onFinish();
          }, 250);
          return 100;
        }
        return prev + 25;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#070D14',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 0.25s ease-out',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          transform: isExiting ? 'scale(0.96)' : 'scale(1)',
          transition: 'transform 0.25s ease-out',
        }}
      >
        <img
          src="/indiark-logo.png"
          alt="Indiark Entertainments"
          style={{
            height: '64px',
            width: 'auto',
            objectFit: 'contain',
            marginBottom: '0.5rem',
          }}
        />

        {/* Progress Bar */}
        <div
          style={{
            width: '160px',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            overflow: 'hidden',
            marginTop: '0.5rem',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--brand-teal), var(--brand-lime))',
              transition: 'width 0.18s ease-in-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};
