function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className='text-xl font-bold underline-offset-8 decoration-4 mb-5 text-black dark:text-white '
    >
      {children}
    </h1>
  );
}

export default Title;
