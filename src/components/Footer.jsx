import React from "react";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer(props) {

    var lan = props.exportLanguage
    const date = new Date();
    const year = date.getFullYear();

    if(lan === true) {return <footer className="footer">
        <div className="footer-first">
            <div>
                <img src="/images/logo.png" alt="Company Logo" />
                <h5>Ассоциация Врачей <br /> Узбекистана</h5>
            </div>
            <p>Copyright © {year} Медицинская Ассоциация Узбекистана. <br /> Все права защищены.</p>
        </div>
        <div className="footer-second">
            <div><CallIcon className="address-icon" /><p> +998 (71) 268-08-17</p></div>
            <div><CallIcon className="address-icon" /><p> +998 (71) 267-32-35</p></div>
            <div><LocationOnIcon className="address-icon" /><p> Тошкент шахар, Мирзо Улугбек тумани, <br /> Паркент кучаси 51 уй</p></div>
        </div>
        <div className="footer-third">
            <ul>
                <li><a href="/about">О нас</a></li>
                <li><a href="#">Направление работы</a></li>
                <li><a href="#">Информация для пациентов</a></li>
                <li><a href="#">Посещаемость</a></li>
            </ul>
        </div>
        <div className="footer-forth">
            <a href="#"><TelegramIcon className="social-icon" fontSize="large" /></a>
            <a href="#"><InstagramIcon className="social-icon" fontSize="large" /></a>
        </div>
    </footer>} else { return <footer className="footer">
        <div className="footer-first">
            <div>
                <img src="/images/logo.png" alt="Company Logo" />
                <h5>Ўзбекистон Врачлар <br /> Ассоциацияси</h5>
            </div>
            <p>Copyright © {year} Ўзбекистон Врачлар Ассоциацияси. <br /> Барча ҳуқуқлар ҳимояланган.</p>
        </div>
        <div className="footer-second">
            <div><CallIcon className="address-icon" /><p> +998 (71) 268-08-17</p></div>
            <div><CallIcon className="address-icon" /><p> +998 (71) 267-32-35</p></div>
            <div><LocationOnIcon className="address-icon" /><p> Тошкент шахар, Мирзо Улугбек тумани, <br /> Паркент кучаси 51 уй</p></div>
        </div>
        <div className="footer-third">
            <ul>
                <li><a href="/about">Биз ҳақимизда</a></li>
                <li><a href="/publication">Иш йўналиши</a></li>
                <li><a href="#">Бемор ҳақида маълумот </a></li>
                <li><a href="#">Давомат</a></li>
            </ul>
        </div>
        <div className="footer-forth">
            <a href="#"><TelegramIcon className="social-icon" fontSize="large" /></a>
            <a href="#"><InstagramIcon className="social-icon" fontSize="large" /></a>
        </div>
    </footer>}
}

export default Footer;