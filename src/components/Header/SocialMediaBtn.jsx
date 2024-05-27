export default function SocialMediaButton({ Icon, link, isDownload }) {
  /**const handleClick = () => {
    window.open(link, '_blank');
  };**/
  const handleClick = () => {
    if (isDownload) {
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.download = link.split('/').pop(); // Use the file name from the link or specify a custom name
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
