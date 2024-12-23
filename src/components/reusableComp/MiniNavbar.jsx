import assets from "../assets";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MiniNavbar() {
    const [ menu, setMenu ] = useState(0);
    const [ isOpen, setIsOpen ] = useState(false);

    function handleMenu(number) {
        if(number === menu) {
            setMenu(0)
        }else {
            setMenu(number)
        }
    }

    function handleIsOpen() {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            <div className="mini-nav">
                <button className="menu-bar" onClick={handleIsOpen}><img src={assets.menu} alt="menu" className="social-icon" /></button>
                <div className="social">
                    <img src={assets.telegram} alt="telegram" className="social-icon" />
                    <img src={assets.instagram} alt="instagram" className="social-icon" />
                </div>
            </div>   

            <div className={isOpen? "media-menu open" : "media-menu close"}>

                <ul>
                    <li>
                         <button onClick={() => handleMenu(1)}><img src={assets.next} alt="arrow" className={menu === 1 ? "menu-arrow" : ""} /> Структура </button>
                         
                         {menu === 1 ? 
                            <ul className="sub-menu">
                                <li> <Link to="/staff">Президиум</Link> </li>
                                <li> <Link to="/">Совет</Link> </li>
                                <li> <Link to="/">Областные отделения</Link> </li>
                                <li> <Link to="/staff">Коллективные член </Link> </li>
                                <li> <Link to="/contact">Как с нами связаться</Link> </li>
                            </ul>
                        : ""}
                    </li>
                    <li>
                         <button onClick={() => handleMenu(2)}><img src={assets.next} alt="arrow" className={menu === 2 ? "menu-arrow" : ""} /> Направление работы  </button>
                         { menu === 2 ? <ul className="sub-menu">
                            <li> <Link to="http://test.avuz.uz/">Онлайн обучение</Link> </li>
                            <li> <Link to="/">Проектная деятельность</Link> </li>
                            <li> <Link to="/">Бюллетень</Link> </li>
                            <li> <Link to="/">Вестник врача общей практики</Link> </li>
                            <li> <Link to="/publication">История Ассоциации врачей Узбекистана</Link> </li>
                            <li> <Link to="/doctors">Права врачей</Link> </li>
                            <li> <Link to="/members">Члены совета</Link> </li>
                         </ul> 
                         : "" }
                    </li>
                    <li>
                         <button onClick={() => handleMenu(3)}><img src={assets.next} alt="arrow" className={menu === 3 ? "menu-arrow" : ""} /> Информация для пациентов </button>
                         { menu === 3 ? <ul className="sub-menu">
                            <li> <Link to="/staff">Профилактика осложнений раневой болезни</Link></li>
                            <li> <Link to="/staff">Профилактика диабета</Link> </li>
                            <li> <Link to="/staff">Профилактика сердечно-сосудистых заболеваний</Link> </li>
                            <li> <Link to="/staff">Профилактика хронического гепатита</Link> </li>
                            <li> <Link to="/staff">Интерактивный сервис</Link> </li>
                         </ul> 
                         : "" }
                    </li>
                    <li>
                         <button onClick={() => handleMenu(4)}><img src={assets.next} alt="arrow" className={menu === 4 ? "menu-arrow" : ""} /> Журнал Вестник </button>
                         { menu === 4 ? <ul className="sub-menu">
                            <li> <Link to="/staff">Журнал Вестник</Link> </li>
                         </ul> 
                         : "" }
                    </li>
                </ul>

                <button onClick={handleIsOpen}><img src={assets.remove} alt="remove" className="remove" /></button>
            </div>
        </>
    )
}
