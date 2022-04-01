import "./style.css";
import { Routes, Route } from "react-router-dom";
import Spotify from "./spotify/Spotify";
import Navbar from "./navbar/Navbar";
import Premium from "./premium/Premium";
import Support from "./support/Support";
import Download from "./download/Download";

export default function Main() {

    return(
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/spotify" element={<Spotify />} />
                    <Route path="/premium" element={<Premium />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/download" element={<Download />} />
                </Routes>
            </main>
            
        </div>
    )
}