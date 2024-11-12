import { useState } from 'react';

const Theme = () => {
  const initialTheme = document.documentElement.classList.contains('dark');
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleDarkMode}
    >
      {!isDarkMode ? (
        // Moon SVG for dark mode
        <img src="/assets/moon.svg" alt="moon" width={40} height={40} className='bg-white-500 p-2 rounded-full'/>
      ) : (
        // Sun SVG for light mode
        <img src="/assets/sun.svg" alt="moon" width={40} height={40} className='bg-white-500 p-2 rounded-full'/>
      )}
    </button>
  );
};

export default Theme;
