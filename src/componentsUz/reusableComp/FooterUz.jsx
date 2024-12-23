import assets from "../assets";
import { Link } from "react-router-dom";

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();

        return <footer className="footer">
        <div className="footer-first">
            <div>
                <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
                <h5>Ўзбекистон Врачлар <br /> Ассоциацияси</h5>
            </div>
            <p>Copyright © {year}Ўзбекистон Врачлар Ассоциацияси. <br /> Барча ҳуқуқлар ҳимояланган.</p>
        </div>
        <div className="footer-second">
            <div> <img src={assets.call} alt="icon" className="social-icon" /> <p> +998 (71) 268-08-17</p></div>
            <div> <img src={assets.call} alt="icon" className="social-icon" /> <p> +998 (71) 267-32-35</p></div>
            <div> <img src={assets.map} alt="icon" className="social-icon" /> <p> Тошкент шахар, Мирзо Улугбек тумани, <br /> Паркент кучаси 51 уй</p></div>
        </div>
        <div className="footer-third">
            <ul>
                <li><Link to="/about">Биз ҳақимизда</Link></li>
                <li><Link to="/">Иш йўналиши</Link></li>
                <li><Link to="/">Бемор ҳақида маълумот</Link></li>
                <li><Link to="/">Давомат</Link></li>
            </ul>
        </div>
        <div className="footer-forth">
            <Link to="/"> <img src={assets.telegram} alt="telegram" className="social-icon" /> </Link>
            <Link to="/"> <img src={assets.instagram} alt="instagram" className="social-icon" /> </Link>
        </div>
    </footer>
}