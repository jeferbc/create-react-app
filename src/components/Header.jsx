import '../assets/styles/components/Header.css'

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
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button className="dropdown-item" type="button">Action</button></li>
          <li><button className="dropdown-item" type="button">Another action</button></li>
          <li><button className="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>
      {/* <div class="dropdown burger-menu">
        <button class="burger-button btn btn-dark" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
          ____<br/>
          ____<br/>
          ____
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div> */}
      <div className="navbar">
        
      </div>

    </div>
  )
}

export default Header