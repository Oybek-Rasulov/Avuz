import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import DoctorsComp from "./components/DoctorsComp"
import Footer from "./components/Footer";

function Doctors() { 
    const [lan, setLan] = useState()

    function importLanguage(check) {
        setLan(check)
        console.log(check)
    }

    return (
    <div>
        <Navbar exportLanguage={lan} />
        <Banner importLanguage={importLanguage} />
        <Menu exportLanguage={lan} />
        <DoctorsComp exportLanguage={lan} />
        <Footer exportLanguage={lan} />
    </div>
    )
}

export default Doctors;
