import Premium1 from "./components/premium1/Premium1";
import Premium2 from "./components/premium2/Premium2";
import Premium3 from "./components/premium3/Premium3";
import Spotify2 from "../spotify/Components/Spotify2/Spotify2"


export default function Premium() {

    return(
        <div className="premium">
            <Premium1 />
            <Premium2 />
            <div id="avalible-plans" />
            <Premium3 />
            <Spotify2 />
        </div>
    )
}