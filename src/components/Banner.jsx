import React from "react";
import PublicIcon from '@mui/icons-material/Public';

function Banner() {
    return <div className="banner">
        <div className="banner-content">
            <img src="/images/logo.png" alt="Company logo" width={100} />
            <h1>Ассоциация Врачей <br /> Узбекистана</h1>
        </div>
        <div className="banner-details">
            <p>+998 (71) 268-08-17</p>
            <button>
                <PublicIcon />
                UZB
            </button>
            <button>
                <PublicIcon />
                RUS
            </button>
        </div>
    </div>
}

export default Banner;