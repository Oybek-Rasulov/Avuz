import { Link } from 'react-router-dom';

export default function NewsList({ image, text }) {

        return (
            <div className="new">
                <img src={image} alt="news" />
                <p>{text}</p>
                <Link to="/aboutUz" className='new-link'>Кўпроқ</Link>
            </div>
        )
    }