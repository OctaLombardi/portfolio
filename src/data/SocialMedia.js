import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { GrNotes } from 'react-icons/gr';
const socialmedia = [
  {
    id: 1,
    title: 'Linkedin',
    imgUrl: FaLinkedinIn,
    link: 'https://www.linkedin.com/in/octavio-lombardi/',
  },
  {
    id: 2,
    title: 'GitHub',
    imgUrl: FaGithub,
    link: 'https://github.com/OctaLombardi',
  },
  {
    id: 3,
    title: 'Behance',
    imgUrl: FaBehance,
    link: 'https://www.behance.net/octaviolombardi',
  },
  {
    id: 4,
    title: 'CV',
    link: '../data/OctavioLombardi-Resume.pdf',
    imgUrl: GrNotes,
  },
];
export default socialmedia;
