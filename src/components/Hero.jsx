import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { socials } from "../constants";
import styled from "styled-components";
import { SectionWrapper } from "../hoc";
const Hero = () => {
  return (
    <section id="home" className={`bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Swayambhu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a full stack web developer, coding with precision and sipping on inspiration.
          </p>
          <SocialWrapper>
            <ul>
              {
                socials.map(({link, icon}, idx) => (
                  <li key={idx}>
                    <a href={link} target="_blank">
                    <i className={icon}></i>
                    </a>
                  </li>
                ))
              }
            </ul>

            <a className="button-resume" href="/Swayambhu Dhuri.pdf" download="Swayambhu Dhuri.pdf">Resume</a>
          </SocialWrapper>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}} className="w-3 h-3 rounded-full bg-secondary mb-1">
              
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
  ul{
    list-style:none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    li a{
      font-size: 28px;
    }
  }
           
  
         

  .button-resume{
    background-image: linear-gradient(to right, #DA22FF 0%, #9733EE  51%, #DA22FF  100%);
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    border-radius: 10px;
    display: block;
    outline: none;
    border:none;
    text-decoration: none;
    &:hover{
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
`

export default Hero;
