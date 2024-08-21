import React from "react";
import { useState } from "react";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import News from './components/News';
import Footer from './components/Footer';

function Home() {

    const [lan, setLan] = useState()

    function checkLanguage(check) {
      setLan(check)
      // console.log(lan)
    } 

    return (
        <div className="App">
          <header className="header">
            <Navbar exportLanguage={lan} />
            <Banner importLanguage={checkLanguage} />
            <Menu exportLanguage={lan} />
            <Carousel exportLanguage={lan} />
          </header>
          <News exportLanguage={lan} />
          <Footer exportLanguage={lan} />
          {/* {console.log(checkLanguage())} */}
      </div>
    )
}

export default Home;