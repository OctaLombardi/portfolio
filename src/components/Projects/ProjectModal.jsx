function ProjectModal({ project, onClose, link }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-slate-700 bg-opacity-90 z-50'
      onClick={handleBackdropClick}
    >
      <div
        className='rounded-md border-2 border-stone-900 dark:border-gray-300  bg-white dark:bg-black p-4 shadow-lg w-full max-w-lg sm:p-6 lg:p-8 mx-4 modal-content'
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
        <div className='flex justify-evenly mt-6 sm:flex sm:gap-4'>
          <a
            className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto'
            href={project.link}
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
