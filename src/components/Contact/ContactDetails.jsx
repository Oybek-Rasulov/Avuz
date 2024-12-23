import Iframe from 'react-iframe';
import assets from '../assets';

export default function ContactComp() {
    const mapURL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374.57447376146814!2d69.31605443993135!3d41.31765351425865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57c0a69536d%3A0xfd663d304ff830e1!2sMalaka%20Oshirish!5e0!3m2!1suz!2s!4v1721640960410!5m2!1suz!2s"

    // if(lan === true) 
         return <div className="contact">
            <h2 className="news-title">Контакт</h2>
            <div className="contact-main">
                <div className="contact-content">
                    <div>
                        <img src={assets.call} alt="icon" className='social-icon' />
                        <p>+998 71 268 08 17</p>
                    </div>
                    <div>
                        <img src={assets.call} alt="icon" className='social-icon' />
                        <p>+998 71 267 32 35</p>
                    </div>
                    <div>
                        <img src={assets.map} alt="icon" className='social-icon' />
                        <p>г. Ташкент, Мирщо-Улугбекский район, ул. Паркентская, 51</p>
                    </div>
                </div>
                <div className="contact-map">
                <Iframe
                url={mapURL}
                width="500px"
                height="300px"
                id="myMap"
                display="initial"
                position="relative"
            />
                </div>
            </div>
        </div>
}