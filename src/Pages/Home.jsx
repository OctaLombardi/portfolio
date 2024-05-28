import Intro from '../components/Header/Intro';
import Portfolio from '../components/Projects/Portfolio';
import TimeLine from '../components/TimeLine/TimeLine';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';
function Home() {
  return (
    <>
      <ThemeSwitch />
      <div className='text-stone-900 dark:text-slate-200 min-h-screen scroll-smooth'>
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Intro />
          <br />
          <Portfolio />
          <TimeLine />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
