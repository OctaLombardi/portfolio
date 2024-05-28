import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
const socialmedia = [
  {
    id: 1,
    title: 'Linkedin',
    imgUrl: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/octavio-lombardi/',
    isDownload: false,
  },
  {
    id: 2,
    title: 'GitHub',
    imgUrl: FaGithub,
    link: 'https://github.com/OctaLombardi',
    isDownload: false,
  },
  {
    id: 3,
    title: 'Behance',
    imgUrl: FaBehance,
    link: 'https://www.behance.net/octaviolombardi',
    isDownload: false,
  },
  {
    id: 4,
    title: 'CV',
    imgUrl: GrNotes,
    link: '/assets/Resume-OctavioLombardi.pdf',
    isDownload: true,
  },
];
export default socialmedia;
