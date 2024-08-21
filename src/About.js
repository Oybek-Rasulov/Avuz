import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutComp from './components/AboutComp';
import Menu from './components/Menu';
import Footer from './components/Footer';

function About(props) {

  const [lan, setLan] = useState(null)

  function importAboutLanguage(aboutCheck) {
    setLan(aboutCheck)
  }

  return (
    <div>
      <Navbar exportLanguage={lan} />
      <Banner importLanguage={importAboutLanguage} />
      <Menu exportLanguage={lan} />
      <AboutComp exportLanguage={lan} />
      <Footer exportLanguage={lan} />
    </div>
  );
}

export default About;
