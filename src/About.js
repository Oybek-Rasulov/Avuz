import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutComp from './components/AboutComp';
import Menu from './components/Menu';
import Footer from './components/Footer';

function About() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Menu />
      <AboutComp />
      <Footer />
    </div>
  );
}

export default About;
