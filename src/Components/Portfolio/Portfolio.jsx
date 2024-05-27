import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Portfolio_App from '../../img/Portfolio.png'
import Medicos_Clan from '../../img/Medicos_Clan.jpg'
import Cyclone from '../../img/Cyclone.jpg'
import Railway_Management from "../../img/Railway_Management.png"
import MedicosClanVideo from "../../img/MedicosClanVideo.mp4"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    
    
  return (
    <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white' :''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
                <a href="#"><img src={Portfolio_App} alt="" /></a>
                <p style={{
                    paddingLeft: "1rem",
                    fontWeight: "100",
                    fontSize: "18px",
                    color: "#788097",
                    fontWeight: "bold"
                }}>Portfolio</p>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#"><img src={Medicos_Clan} alt="" /></a>
                <p style={{
                    paddingLeft: "1rem",
                    fontWeight: "100",
                    fontSize: "18px",
                    color: "#788097",
                    fontWeight: "bold"
                }}>Medicos Clan</p>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#"><img src={Cyclone} alt="" /></a>
                <p style={{
                    paddingLeft: "1rem",
                    fontWeight: "100",
                    fontSize: "18px",
                    color: "#788097",
                    fontWeight: "bold"
                }}>Cyclone Intensity Estimation</p>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://sanjay60102.github.io/Railway-Management-System/"><img src={Railway_Management} alt="" /></a>
                <p style={{
                    paddingLeft: "1rem",
                    fontWeight: "100",
                    fontSize: "18px",
                    color: "#788097",
                    fontWeight: "bold"
                }}>Railway Management</p>
            </SwiperSlide>
            {/* <SwiperSlide>
                <a href="https://sanjay60102.github.io/first-web/"><img src={Web_Application} alt="" /></a>
            </SwiperSlide> */}
            
        </Swiper>
    </div>
  )
}

export default Portfolio