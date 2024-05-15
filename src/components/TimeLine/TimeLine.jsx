import TimelineItem from './TimelineItem';
import timeline from '../../data/TimeLine';
import Title from '../ui/Title';
function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20 p-3'>
      <div className='w-full md:w-7/12'>
        <Title className='text-4xl'>Learning Journey</Title>
        {timeline.map((item, idx) => (
          <TimelineItem
            key={idx}
            year={item.year}
            duration={item.duration}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
