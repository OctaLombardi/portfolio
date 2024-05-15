import portfolio from '../../data/Portfolio';
import PortfolioItem from './PortfolioItem';
import Title from '../ui/Title';
import ProjectModal from './projectDescription';

function Portfolio() {
  return (
    <>
      <div className=''>
        <Title>My Work</Title>
        <hr />
        <br />
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map((project, id) => (
              <PortfolioItem
                key={id}
                title={project.title}
                imgUrl={project.imgUrl}
                stack={project.stack}
                link={project.link}
                onClick={ProjectModal}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
