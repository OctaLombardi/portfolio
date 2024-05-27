function PortfolioItem({ title, imgUrl, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className='border-2 bg-white dark:bg-black border-stone-900 dark:border-white rounded-md overflow-hidden md:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 '
      >
        <img
          src={imgUrl}
          alt='portfolio'
          className='w-full h-36 md:h-48 object-cover cursor-pointer'
        />
        <div className=' w-full p-4'>
          <h3 className='  text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>
            {title}
          </h3>
          <div className='flex justify-center mt-6 sm:flex sm:gap-4'>
            <button
              className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto'
              target='_blank'
              rel='noopener noreferrer'
            >
              + Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
