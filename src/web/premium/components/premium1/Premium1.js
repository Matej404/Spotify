import "./premium1.css";
import { Link } from "react-scroll";
 
export default function Premium1() {

    return(
        <div className="premium1">
            <div className="premium1-container">
                <div className="premium1-container-part1">
                    <h1>Get Premium free for 1 month.</h1>
                    <p>Take control of your listening with ad-free music. Only €5.99 after offer.* Cancel anytime.</p>
                    <div className="premium1-links">
                        <div className="month-free">
                            <a href="https://accounts.spotify.com/en/login?">TRY OME MONTH FREE</a>
                        </div>
                        <div className="view-plans">
                            <Link to="avalible-plans" smooth={true} duration={1000}>
                                VIEW PLANS
                            </Link>
                        </div>
                    </div>
                    <span>*Offer only for users who are new to Premium. <a href="https://www.spotify.com/hr-en/legal/premium-promotional-offer-terms/">Terms and Conditions apply.</a></span>
                </div>
                <div className="premium1-container-part2">
                    <h2>Enjoy access to 82 million tracks, including more</h2>
                    <h2>than 3.6 million podcast titles, for free.</h2>
                    <p>Listening is everything. No credit card needed.</p>
                </div>
            </div>
            <div className="banner">

            </div>
        </div>
    )
}