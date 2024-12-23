import assets from "../assets";
import { Link } from "react-router-dom";

export default function Footer() {

    // var lan = props.exportLanguage
    const date = new Date();
    const year = date.getFullYear();

    // if(lan === true) {
        return <footer className="footer">
        <div className="footer-first">
            <div>
                <Link to="/"><img src={assets.logo} alt="Logo" /></Link>
                <h5>Ассоциация Врачей <br /> Узбекистана</h5>
            </div>
            <p>Copyright © {year} Медицинская Ассоциация Узбекистана. <br /> Все права защищены.</p>
        </div>
        <div className="footer-second">
            <div> <img src={assets.call} alt="icon" className="social-icon" /> <p> +998 (71) 268-08-17</p></div>
            <div> <img src={assets.call} alt="icon" className="social-icon" /> <p> +998 (71) 267-32-35</p></div>
            <div> <img src={assets.map} alt="icon" className="social-icon" /> <p> Тошкент шахар, Мирзо Улугбек тумани, <br /> Паркент кучаси 51 уй</p></div>
        </div>
        <div className="footer-third">
            <ul>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/">Направление работы</Link></li>
                <li><Link to="/">Информация для пациентов</Link></li>
                <li><Link to="/">Посещаемость</Link></li>
            </ul>
        </div>
        <div className="footer-forth">
            <Link to="/"> <img src={assets.telegram} alt="telegram" className="social-icon" /> </Link>
            <Link to="/"> <img src={assets.instagram} alt="instagram" className="social-icon" /> </Link>
        </div>
    </footer>
    // } else { return <footer className="footer">
    //     <div className="footer-first">
    //         <div>
    //             <img src="/images/logo.png" alt="Company Logo" />
    //             <h5>Ўзбекистон Врачлар <br /> Ассоциацияси</h5>
    //         </div>
    //         <p>Copyright © {year} Ўзбекистон Врачлар Ассоциацияси. <br /> Барча ҳуқуқлар ҳимояланган.</p>
    //     </div>
    //     <div className="footer-second">
    //         <div><CallIcon className="address-icon" /><p> +998 (71) 268-08-17</p></div>
    //         <div><CallIcon className="address-icon" /><p> +998 (71) 267-32-35</p></div>
    //         <div><LocationOnIcon className="address-icon" /><p> Тошкент шахар, Мирзо Улугбек тумани, <br /> Паркент кучаси 51 уй</p></div>
    //     </div>
    //     <div className="footer-third">
    //         <ul>
    //             <li><a href="/about">Биз ҳақимизда</a></li>
    //             <li><a href="/publication">Иш йўналиши</a></li>
    //             <li><a href="#">Бемор ҳақида маълумот </a></li>
    //             <li><a href="#">Давомат</a></li>
    //         </ul>
    //     </div>
    //     <div className="footer-forth">
    //         <a href="#"><TelegramIcon className="social-icon" fontSize="large" /></a>
    //         <a href="#"><InstagramIcon className="social-icon" fontSize="large" /></a>
    //     </div>
    // </footer>}
}