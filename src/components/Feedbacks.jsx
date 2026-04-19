import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const AVATAR_COLORS = ['#915EFF', '#00cea8', '#bf61ff', '#2f80ed', '#f59e0b', '#f12711'];

const getInitials = (name) =>
  name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

const getAvatarColor = (name) =>
  AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

const FeedbackCard = ({index, testimonial, name, designation, company}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >
    <p className="text-white font-black text-[48px]">{'\u201C'}</p>
    <div className="mt-1">
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex items-center gap-4'>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
          style={{background: getAvatarColor(name)}}
        >
          {getInitials(name)}
        </div>
        <div className='flex flex-col'>
          <p className="text-white font-medium text-[16px]">
            <span className='blue-text-gradient'>@</span>{name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 pb-14 flex flex-col gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks);
