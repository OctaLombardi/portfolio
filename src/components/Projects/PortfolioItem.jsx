// import ProjectModal from './ProjectModal';
// import { useState } from 'react';
// function PortfolioItem({ title, imgUrl, onClick }) {
//   return (
//     <>
//       <div
//         onClick={onClick}
//         className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden cursor-pointer flex flex-col items-center'
//       >
//         <img
//           src={imgUrl}
//           alt='portfolio-project'
//           className='w-full h-36 md:h-48 object-cover'
//         />
//         <div className=' w-full p-2'>
//           <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white'>
//             {title}
//           </h3>
//           <button className='justify-center mt-1 inline-block rounded-lg border-2 border-stone-900 bg-gray-50 px-4 py-2 text-center text-sm font-semibold text-gray-800 sm:mt-0 sm:w-auto'>
//             + Details
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PortfolioItem;
import ProjectModal from './ProjectModal';
import { useState } from 'react';

function PortfolioItem({ title, imgUrl, onClick }) {
  return (
    <div
      onClick={onClick}
      className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden cursor-pointer flex flex-col items-center'
    >
      <img
        src={imgUrl}
        alt='portfolio-project'
        className='w-full h-36 md:h-48 object-cover'
      />
      <div className='w-full p-2 flex flex-col items-center'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold dark:text-white text-center'>
          {title}
        </h3>
        <button className='mt-1 px-4 py-2 text-center text-sm font-semibold text-gray-800 bg-gray-50 border-2 border-stone-900 rounded-lg inline-block sm:w-auto'>
          + Details
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;
