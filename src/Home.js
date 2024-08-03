import React from "react";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import News from './components/News';
import Partner from './components/Partner';
import Footer from './components/Footer';

function Home() {
    return (
        <div className="App">
        <header className="header">
          <Navbar />
          <Banner />
          <Menu />
          <Carousel />
        </header>
        <News />
        <Partner />
        <Footer />
      </div>
    )
}

export default Home;