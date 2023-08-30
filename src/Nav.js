// import logo from './assets/logo.png';
import {ReactComponent as ReactLogo} from './Logo.svg';
import './Nav.css';
function Nav(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
            {/* <img src={logo} alt="Logo" /> */}
                <ReactLogo />
            </div>
            <ul className="navbar-links">
                <li><a className="link" href="#">Home</a></li>
                <li><a className="link" href="#">About</a></li>
                <li><a className="link" href="#">Menu</a></li>
                <li><a className="link" href="#">Reservations</a></li>
                <li><a className="link" href="#">Order online</a></li>
                <li><a className="link" href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;