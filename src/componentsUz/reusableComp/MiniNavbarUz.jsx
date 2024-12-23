import assets from "../assets";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MiniNavbarUz() {
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
                         <button onClick={() => handleMenu(1)}><img src={assets.next} alt="arrow" className={menu === 1 ? "menu-arrow" : ""} /> Тузилиши </button>
                         
                         {menu === 1 ? 
                            <ul className="sub-menu">
                                <li> <Link to="/staffUz">Президиум</Link> </li>
                                <li> <Link to="/uz">Маслаҳат</Link> </li>
                                <li> <Link to="/uz">Минтақавий филиаллар</Link> </li>
                                <li> <Link to="/staffUz">Коллектив аъзолар </Link> </li>
                                <li> <Link to="/contactUz">Биз билан қандай боғланиш мумкин</Link> </li>
                            </ul>
                        : ""}
                    </li>
                    <li>
                         <button onClick={() => handleMenu(2)}><img src={assets.next} alt="arrow" className={menu === 2 ? "menu-arrow" : ""} /> Иш йўналиши   </button>
                         { menu === 2 ? <ul className="sub-menu">
                            <li> <Link to="http://test.avuz.uz/">Онлайн тренинг</Link> </li>
                            <li> <Link to="/uz">Лойиҳа фаолияти</Link> </li>
                            <li> <Link to="/uz">Ахборотнома</Link> </li>
                            <li> <Link to="/uz">Умумий амалиёт шифокори бюллетени</Link> </li>
                            <li> <Link to="/publicationUz">Узбекистон врачлар ассоциацияси тарихи</Link> </li>
                            <li> <Link to="/doctorsUz">Шифокорлар хукуклари</Link> </li>
                            <li> <Link to="/membersUz">Кенгаш аъзолари</Link> </li>
                         </ul> 
                         : "" }
                    </li>
                    <li>
                         <button onClick={() => handleMenu(3)}><img src={assets.next} alt="arrow" className={menu === 3 ? "menu-arrow" : ""} /> Бемор ҳақида маълумот </button>
                         { menu === 3 ? <ul className="sub-menu">
                            <li> <Link to="/staffUz">Яра касаллигининг асоратларининг олдини олиш</Link></li>
                            <li> <Link to="/staffUz">Қандли диабетнинг олдини олиш</Link> </li>
                            <li> <Link to="/staffUz">Юрак-қон томир касалликларининг олдини олиш</Link> </li>
                            <li> <Link to="/staffUz">Сурункали гепатитнинг олдини олиш</Link> </li>
                            <li> <Link to="/staffUz">Интерактив хизмат</Link> </li>
                         </ul> 
                         : "" }
                    </li>
                    <li>
                         <button onClick={() => handleMenu(4)}><img src={assets.next} alt="arrow" className={menu === 4 ? "menu-arrow" : ""} /> Журнал </button>
                         { menu === 4 ? <ul className="sub-menu">
                            <li> <Link to="/archieveUz">Журнал </Link> </li>
                         </ul> 
                         : "" }
                    </li>
                </ul>

                <button onClick={handleIsOpen}><img src={assets.remove} alt="remove" className="remove" /></button>
            </div>
        </>
    )
}
