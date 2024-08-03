import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import DoctorsComp from "./components/DoctorsComp"
import Footer from "./components/Footer";

function Doctors() {
    return (
    <div>
        <Navbar />
        <Banner />
        <Menu />
        <DoctorsComp />
        <Footer />
    </div>
    )
}

export default Doctors;
