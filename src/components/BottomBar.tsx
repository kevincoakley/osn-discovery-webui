import '../assets/styles/Nav.css'
import OSNLogo from '/img/OSN_Logo.png'
import NSDFLogo from '/img/NSDF_Logo.png'
import config from '../config/config.ts'
import { NavLink } from "react-router-dom"
function BottomBar() {
    return (
        <>
            <nav className="BottomBar">
                <div className="NavMenu">
                    {/* TODO: Navigate to actual About and Contact Us Pages */}
                    <NavLink to={config.ABOUT_LINK}>About</NavLink>
                    <NavLink to={config.CONTACT_US_LINK}>Contact Us</NavLink>
                </div>
                <div id="Logos">
                    <img src={OSNLogo} alt="Open Storage Network Logo"/>
                    <img src={NSDFLogo}  alt="National Science Data Fabric Logo"/>
                </div>
            </nav>
            
        </>
    )
}

export default BottomBar