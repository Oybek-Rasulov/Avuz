import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import StaffComp from "./components/StaffComp"
import Footer from "./components/Footer";

function Staff() {
    return (
        <div>
        <Navbar />
        <Banner />
        <Menu />
        <StaffComp />
        <Footer />
        </div>
    )
}

export default Staff;