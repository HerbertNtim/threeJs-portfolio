import { useState, useEffect } from 'react';

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is already enabled in localStorage or by system preference
    const savedTheme = localStorage.theme;
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldEnableDark = savedTheme === 'dark' || (!savedTheme && prefersDarkMode);

    setIsDarkMode(shouldEnableDark);
    if (shouldEnableDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    htmlElement.classList.toggle('dark', newMode);
    localStorage.theme = newMode ? 'dark' : 'light';
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
