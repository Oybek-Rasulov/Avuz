import { useState } from "react";
import { Link } from "react-router-dom";
import assets from "../assets";

export default function Navbar() {
    const [hover, setHover] = useState(0);

    function mouseHoverHandle(check) {
        setHover(check)   
    }

    function mouseHoverLeave() {
        setHover(0)
    }

    return <nav className="navbar">
                <ul className="nav-ul">
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(1)} onMouseLeave={() => mouseHoverLeave()} >
                        Тузилиши 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 1 ? <ul className="hover-ul dropTwo" onMouseEnter={() => mouseHoverHandle(1)} onMouseLeave={() => mouseHoverLeave()}>
                            <li><Link to="/staffUz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Президиум</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Маслаҳат</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Минтақавий филиаллар</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Коллектив аъзолар</Link></li>
                            <li><Link to="/contactUz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Биз билан қандай боғланиш мумкин </Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(2)} onMouseLeave={() => mouseHoverLeave()} >
                        Иш йўналиши
                        <img src={assets.down} className="nav-icon" />
                        {hover === 2 ? <ul className="hover-ul dropTwo">
                            <li><Link to="http://test.avuz.uz/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Онлайн тренинг</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Лойиҳа фаолияти</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Ахборотнома</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Умумий амалиёт шифокори бюллетени</Link></li>
                            <li><Link to="/publicationUz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Узбекистон врачлар ассоциацияси тарихи</Link></li>
                            <li><Link to="/doctorsUz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Шифокорлар хукуклари</Link></li>
                            <li><Link to="/membersUz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Кенгаш аъзолари</Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(3)} onMouseLeave={() => mouseHoverLeave()} >
                        Бемор ҳақида маълумот 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 3 ? <ul className="hover-ul dropTwo">
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Яра касаллигининг асоратларининг олдини олиш</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Қандли диабетнинг олдини олиш</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Юрак-қон томир касалликларининг олдини олиш</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Сурункали гепатитнинг олдини олиш</Link></li>
                            <li><Link to="/uz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Интерактив хизмат</Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(4)} onMouseLeave={() => mouseHoverLeave()} >
                        Журнал  
                        <img src={assets.down} className="nav-icon" /> 
                        {hover === 4 ? <ul className="hover-ul dropTwo">
                            <li><Link to="/archieveUz" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Журнал</Link></li>
                        </ul> : ""}   
                    </li>
                </ul>

                <div className="nav-icons">
                    <Link to="/uz"><img src={assets.telegram} alt="telegram" className="social-icon" /></Link>
                    <Link to="/uz"><img src={assets.instagram} alt="instagram" className="social-icon" /></Link>
                </div>
            </nav>
        } 
    