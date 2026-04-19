import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import {styles} from "../styles";
import {experiences} from "../constants";
import {SectionWrapper} from "../hoc"
import {textVariant} from "../utils/motion";

const InitialBadge = ({ experience }) => (
  <span style={{
    fontSize: '20px',
    fontWeight: '900',
    color: experience.iconColor || '#ffffff',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1,
  }}>
    {experience.iconInitial || experience.company_name.slice(0, 1)}
  </span>
);

const CompanyIcon = ({ experience }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (experience.icon && !imgFailed) {
    return (
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
        onError={() => setImgFailed(true)}
      />
    );
  }
  return <InitialBadge experience={experience} />;
};

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <CompanyIcon experience={experience} />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[19px] font-bold leading-snug">{experience.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
        {experience.company_name}
        {experience.location && (
          <span className="text-[13px] font-normal ml-2 opacity-70">
            {experience.location}
          </span>
        )}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.techStack && experience.techStack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-1 rounded-full"
              style={{
                background: 'rgba(145, 94, 255, 0.15)',
                color: '#915EFF',
                border: '1px solid rgba(145, 94, 255, 0.3)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'experience')
