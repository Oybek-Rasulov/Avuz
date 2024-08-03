import React from "react";
import { Link } from 'react-router-dom';
import OutboundIcon from '@mui/icons-material/Outbound';

function Menu() {
    return <div className="menu">
        <ul>
            <li> <Link to="/"><OutboundIcon className="link" /> Главный  </Link></li>
            <li> <Link to="/about"><OutboundIcon className="link" /> О нас </Link></li>
            <li> <Link to="http://test.avuz.uz/" target="_blank"><OutboundIcon className="link" /> Онлайн обучение </Link></li>
            <li> <Link to="/contact"><OutboundIcon className="link" /> Контакт </Link></li>
        </ul>
    </div>
}

export default Menu;