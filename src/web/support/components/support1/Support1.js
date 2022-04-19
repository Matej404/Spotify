
import "./support1.css";
import { FiSearch } from "react-icons/fi";

export default function Support1() {

    return(
        <div className="support1">
            <div className="support1-container">
                <h1>How can we help you?</h1>
                <div className="support1-input">
                    <FiSearch className="search-icon" />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="support1-problems">
                    <div className="support1-problem">
                        <span>LOGGING IN</span>
                        <p>
                            <a href="https://support.spotify.com/uk/article/change-password/">Can't reset password</a>
                        </p>
                    </div>
                    <div className="support1-problem">
                        <span>TROUBLESHOOTING</span>
                        <p>
                            <a href="https://support.spotify.com/uk/article/account-doesnt-look-right/">My account doesnt look right</a>
                        </p>
                    </div>
                    <div className="support1-problem">
                        <span>LOGGING IN</span>
                        <p>
                            <a href="https://support.spotify.com/uk/article/cannot-remember-login/">Can't remembr login details</a>
                        </p>
                    </div>
                    <div className="support1-problem">
                        <span>AVAILABLE PLANS</span>
                        <p>
                            <a href="https://support.spotify.com/uk/article/special-offers-premium/">Special Offers for Premium-Frequently Asked Questions</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}