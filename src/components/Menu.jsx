import React from "react";
import { Link } from 'react-router-dom';
import OutboundIcon from '@mui/icons-material/Outbound';
import checkLan from './Banner';

function Menu(props) {

    var lan = props.exportLanguage
    console.log(lan)


    if(lan === true) {
        return <div className="menu">
            <ul>
                <li> <Link to="/"><OutboundIcon className="link" /> Главный  </Link></li>
                <li> <Link to="/about"><OutboundIcon className="link" /> О нас </Link></li>
                <li> <Link to="http://test.avuz.uz/" target="_blank"><OutboundIcon className="link" /> Онлайн обучение </Link></li>
                <li> <Link to="/contact"><OutboundIcon className="link" /> Контакт {checkLan}</Link></li>
            </ul>
        </div>
    } else {
        return <div className="menu">
        <ul>
            <li> <Link to="/"><OutboundIcon className="link" /> Асосий  </Link></li>
            <li> <Link to="/about"><OutboundIcon className="link" /> Биз ҳақимизда </Link></li>
            <li> <Link to="http://test.avuz.uz/" target="_blank"><OutboundIcon className="link" /> Онлайн тренинг </Link></li>
            <li> <Link to="/contact"><OutboundIcon className="link" /> Боғланиш {checkLan}</Link></li>
        </ul>
    </div> 
    }
}

export default Menu;