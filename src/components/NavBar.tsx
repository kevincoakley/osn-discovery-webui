import '../assets/styles/NavBar.css'
import { NavLink } from "react-router-dom"
function NavBar() {
    return (
        <>
            <nav className="Nav">
                <div className="NavLogo">OSN</div>
                <div className="NavMenu">
                    <NavLink to="/home">Home</NavLink>
                </div>
            </nav>
            
        </>
    )
}

export default NavBar