import { useEffect, useState } from 'react';
import { IconDarkMode } from '../../Utils/Icons/Icons';
import './Button.css'

function Button() {
  const [theme, setTheme] = useState('dark'); 

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : '';
  }, [theme]);


  return (
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          <IconDarkMode/>
        </button>
  );
}

export default Button;
