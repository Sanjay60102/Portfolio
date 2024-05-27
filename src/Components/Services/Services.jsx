import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Sanjay_Siramdasu from './Sanjay_Siramdasu.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
// import { motion } from 'framer-motion'
const Services = () => {
  const transition = {duration:1, type:'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white' :''}}>My Awesome</span>
        <span>services</span>
        {/* <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          velit error optio distinctio dignissimos. Atque, quasi. Quis libero
        </span> */}
        <a href={Sanjay_Siramdasu} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div 
        initial={{left:'25%'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        style={{ left: '30rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={'Languages'}
            detail={"Java, Python, C"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "10rem" }}>
          <Card
            emoji={Glasses}
            heading={"Frontend Development"}
            detail={"Html, Css, Javascript, ReactJs (Basic)"}
          />
        </div>
        {/* third card */}
        <div style={{ top: "19rem", left: "27rem" }}>
          <Card
            emoji={Humble}
            heading={"Backend Development"}
            detail={"MySQL"}
          />
        </div>
        <div className="blur s_blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  )
}

export default Services
