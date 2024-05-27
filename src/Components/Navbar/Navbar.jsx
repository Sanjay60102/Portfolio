import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Navbar = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const offset = -70;
    return (
        <div className="n-wrapper navigation-bar" >
            <div className="n-left">
                <div className="n-name" style={{ color: darkMode ? 'black' : '' }}>Sanjay</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none', color: darkMode ? 'black' : '' }}

                    >
                        <Link spy={true} to='Intro' smooth={true} >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                            <li>Experiences</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} >
                            <li>Portfolio</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className="button n-button">
                        Contact
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Navbar
