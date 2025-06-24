import React, { useRef, useEffect, useState } from 'react';
import './ComponenteScroll.css';

const ComponenteScroll = ({ children, direction = 'left' }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

useEffect(() => {
  const isMobile = window.innerWidth <= 768;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect(); // Desconectamos una vez visible
      }
    },
    {
      threshold: isMobile ? 0.15 : 0.4, // Menor threshold en mobile
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => {
    if (ref.current) observer.unobserve(ref.current);
  };
}, []);

  return (
    <div
      ref={ref}
      className={`scroll-section ${visible ? `visible ${direction}` : ''}`}
    >
      {children}
    </div>
  );
};

export default ComponenteScroll;
