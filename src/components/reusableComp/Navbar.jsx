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
                        Структура 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 1 ? <ul className="hover-ul dropTwo" onMouseEnter={() => mouseHoverHandle(1)} onMouseLeave={() => mouseHoverLeave()}>
                            <li><Link to="/staff" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Президиум</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Совет</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Областные отделения</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Коллективные члены</Link></li>
                            <li><Link to="/contact" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Как с нами связаться </Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(2)} onMouseLeave={() => mouseHoverLeave()} >
                        Направление работы 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 2 ? <ul className="hover-ul dropTwo">
                            <li><Link to="http://test.avuz.uz/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Онлайн обучение</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Проектная деятельность</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Бюллетень</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Вестник врача общей практики</Link></li>
                            <li><Link to="/publication" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> История Ассоциации врачей Узбекистана</Link></li>
                            <li><Link to="/doctors" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Права врачей</Link></li>
                            <li><Link to="/members" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Члены совета</Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(3)} onMouseLeave={() => mouseHoverLeave()} >
                        Информация для пациентов 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 3 ? <ul className="hover-ul dropTwo">
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика осложнений раневой болезни</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика диабета</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика сердечно-сосудистых заболеваний</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика хронического гепатита</Link></li>
                            <li><Link to="/" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Интерактивный сервис</Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(4)} onMouseLeave={() => mouseHoverLeave()} >
                        Журнал Вестник 
                        <img src={assets.down} className="nav-icon" /> 
                        {hover === 4 ? <ul className="hover-ul dropTwo">
                            <li><Link to="/archieve" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Журнал Вестник</Link></li>
                        </ul> : ""}   
                    </li>
                </ul>

                <div className="nav-icons">
                    <Link to="#"><img src={assets.telegram} alt="telegram" className="social-icon" /></Link>
                    <Link to="#"><img src={assets.instagram} alt="instagram" className="social-icon" /></Link>
                </div>
            </nav>
        } 
