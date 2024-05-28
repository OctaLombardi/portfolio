import { useState, useEffect } from 'react';
import lightBackground from '../../data/bgs/y-so-serious-white.png';
import darkBackground from '../../data/bgs/papyrus-dark.webp';
function ThemeSwitch() {
  const [theme, setTheme] = useState(null);
  const sun = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6 text-black'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='white'
      className='w-6 h-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
      />
    </svg>
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Apply theme-specific background image
    document.documentElement.style.backgroundImage = `url(${
      theme === 'dark' ? darkBackground : lightBackground
    })`;
    //document.documentElement.style.backgroundSize = 'cover';
    document.documentElement.style.backgroundPosition = 'center';
    //document.documentElement.style.backgroundRepeat = 'no-repeat';
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div>
      <button
        type='button'
        onClick={handleThemeSwitch}
        className='absolute p-2 z-10 right-20 top-4 bg-blue-500 dark:bg-yellow-300 text-lg rounded-md'
      >
        {theme === 'dark' ? sun : moon}
      </button>
    </div>
  );
}

export default ThemeSwitch;
