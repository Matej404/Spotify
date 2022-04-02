import "./navbar.css";
import { NavLink } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
import { Fade } from "react-reveal";

export default function Navbar() {

    return(
        <div className="navbar">
            <NavLink to="/spotify" className="navlink">
                <div className="navbar-spotify">
                    <BsSpotify className="icon" />
                    <p>Spotify</p>
                </div>
            </NavLink>
            <Fade right>
            <div className="navbar-right-side">
                <ul className="nav-menu">
                    <li className="nav-link">
                        <NavLink to="/premium" className="navlink-menu">
                            Premium
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/support" className="navlink-menu">
                            Support
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/download" className="navlink-menu">
                            Download
                        </NavLink>
                    </li> 
                </ul>
                <hr />
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
            </Fade>
        </div>
    )
}