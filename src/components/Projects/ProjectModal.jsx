import React from 'react';
import { useEffect } from 'react';

function ProjectModal({ show, onClose, project, stack }) {
  useEffect(() => {
    // Function to handle click outside modal
    const handleClickOutside = (event) => {
      if (!event.target.closest('.modal-content')) {
        onClose(); // Close modal if clicked outside modal content
      }
    };

    // Add event listener when the modal is shown
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Remove event listener when the modal is hidden
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  if (!show) return null;
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-slate-700 bg-opacity-90 z-50'>
      <div
        className='rounded-md  border-white bg-white dark:bg-black p-4 shadow-lg w-full max-w-lg sm:p-6 lg:p-8 mx-4 '
        role='alert'
      >
        <div className='flex items-center gap-4'>
          <p className='text-xl md:text-xl mb-2 md:mb-3 font-semibold text-black dark:text-white'>
            {project.title}
          </p>
        </div>
        <p className='mt-4 text-slate-900 dark:text-slate-200'>
          {project.description}
        </p>
        <br />
        <p className='text-lg'>Technologies:</p>
        <p className='py-2 flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm'>
          {project.stack.map((item, idx) => (
            <span
              key={idx}
              className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-blue-500 rounded-md'
            >
              {item}
            </span>
          ))}
        </p>
        <div className='flex justify-center mt-6 sm:flex sm:gap-4'>
          <a
            className='inline-block  rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto'
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
