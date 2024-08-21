import React from "react";
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Iframe from 'react-iframe';

function ContactComp(props) {
    const mapURL = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374.57447376146814!2d69.31605443993135!3d41.31765351425865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef57c0a69536d%3A0xfd663d304ff830e1!2sMalaka%20Oshirish!5e0!3m2!1suz!2s!4v1721640960410!5m2!1suz!2s"
    var lan = props.exportLanguage

    if(lan === true) 
    {    return <div className="contact">
            <h2 className="news-title">Контакт</h2>
            <div className="contact-main">
                <div className="contact-content">
                    <div>
                        <CallIcon style={{marginRight: "1.5rem", fontSize: "2rem"}} />
                        <p>+998 71 268 08 17</p>
                    </div>
                    <div>
                        <CallIcon style={{marginRight: "1.5rem", fontSize: "2rem"}} />
                        <p>+998 71 267 32 35</p>
                    </div>
                    <div>
                        <LocationOnIcon style={{marginRight: "1.5rem", fontSize: "2rem"}} />
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
        </div>} else {
                return <div className="contact">
                <h2 className="news-title">Алоқа</h2>
                <div className="contact-main">
                    <div className="contact-content">
                        <div>
                            <CallIcon style={{marginRight: "1.5rem", fontSize: "2rem"}} />
                            <p>+998 71 268 08 17</p>
                        </div>
                        <div>
                            <CallIcon style={{marginRight: "1.5rem", fontSize: "2rem"}} />
                            <p>+998 71 267 32 35</p>
                        </div>
                        <div>
                            <LocationOnIcon style={{marginRight: "1.5rem", fontSize: "2rem"}} />
                            <p>Тошкент шахар, Мирщо Улугбек тумани, Паркент кучаси 51 уй</p>
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
}

export default ContactComp;