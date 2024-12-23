import assets from "../assets";
import { Link } from "react-router-dom";

export default function Banner() {
        return  <div className="banner">
                    <div className="banner-content">
                        <Link to="/">
                            <img src={assets.logo} alt="Company logo" width={100} />
                        </Link>
                        <h1>Ассоциация Врачей <br /> Узбекистана</h1>
                    </div>
                    <div className="banner-details">
                        <p>+998 (71) 268-08-17</p>
                        <Link to="/uz">
                            <img src={assets.uzbek} alt="flag" className="flag" />
                        </Link>
                        <Link to="/">
                            <img src={assets.russian} alt="flag" className="flag" />
                        </Link>
                    </div>
                </div>
}