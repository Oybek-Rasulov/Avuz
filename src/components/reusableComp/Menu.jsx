import { Link } from 'react-router-dom';
import assets from '../assets';

export default function Menu() {
        return <div className="menu">
            <ul>
                <li> <Link to="/"> <img src={assets.home} alt="icon" className='menu-icon' /> Главный  </Link></li>
                <li> <Link to="/about"> <img src={assets.about} alt="icon" className='menu-icon' /> О нас </Link></li>
                <li> <Link to="http://test.avuz.uz/"> <img src={assets.training} alt="icon" className='menu-icon' /> Онлайн обучение </Link></li>
                <li> <Link to="/contact"> <img src={assets.contact} alt="icon" className='menu-icon' /> Контакт</Link></li>
            </ul>
        </div>
}
