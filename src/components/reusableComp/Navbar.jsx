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
                            <li><Link to="/staff" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Президиум</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Совет</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Областные отделения</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Коллективные члены</Link></li>
                            <li><Link to="/contact" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Как с нами связаться </Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(2)} onMouseLeave={() => mouseHoverLeave()} >
                        Направление работы 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 2 ? <ul className="hover-ul dropTwo">
                            <li><Link to="http://test.avuz.uz/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Онлайн обучение</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Проектная деятельность</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Бюллетень</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Вестник врача общей практики</Link></li>
                            <li><Link to="/publication" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> История Ассоциации врачей Узбекистана</Link></li>
                            <li><Link to="/doctors" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Права врачей</Link></li>
                            <li><Link to="/members" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Члены совета</Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(3)} onMouseLeave={() => mouseHoverLeave()} >
                        Информация для пациентов 
                        <img src={assets.down} className="nav-icon" />
                        {hover === 3 ? <ul className="hover-ul dropTwo">
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика осложнений раневой болезни</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика диабета</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика сердечно-сосудистых заболеваний</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Профилактика хронического гепатита</Link></li>
                            <li><Link to="/" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Интерактивный сервис</Link></li>
                        </ul> : ""}
                    </li>
                    <li className="dropdown" onMouseEnter={() => mouseHoverHandle(4)} onMouseLeave={() => mouseHoverLeave()} >
                        Журнал Вестник 
                        <img src={assets.down} className="nav-icon" /> 
                        {hover === 4 ? <ul className="hover-ul dropTwo">
                            <li><Link to="/archieve" target="_blank" className="dropdown-link"> <img src={assets.finger} alt="finger" className="dropdown-icon" /> Журнал Вестник</Link></li>
                        </ul> : ""}   
                    </li>
                </ul>

                <div className="nav-icons">
                    <Link to="#"><img src={assets.telegram} alt="telegram" className="social-icon" /></Link>
                    <Link to="#"><img src={assets.instagram} alt="instagram" className="social-icon" /></Link>
                </div>
            </nav>
        } 
    
//     else {return <div>
//         <nav className="navbar">
//                 <ul className="nav-ul">
//                     <li><a href="#" onMouseEnter={mouseHoverOnOne} onMouseLeave={mouseHoverOffOne}>Тузилиши <ArrowDropDownCircleIcon className="nav-icon" /></a></li>
//                     <li><a href="#" onMouseEnter={mouseHoverOnTwo} onMouseLeave={mouseHoverOffTwo}>Иш йўналиши <ArrowDropDownCircleIcon className="nav-icon" /></a></li>
//                     <li><a href="#" onMouseEnter={mouseHoverOnThree} onMouseLeave={mouseHoverOffThree} >Бемор ҳақида маълумот <ArrowDropDownCircleIcon className="nav-icon" /></a></li>
//                     <li><a href="#" onMouseEnter={mouseHoverOnFour} onMouseLeave={mouseHoverOffFour}>Журнал <ArrowDropDownCircleIcon className="nav-icon" /> </a></li>
//                 </ul>

//                 <div className="nav-icons">
//                     <a href="#"><TelegramIcon /></a>
//                     <a href="#"><InstagramIcon /></a>
//                 </div>
//             </nav>

//             {checkHoverOne && <ul className="hover-ul dropOne" onMouseEnter={mouseHoverOnOne} onMouseLeave={mouseHoverOffOne}>
//                         <li><Link to="/staff">Президиум</Link></li>
//                         <li><a href="#">Маслаҳат</a></li>
//                         <li><a href="#">Минтақавий филиаллар</a></li>
//                         <li><a href="#">Коллектив аъзолар</a></li>
//                         <li><Link to="/contact">Биз билан қандай боғланиш мумкин</Link></li>    
//                     </ul>}

//             {checkHoverTwo && <ul className="hover-ul dropTwo" onMouseEnter={mouseHoverOnTwo} onMouseLeave={mouseHoverOffTwo}>
//                         <li><Link target={"_blank"} to="http://test.avuz.uz/">Онлайн тренинг</Link></li>
//                         <li><a href="#">Лойиҳа фаолияти</a></li>
//                         <li><a href="#">Ахборотнома</a></li>
//                         <li><a href="#">Умумий амалиёт шифокори бюллетени</a></li>
//                         <li><Link to="/publication">Узбекистон врачлар ассоциацияси тарихи</Link></li>
//                         <li><Link to="/doctors">Шифокорлар хукуклари</Link></li>
//                         <li><Link to="/members">Кенгаш аъзолари</Link></li>

//                     </ul>}

//             {checkHoverThree && <ul className="hover-ul dropThree" onMouseEnter={mouseHoverOnThree} onMouseLeave={mouseHoverOffThree}>
//                         <li><a href="#">Яра касаллигининг асоратларининг олдини олиш</a></li>
//                         <li><a href="#">Қандли диабетнинг олдини олиш</a></li>
//                         <li><a href="#">Юрак-қон томир касалликларининг олдини олиш</a></li>
//                         <li><a href="#">Сурункали гепатитнинг олдини олиш</a></li>
//                         <li><a href="#">Интерактив хизмат</a></li>
//                     </ul>}

//             {checkHoverFour && <ul className="hover-ul dropFour" onMouseEnter={mouseHoverOnFour} onMouseLeave={mouseHoverOffFour}>
//                         <li><Link to="/archieve">Журнал</Link></li>
//                     </ul>}

//         <div className="media-navbar">
//                 <Box sx={{ flexGrow: 1, backgroundColor: "#9195F6"}}>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <div style={{display: menu? "none" : "block"}}>
//                             <IconButton 
//                                 onClick={clickMenu}
//                                 size="large"
//                                 edge="start"
//                                 color="inherit"
//                                 aria-label="menu"
//                                 sx={{ mr: 2 }}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                         </div>
//                         <div style={{display: menu? "block" : "none"}}>
//                             <IconButton 
//                                 onClick={clickMenu}
//                                 size="large"
//                                 edge="start"
//                                 color="inherit"
//                                 aria-label="menu"
//                                 sx={{ mr: 2 }}
//                             >
//                                 <CloseIcon />
//                             </IconButton>
//                         </div>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
//                     </Typography>
//                     <Link className="icon" to="#"><TelegramIcon /></Link>
//                     <Link className="icon" to="#"><InstagramIcon /></Link>
//                     </Toolbar>
//                 </AppBar>
//                 </Box>

//             <div className="tree" style={menu? { transform: "translateX(0)", display: "block", transition: "1s ease-in"} : null}>
//                 <Box sx={{ minHeight: 352, minWidth: 250 }}>
//                     <RichTreeView items={MUI_X_PRODUCTS} />
//                 </Box>
//             </div>
                
//             </div>
//         </div>
// }