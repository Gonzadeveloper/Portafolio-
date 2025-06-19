import React, { useRef, useEffect, useState } from 'react';
import './ComponenteScroll.css';

const ComponenteScroll = ({ children, direction = 'left' }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.6, // Aumentalo a 0.6 o 0.8 para más visibilidad
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
