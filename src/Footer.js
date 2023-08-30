import "./Footer.css";
// import logo from './assets/logo.png';
import {ReactComponent as ReactLogo} from './Logo.svg'
function Footer() {
    return(
        <footer className="footer-section">
            <div className="logo">
            <ReactLogo />
            </div>
            <div>
                <h3>Doormat Navigation</h3>
            </div>
            <div>
                <h3>Contact</h3>
            </div>
            <div>
                <h3>Social Media Links</h3>
            </div>
        </footer>
    )
    
}
export default Footer;