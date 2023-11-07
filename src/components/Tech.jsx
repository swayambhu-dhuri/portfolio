import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import styled from 'styled-components'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">{
      technologies.map((technology, idx) => (
        <div className="w-28 h-28" key={`${technology.name}-${idx}`}>
          <TechIconWrapper>
            <img src={technology.icon}/>
          </TechIconWrapper>
          {/* <BallCanvas icon={technology.icon} /> */}
        </div>
      ))
    }</div>
  )
}

const TechIconWrapper = styled.div`
  min-width: 50px;
  max-width: 100px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fff8eb;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export default SectionWrapper(Tech, "")