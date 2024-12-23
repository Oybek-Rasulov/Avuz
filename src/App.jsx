import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Staff from "./pages/Staff";
import History from "./pages/History";
import Law from "./pages/Law";
import Members from "./pages/Members";
import Archieve from "./pages/Archieve";
// Uz
import HomeUz from "./pagesUz/HomeUz";
import AboutUz from "./pagesUz/AboutUz";
import ContactUz from "./pagesUz/ContactUz";
import StaffUz from "./pagesUz/StaffUz";
import HistoryUz from "./pagesUz/HistoryUz";
import LawUz from "./pagesUz/LawUz";
import MembersUz from "./pagesUz/MembersUz";
import ArchieveUz from "./pagesUz/ArchieveUz";



import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/publication" element={<History />} />
        <Route path="/doctors" element={<Law />} />
        <Route path="/members" element={<Members />} />
        <Route path="/archieve" element={<Archieve />} />

        <Route path="/uz" element={<HomeUz />} />
        <Route path="/aboutUz" element={<AboutUz />} />
        <Route path="/contactUz" element={<ContactUz />} />
        <Route path="/staffUz" element={<StaffUz />} />
        <Route path="/publicationUz" element={<HistoryUz />} />
        <Route path="/doctorsUz" element={<LawUz />} />
        <Route path="/membersUz" element={<MembersUz />} />
        <Route path="/archieveUz" element={<ArchieveUz />} />
      </Routes>
    </BrowserRouter>
  )
}

