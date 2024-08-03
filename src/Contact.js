import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import ContactComp from "./components/ContactComp"
import Footer from "./components/Footer";

function Contact() {
    return (
    <div>
        <Navbar />
        <Banner />
        <Menu />
        <ContactComp />
        <Footer />
    </div>
    )
}

export default Contact;