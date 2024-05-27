import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import X from '@iconscout/react-unicons/icons/uil-twitter'
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>sanjay60102@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Sanjay60102">
            <Github color='white' size='3rem' />
          </a>
          <a href="https://www.linkedin.com/in/sanjay-siramdasu-ba8896227/">
            <LinkedIn color='white' size='3rem' />
          </a>
          <a href="https://x.com/sanjaysiramdasu?s=09">
            <X color='white' size='3rem' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
