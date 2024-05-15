import Title from '../ui/Title';
function Contact() {
  return (
    <div className=' flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/f/11037ea1-b65f-44e9-9076-0104306d7c43'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <Title>Contact</Title>

          <input
            type='text'
            placeholder='Name'
            className='p-2 bg-white dark:bg-black border-2 rounded-md focus:outline-none'
          />
          <input
            type='text'
            placeholder='E-mail'
            className=' bg-white dark:bg-black border-2 rounded-md  my-2 p-2 focus:outline-none'
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className=' p-2 mb4  bg-white dark:bg-black border-2 rounded-md focus:outline-none'
          />
          <br />
          <button
            type='button'
            className='text-center  inline-block px-3 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to bg-green-500 drop-shadow-md transition duration-300 ease-in-out hover:scale-110'
          >
            Work With Me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
