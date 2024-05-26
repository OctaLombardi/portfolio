import SocialMedia from './SocialMedia';
function Intro() {
  return (
    <div className=' flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <img className='w-40' src='assets/profilepic.png' alt='avatar' />
      <h1 className='text-3xl md:text-4xl dark:text-slate-200 mb-1 md:mb-3 font-serif font-bold'>
        Octavio Lombardi
      </h1>
      <p className='text-base md:text-l mb-3 font-medium font-mono'>
        Talent is a spark. Genius,
        <span className='text-red-600 dark:text-red-600'> flame.</span>
      </p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        Software developer passionate about building user-friendly web
        applications through front-end development and cloud expertise.
      </p>
      <SocialMedia />
    </div>
  );
}

export default Intro;
