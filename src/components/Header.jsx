import '../assets/styles/components/Header.css'
import Dropdown from 'react-bootstrap/Dropdown'

const Header = () => {
  return(
    <div className="Header">
      {/* <figure className="icon-container">
        <img src="" alt=""/>
      </figure> */}
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
          <Dropdown.Item href="#/action-1">Apps</Dropdown.Item>
          <Dropdown.Item href="#/action-2">About</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Portfolio</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="navbar">
        
      </div>
    </div>
  )
}

export default Header