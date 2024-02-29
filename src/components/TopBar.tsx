import '../assets/styles/Nav.css'
import { NavLink } from "react-router-dom"
function TopBar() {
    return (
        <>
            <nav className="TopBar">
                <div className="NavLogo">OSN</div>
                <div className="NavMenu">
                    <NavLink to="/">Home</NavLink>
                </div>
            </nav>
            
        </>
    )
}

export default TopBar