import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import ArchieveComp from "./components/ArchieveComp";
import Footer from "./components/Footer";


function Archieve() {
    const [lan, setLan] = useState()

    function importLanguage(check) {
        setLan(check)
        console.log(check)
    }

    return <div>
        <Navbar exportLanguage={lan} />
        <Banner  importLanguage={importLanguage} /> 
        <Menu exportLanguage={lan} />
        <ArchieveComp exportLanguage={lan} />
        <Footer exportLanguage={lan} />
    </div>
}

export default Archieve;