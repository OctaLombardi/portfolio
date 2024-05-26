export default function SocialMediaButton({ Icon, link }) {
  /**const handleClick = () => {
    window.open(link, '_blank');
  };**/
  const handleClick = () => {
    if (link === '../data/OctavioLombardi-Resume.pdf') {
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.download = 'Resume-OctavioLombardi.pdf';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } else {
      window.open(link, '_blank');
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className='px-2 py-2 border-2 border-black dark:border-transparent text-black bg-white rounded-lg duration-150  active:bg-indigo-200'
      >
        <Icon className='w-6 h-6' />
      </button>
    </div>
  );
}
