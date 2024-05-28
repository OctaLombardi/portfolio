import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '../components/Loader/LoadingIcon';
import lightBackground from '../data/bgs/y-so-serious-white.png';
import darkBackground from '../data/bgs/papyrus-dark.webp';
function Loading() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Simulate a 2-second loading delay

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [navigate]);

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
  return (
    <div className=' flex items-center justify-center h-screen'>
      <LoadingIcon />
    </div>
  );
}

export default Loading;
