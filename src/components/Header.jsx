import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt='Logo Kasa' />
            <ul>
                <li>
                    <Link to={"/"}
                        className={location.pathname === "/" ? "active" : ""}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to={"/about"}
                        className={location.pathname === "/about" ? "active" : ""}>
                        A Propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar