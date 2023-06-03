import './Header.css'

import Logo from '../assets/images/logo.png'
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <img src={Logo} className="brand-logo" alt="Logo"/>
        <ul className="nav-links">
            <li className="nav-items"><a href="#">TV</a></li>
            <li className="nav-items"><a href="#">movies</a></li>
            <li className="nav-items"><a href="#">sports</a></li>
            <li className="nav-items"><a href="#">Premium</a></li>
        </ul>

        <div className="right-container">
            <input type="text" className="search-box" placeholder="search"/>
            <button className="sub-btn">subscribe</button>
            <a href="#" className="login-link">Login</a>
        </div>
    </nav>
        
    </>
  );
}

export default Header