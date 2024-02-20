import '../assets/styles/Nav.css'
import OSNLogo from '/img/OSN_Logo.png'
import NSDFLogo from '/img/NSDF_Logo.png'
import { NavLink } from "react-router-dom"
function BottomBar() {
    return (
        <>
            <nav className="BottomBar">
                <div className="NavMenu">
                    {/* TODO: Navigate to actual About and Contact Us Pages */}
                    <NavLink to="/home">About</NavLink>
                    <NavLink to="/home">Contact Us</NavLink>
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