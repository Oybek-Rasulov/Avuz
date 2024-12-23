import { Link } from 'react-router-dom';
import assets from '../assets';

export default function Menu() {
        return <div className="menu">
            <ul>
                <li> <Link to="/uz"> <img src={assets.home} alt="icon" className='menu-icon' /> Асосий  </Link></li>
                <li> <Link to="/aboutUz"> <img src={assets.about} alt="icon" className='menu-icon' /> Биз ҳақимизда </Link></li>
                <li> <Link to="http://test.avuz.uz/" target="_blank"> <img src={assets.training} alt="icon" className='menu-icon' /> Онлайн тренинг </Link></li>
                <li> <Link to="/contactUz"> <img src={assets.contact} alt="icon" className='menu-icon' /> Боғланиш</Link></li>
            </ul>
        </div>
}
