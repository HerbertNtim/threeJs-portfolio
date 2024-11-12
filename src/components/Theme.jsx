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
      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded transition-colors duration-300"
    >
      {isDarkMode ? (
        // Moon SVG for dark mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8-8h1M3 12H2m15.536 6.536l-.707-.707M5.464 5.464l-.707-.707m12.728 0l-.707.707M5.464 18.536l-.707.707M15 12a3 3 0 100-6 3 3 0 000 6z"
          />
        </svg>
      ) : (
        // Sun SVG for light mode
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4V2m0 20v-2m8-8h2M2 12H4m15.536 6.536l1.414-1.414M4.05 4.05l1.414 1.414m12.728 0L19.05 5.464M5.464 19.05l1.414-1.414M12 8a4 4 0 110 8 4 4 0 010-8z"
          />
        </svg>
      )}
    </button>
  );
};

export default Theme;
