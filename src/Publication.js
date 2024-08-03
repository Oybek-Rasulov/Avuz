import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import PublicationComp from "./components/PublicationComp"
import Footer from "./components/Footer";

function Publication() {
    return (
    <div>
        <Navbar />
        <Banner />
        <Menu />
        <PublicationComp />
        <Footer />
    </div>
    )
}

export default Publication;