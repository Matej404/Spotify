import "./premium3.css";
import { MdDone } from "react-icons/md";

export default function Premium3() {

    return(
        <div className="premium3">
            <div className="premium3-container">
                <div className="premium3-header">
                    <h1>Available plans.</h1>
                    <p>Choose a plan and listen without limits on your phone, speaker, and other devices.</p>
                </div>
                <div className="premium3-plans-container">
                    <div className="plan">
                        <div className="month">
                            1 month free
                        </div>
                        <div className="price">
                            <h1>Individual</h1>
                            <p>5.99€/month after offer period</p>
                            <p>1 account</p>
                        </div>
                        <hr />
                        <div className="possibilities-container">
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>Ad-free music listening</p>
                            </div>
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>Play anywhere - even offline</p>
                            </div>
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>On-demand playback</p>
                            </div>
                        </div>
                        <div className="plan-bottom">
                            <div className="get-started">
                                <a href="https://accounts.spotify.com/en/login?">
                                    GET STARTED
                                </a>
                            </div>
                            <span>
                                <a href="https://www.spotify.com/hr-en/legal/premium-promotional-offer-terms/">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.
                            </span>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="month">
                            1 month free
                        </div>
                        <div className="price">
                            <h1>Duo</h1>
                            <p>7.99€/month after offer period</p>
                            <p>2 accounts</p>
                        </div>
                        <hr />
                        <div className="possibilities-container">
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>2 Premium accounts for a couple under one roof</p>
                            </div>
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>Ad-free music listening, play offline, on-demand playback</p>
                            </div>
                        </div>
                        <div className="plan-bottom">
                            <div className="get-started">
                                <a href="https://accounts.spotify.com/en/login?">
                                    GET STARTED
                                </a>
                            </div>
                            <span>
                                <a href="https://www.spotify.com/hr-en/legal/premium-promotional-offer-terms/">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.
                            </span>
                        </div>       
                    </div>
                    <div className="plan">
                        <div className="month">
                            1 month free
                        </div>
                        <div className="price">
                            <h1>Family</h1>
                            <p>9.99€/month after offer period</p>
                            <p>Up to 6 accounts</p>
                        </div>
                        <hr />
                        <div className="possibilities-container">
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>6 Premium accounts for family members living under one roof</p>
                            </div>
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>Block explicit music</p>
                            </div>
                            <div className="possibility">
                                <MdDone className="done-icon" />
                                <p>Ad-free music listening, play offline, on-demand playback</p>
                            </div>
                        </div>
                        <div className="plan-bottom">
                            <div className="get-started">
                                <a href="https://accounts.spotify.com/en/login?">
                                    GET STARTED
                                </a>
                            </div>
                            <span>
                                <a href="https://www.spotify.com/hr-en/legal/premium-promotional-offer-terms/">Terms and conditions apply.</a> 1 month free not available for users who have already tried Premium.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}