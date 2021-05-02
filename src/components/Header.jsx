import '../assets/styles/components/Header.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
    <div className="Header">
      <div>
        <h1 className="logo">DD</h1>
      </div>
      <div className="title-container">
        <h2>Daru</h2>
        <h2 className="doctor">doctor</h2>
      </div>
      <Dropdown className="burger-menu">
        <Dropdown.Toggle className="burger-button" variant="Secondary" id="dropdown-basic">
          ____<br/>
          ___<br/>
          ____
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link to="/liquidos-neonatos" className="item-menu-button">App</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/about" className="item-menu-button">About</Link></Dropdown.Item>
          {/* <Dropdown.Item><Link to="/portfolio" className="item-menu-button">Portfolio</Link></Dropdown.Item> */}
          <Dropdown.Item><Link to="/contact" className="item-menu-button">Contact</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="navbar">

      </div>
    </div>
  )
}

export default Header