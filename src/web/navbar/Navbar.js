import "./navbar.css";
import { NavLink } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return(
        <div className="navbar">
            <NavLink to="/Spotify" className="navlink">
                    <div className="navbar-spotify">
                        <BsSpotify className="icon" />
                        <p>Spotify</p>
                    </div>
                </NavLink>
                {(toggleMenu || screenWidth > 900) && (
            <div className="navbar-container">
                <div className="close-btn" onClick={handleToggleMenu}>
                    <IoCloseSharp />
                </div>
                <div className="navbar-right-side">
                    <ul className="nav-menu">
                        <li className="nav-link">
                            <NavLink to="/premium" className="navlink-menu"  onClick={handleToggleMenu}>
                                Premium
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/support" className="navlink-menu" onClick={handleToggleMenu}>
                                Support
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/download" className="navlink-menu" onClick={handleToggleMenu}>
                                Download
                            </NavLink>
                        </li> 
                    </ul>
                    <div className="slash" />
                    <ul className="link-menu">
                        <li>
                            <a href="https://www.spotify.com/hr-en/signup">Sign up</a>
                        </li>
                        <li>
                            <a href="https://accounts.spotify.com/en/login/?">Log in</a>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
                <NavLink to="/Spotify" className="navlink navlink2" onClick={handleToggleMenu} >
                    <div className="navbar-spotify" >
                        <BsSpotify className="icon" />
                        <p>Spotify</p>
                    </div>
                </NavLink>
            </div>)}
            <div className="bars-icon" onClick={handleToggleMenu}>
                <FaBars />
            </div>
        </div>
    )
}