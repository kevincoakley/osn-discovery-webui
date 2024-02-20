import '../assets/styles/Nav.css'
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
            </nav>
            
        </>
    )
}

export default BottomBar