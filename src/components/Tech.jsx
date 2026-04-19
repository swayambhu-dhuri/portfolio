import React from 'react'
import {motion} from 'framer-motion'
import {SectionWrapper} from '../hoc'
import {skillCategories} from '../constants'
import {styles} from '../styles'
import {textVariant, fadeIn} from '../utils/motion'

const SkillBadge = ({skill}) => {
  if (skill.icon) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{background: '#1d1836'}}>
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-5 h-5 object-contain flex-shrink-0"
          loading="lazy"
        />
        <span className="text-white-100 text-[13px] whitespace-nowrap">{skill.name}</span>
      </div>
    );
  }
  return (
    <div className="px-3 py-2 rounded-lg" style={{background: '#1d1836'}}>
      <span className="text-secondary text-[13px] whitespace-nowrap">{skill.name}</span>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-8">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            variants={fadeIn('up', 'spring', catIdx * 0.1, 0.5)}
          >
            <h3 className="text-[13px] font-semibold uppercase tracking-widest mb-3" style={{color: '#915EFF'}}>
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
