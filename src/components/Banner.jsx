import React from "react";
import { useEffect, useRef, useState } from "react";
import PublicIcon from '@mui/icons-material/Public';

var checkLan = true

function Banner(props) {

    const [language, setLanguage] = useState(false);
    
    function handleLangRu() {
        props.importLanguage(true)
        setLanguage(true) 

    }
    
    function handleLangUz() {
        props.importLanguage(false)
        // console.log(props.importLanguage)
        setLanguage(false)

    }

    if( language === true) {
        return  <div className="banner">
                    <div className="banner-content">
                        <img src="/images/logo.png" alt="Company logo" width={100} />
                        <h1>Ассоциация Врачей <br /> Узбекистана</h1>
                    </div>
                    <div className="banner-details">
                        <p>+998 (71) 268-08-17</p>
                        <button onClick={handleLangUz}>
                            <PublicIcon />
                            UZB
                        </button>
                        <button onClick={handleLangRu}>
                            <PublicIcon />
                            RUS
                        </button>
                    </div>
                </div>
    } else {
        return  <div className="banner">
                    <div className="banner-content">
                        <img src="/images/logo.png" alt="Company logo" width={100} />
                        <h1>Ўзбекистон Врачлар <br /> Ассоциацияси</h1>
                    </div>
                    <div className="banner-details">
                        <p>+998 (71) 268-08-17</p>
                        <button onClick={handleLangUz}>
                            <PublicIcon />
                            UZB
                        </button>
                        <button onClick={handleLangRu}>
                            <PublicIcon />
                            RUS
                        </button>
                    </div>
                </div>
    }
    
}

export default Banner;
export { checkLan } 