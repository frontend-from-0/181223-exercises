import { useState, useEffect } from 'react';

export const Exercise5 = ({ children }) => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [tracking, setTracking] = useState(false);


  const handleMouseMove = (e) => {
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    if (tracking) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [tracking]);

  const startTracking = () => setTracking(true);
  const stopTracking = () => setTracking(false);

  return children({
    coordinates,
    tracking,
    startTracking,
    stopTracking,
  });
};