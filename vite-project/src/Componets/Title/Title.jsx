import { useEffect } from 'react';

function TitleChange() {
  useEffect(() => {
    let previousTitle = document.title;

    const handleBlur = () => {
      previousTitle = document.title;
      document.title = '¡No te vayas! ¡Vuelve 😱!';
    };

    const handleFocus = () => {
      document.title = previousTitle;
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    // Cleanup
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return null;
}

export default TitleChange;