import '../assets/styles/components/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const instagram = <FontAwesomeIcon icon={faInstagram} size="8x"/>
  const github = <FontAwesomeIcon icon={faGithub} size="8x"/>
  const linkedin = <FontAwesomeIcon icon={faLinkedin} size="8x"/>
  const twitter = <FontAwesomeIcon icon={faTwitter} size="8x"/>
  return(
    <div className="contact-container">
      <h2 className="contact-title">Don't be shy, contact me!</h2>    
      <div className="networks-container">  
        <a className="network-icon" href="https://www.instagram.com/danielruizen/?igshid=146eqhcu1h6ok">
          {instagram}
        </a>
        <a className="network-icon" href="https://www.linkedin.com/in/daniel-ruiz-9343521b8/">
          {linkedin}
        </a>
        <a className="network-icon" href="https://github.com/Darudaniel">
          {github}
        </a>
        <a className="network-icon" href="https://twitter.com/Darubeat">
          {twitter}
        </a>
      </div>
    </div>
  )
}

export default Contact