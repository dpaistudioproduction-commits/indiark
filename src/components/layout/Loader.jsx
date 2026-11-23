import React, { useEffect, useState, useRef } from 'react';

export const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  useEffect(() => {
    // Quick, guaranteed branded entrance then immediate reveal
    const progressInterval = setInterval(() => {
      setProgress(p => Math.min(p + 35, 100));
    }, 60);

    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setIsExiting(true);
      setTimeout(() => {
        if (onFinishRef.current) onFinishRef.current();
      }, 150);
    }, 280);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

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
            height: '72px',
            width: 'auto',
            objectFit: 'contain',
            marginBottom: '0.75rem',
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
