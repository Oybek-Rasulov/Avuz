import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

    const [checkHoverOne, setCheckHoverOne] = useState(false);
    const [checkHoverTwo, setCheckHoverTwo] = useState(false);
    const [checkHoverThree, setCheckHoverThree] = useState(false);
    const [checkHoverFour, setCheckHoverFour] = useState(false);

    function mouseHoverOnOne() {
        setCheckHoverOne(true)
    }

    function mouseHoverOffOne() {
        setCheckHoverOne(false)
    }

    function mouseHoverOnTwo() {
        setCheckHoverTwo(true)
    }

    function mouseHoverOffTwo() {
        setCheckHoverTwo(false)
    }

    function mouseHoverOnThree() {
        setCheckHoverThree(true)
    }

    function mouseHoverOffThree() {
        setCheckHoverThree(false)
    }

    function mouseHoverOnFour() {
        setCheckHoverFour(true)
    }

    function mouseHoverOffFour() {
        setCheckHoverFour(false)
    }

    const MUI_X_PRODUCTS = [
        {
          id: 'grid',
          label: 'Структура',
          children: [
            { id: 'grid-community', label: 'Президиум' },
            { id: 'grid-1', label: 'Совет' },
            { id: 'grid-2', label: 'Областные отделения' },
            { id: 'grid-3', label: 'Коллективные члены' },
            { id: 'grid-pro', label: 'Как с нами связаться' },
          ],
        },
        {
          id: 'pickers',
          label: 'Направление работы',
          children: [
            { id: '1', label: 'Онлайн обучение' },
            { id: '2', label: 'Проектная деятельность' },
            { id: '3', label: 'Бюллетень' },
            { id: '4', label: 'Вестник врача общей практики' },
            { id: '5', label: 'Узбекистон врачлар ассоциацияси тарихи' },
            { id: '6', label: 'Шифокорлар хукуклари' },
            { id: '7', label: 'Кенгаш аъзолари' },
          ],
        },
        {
          id: 'charts',
          label: 'Информация для пациентов',
          children: [
            { id: 'a1', label: "Профилактика осложнений раневой болезни" },
            { id: 'a2', label: "Профилактика диабета" },
            { id: 'a3', label: "Профилактика сердечно-сосудистых заболеваний" },
            { id: 'a4', label: "Профилактика хронического гепатита" },
            { id: 'a5', label: "Интерактивный сервис" }
        ],
        },
        {
          id: 'tree-view',
          label: 'Посещаемость',
          children: [
            { id: 'tree-view-community', label: 'Посещаемость' }
        ],
        },
      ];

      const [menu, setMenu] = useState(false);

      function clickMenu() {
        setMenu(!menu)
      }
      

    return <div>
        <nav className="navbar">
                <ul className="nav-ul">
                    <li><a href="#" onMouseEnter={mouseHoverOnOne} onMouseLeave={mouseHoverOffOne}>Структура <ArrowDropDownCircleIcon className="nav-icon" /></a></li>
                    <li><a href="#" onMouseEnter={mouseHoverOnTwo} onMouseLeave={mouseHoverOffTwo}>Направление работы <ArrowDropDownCircleIcon className="nav-icon" /></a></li>
                    <li><a href="#" onMouseEnter={mouseHoverOnThree} onMouseLeave={mouseHoverOffThree} >Информация для пациентов <ArrowDropDownCircleIcon className="nav-icon" /></a></li>
                    <li><a href="#" onMouseEnter={mouseHoverOnFour} onMouseLeave={mouseHoverOffFour}>Посещаемость <ArrowDropDownCircleIcon className="nav-icon" /> </a></li>
                </ul>

                <div className="nav-icons">
                    <a href="#"><TelegramIcon /></a>
                    <a href="#"><InstagramIcon /></a>
                </div>
            </nav>

            {checkHoverOne && <ul className="hover-ul dropOne" onMouseEnter={mouseHoverOnOne} onMouseLeave={mouseHoverOffOne}>
                        <li><Link to="/staff">Президиум</Link></li>
                        <li><a href="#">Совет</a></li>
                        <li><a href="#">Областные отделения</a></li>
                        <li><a href="#">Коллективные члены</a></li>
                        <li><Link to="/contact">Как с нами связаться</Link></li>    
                    </ul>}

            {checkHoverTwo && <ul className="hover-ul dropTwo" onMouseEnter={mouseHoverOnTwo} onMouseLeave={mouseHoverOffTwo}>
                        <li><Link target={"_blank"} to="http://test.avuz.uz/">Онлайн обучение</Link></li>
                        <li><a href="#">Проектная деятельность</a></li>
                        <li><a href="#">Бюллетень</a></li>
                        <li><a href="#">Вестник врача общей практики</a></li>
                        <li><Link target={"_blank"} to="/publication">Узбекистон врачлар ассоциацияси тарихи</Link></li>
                        <li><Link target={"_blank"} to="/doctors">Шифокорлар хукуклари</Link></li>
                        <li><Link target={"_blank"} to="/members">Кенгаш аъзолари</Link></li>

                    </ul>}

            {checkHoverThree && <ul className="hover-ul dropThree" onMouseEnter={mouseHoverOnThree} onMouseLeave={mouseHoverOffThree}>
                        <li><a href="#">Профилактика осложнений раневой болезни</a></li>
                        <li><a href="#">Профилактика диабета</a></li>
                        <li><a href="#">Профилактика сердечно-сосудистых заболеваний</a></li>
                        <li><a href="#">Профилактика хронического гепатита</a></li>
                        <li><a href="#">Интерактивный сервис</a></li>
                    </ul>}

            {checkHoverFour && <ul className="hover-ul dropFour" onMouseEnter={mouseHoverOnFour} onMouseLeave={mouseHoverOffFour}>
                        <li><a href="#">Посещаемость</a></li>
                    </ul>}

        <div className="media-navbar">
                <Box sx={{ flexGrow: 1, backgroundColor: "#9195F6"}}>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{display: menu? "none" : "block"}}>
                            <IconButton 
                                onClick={clickMenu}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div style={{display: menu? "block" : "none"}}>
                            <IconButton 
                                onClick={clickMenu}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Link className="icon" to="#"><TelegramIcon /></Link>
                    <Link className="icon" to="#"><InstagramIcon /></Link>
                    </Toolbar>
                </AppBar>
                </Box>

            <div className="tree" style={menu? { transform: "translateX(0)", display: "block", transition: "1s ease-in"} : null}>
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                    <RichTreeView items={MUI_X_PRODUCTS} />
                </Box>
            </div>
                
            </div>
        </div>
}

export default Navbar; 