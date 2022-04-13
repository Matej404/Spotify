import "./spotify2.css";
import { NavLink } from "react-router-dom";
import { BsSpotify, BsInstagram, BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

export default function Spotify2() {

    return(
        <div className="spotify2">
                <div className="spotify2-container">
                    <div className="spotify2-content spotify2-logo">
                        <NavLink to="/Spotify" className="navlink">
                            <div className="navbar-spotify">
                                <BsSpotify className="icon" />
                                <p>Spotify</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="spotify2-links">
                        <div className="spotify2-content">
                            <ol>
                                <li>
                                    COMPANY
                                </li>
                                <li>   
                                    <a href="https://www.spotify.com/hr-en/about-us/contact/">About</a>
                                </li>
                                <li>
                                    <a href="https://www.lifeatspotify.com/?">Jobs</a>
                                </li>
                                <li>
                                    <a href="https://newsroom.spotify.com/?">For the recird</a>
                                </li>
                            </ol>
                        </div>
                        <div className="spotify2-content">
                            <ol>
                                <li>
                                    COMMUNITIES
                                </li>
                                <li>
                                    <a href="https://artists.spotify.com/?">For Artists</a>
                                </li>
                                <li>
                                    <a href="https://developer.spotify.com/">Developers</a>
                                </li>
                                <li>
                                    <a href="https://ads.spotify.com/en-GB/?">Advertising</a>
                                </li>
                                <li>
                                    <a href="https://investors.spotify.com/home/default.aspx">Investors</a>
                                </li>
                                <li>
                                    <a href="https://spotifyforvendors.com/">Vendors</a>
                                </li>
                            </ol>
                        </div>
                        <div className="spotify2-content">
                            <ol>
                                <li>
                                    USEFUL LINKS
                                </li>
                                <li>
                                    <a href="https://support.spotify.com/hr-en/?">Support</a>
                                </li>
                                <li>
                                    <a href="https://open.spotify.com/?">Web Player</a>
                                </li>
                                <li>
                                    <a href="https://www.spotify.com/hr-en/free/">Free Mobile App</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="spotify2-social-network">
                        <div className="social-network">
                            <a href="https://www.instagram.com/spotify/">
                                <BsInstagram className="icon-network" />
                            </a>
                        </div>
                        <div className="social-network">
                            <a href="https://twitter.com/spotify">
                                <BsTwitter className="icon-network" />
                            </a>
                        </div>
                        <div className="social-network">
                            <a href="https://www.facebook.com/SpotifyUKIE/?">
                                <ImFacebook className="icon-network" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="spotify2-container2">
                    <ol className="bottom-list">
                        <li>
                            <a href="https://www.spotify.com/hr-en/legal/end-user-agreement/">Legal</a>
                        </li>
                        <li>
                            <a href="https://www.spotify.com/hr-en/privacy">Privacy Center</a>
                        </li>
                        <li>
                            <a href="https://www.spotify.com/hr-en/legal/privacy-policy/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Cookie Settings</a>
                        </li>
                        <li>
                            <a href="https://www.spotify.com/hr-en/legal/privacy-policy/#s3">About Ads</a>
                        </li>
                    </ol>
                </div>
            </div>
    )
}