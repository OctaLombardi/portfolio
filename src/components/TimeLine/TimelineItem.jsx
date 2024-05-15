function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className=' flex clex-col md:flex-row relative border-1 border-stone-200 dark:border-stone-700'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-700 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-blue-500' />
        <div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
            {year}
          </span>
          <p className='text-lg font-semibold text-stone-900 dark:text-white'>
            {title}
          </p>
          <p className='my-1 text-sm font-normal leading-none text-stone-800 dark:text-white'>
            {duration}
          </p>
        </div>
        <p className='my-2 text-base font-normal text-stone-800 dark:text-white'>
          {details}
        </p>
        <hr className='text-black' />
      </li>
    </ol>
  );
}

export default TimelineItem;
