import { useState } from 'react';
import Title from '../ui/Title';
import portfolio from '../../data/Portfolio';
import PortfolioItem from './PortfolioItem';
import ProjectModal from './ProjectModal';
function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className=''>
        <Title>My Work</Title>
        <hr />
        <br />
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {portfolio.map((project, id) => (
              <PortfolioItem
                key={id}
                title={project.title}
                imgUrl={project.imgUrl}
                stack={project.stack}
                link={project.link}
                description={project.description}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
        </div>
        {isModalOpen && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </>
  );
}

export default Portfolio;
