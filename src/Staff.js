import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import StaffComp from "./components/StaffComp"
import Footer from "./components/Footer";

function Staff() {

    const [lan, setLan] = useState(null)

    function importLanguage(check) {
        setLan(check)
    }

    return (
        <div>
            <Navbar exportLanguage={lan} />
            <Banner importLanguage={importLanguage} />
            <Menu exportLanguage={lan} />
            <StaffComp exportLanguage={lan} />
            <Footer exportLanguage={lan} />
        </div>
    )
}

export default Staff;