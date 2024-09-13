import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Archieve from './Archieve';
import Staff from './Staff';
import Admin from './Admin';
import Publication from './Publication';
import Doctors from './Doctors';
import Members from './Members';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />  
        <Route path="/contact" element={<Contact />} />  
        <Route path="/archieve" element={<Archieve />} />  
        <Route path="/staff" element={<Staff />} />
        <Route path="/avuzAdmin" element={<Admin />} />  
        <Route path="/publication" element={<Publication />} />  
        <Route path="/doctors" element={<Doctors />} />  
        <Route path="/members" element={<Members />} />  

      </Routes>
    </BrowserRouter>
  );
}

export default App;
