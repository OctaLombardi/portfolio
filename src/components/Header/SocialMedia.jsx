import SocialMediaBtn from './SocialMediaBtn';
import socialmedia from '../../data/SocialMedia';
function SocialMedia() {
  return (
    <div className='flex flex-row gap-4 items-center justify-evenly animate-bounce'>
      {socialmedia.map(({ id, imgUrl, link, isDownload }) => (
        <SocialMediaBtn
          key={id}
          Icon={imgUrl}
          link={link}
          isDownload={isDownload}
        />
      ))}
    </div>
  );
}

export default SocialMedia;
