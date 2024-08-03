import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import MembersComp from "./components/MembersComp"
import Footer from "./components/Footer";

function Member() {
    return (
    <div>
        <Navbar />
        <Banner />
        <Menu />
        <MembersComp />
        <Footer />
    </div>
    )
}

export default Member;