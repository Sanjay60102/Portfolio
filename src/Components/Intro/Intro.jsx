import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { Link } from 'react-scroll'
// import { motion } from 'framer-motion';
const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro" id='Intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hai! I Am</span>
                    <span>Sanjay Siramdasu</span>
                    <span>Frontend Developer in web designing</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className='button i-button' >
                        Hire me
                    </button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/Sanjay60102"><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/sanjay-siramdasu-ba8896227/"><img src={LinkedIn} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                {/* <img className='boy' src={boy} alt="" /> */}
                <img
                    initial={{ left: '-26%' }}
                    whileInView={{ left: '-14%' }}
                    transition={transition}
                    style={{top: "4rem", left: "6rem"}}
                    height={"100rem"}
                    src={glassesimoji} alt="" />
                <div
                    initial={{ top: "-4%", left: '74%' }}
                    whileInView={{ left: "68%" }}
                    transition={transition}

                    style={{ top: "8rem", left: "15rem" }}
                    className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                {/* Second card */}
                {/* <div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}
                    className='floating-div'
                >
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div> */}
                {/* blur divs */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>
            </div>

        </div>
    )
}

export default Intro
