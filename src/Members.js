import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import MembersComp from "./components/MembersComp"
import Footer from "./components/Footer";

function Member() {

    const [lan, setLan] = useState(null)

    function importLanguage(check) {
        setLan(check)
    }

    return (
    <div>
        <Navbar exportLanguage={lan} />
        <Banner importLanguage={importLanguage} />
        <Menu exportLanguage={lan} />
        <MembersComp exportLanguage={lan} />
        <Footer exportLanguage={lan} />
    </div>
    )
}

export default Member;