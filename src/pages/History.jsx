import { Link } from "react-router-dom";
import assets from "../components/assets";
import Navbar from "../components/reusableComp/Navbar";
import { MiniNavbar } from "../components/reusableComp/MiniNavbar";
import Banner from "../components/reusableComp/Banner";
import Menu from "../components/reusableComp/Menu";
import Footer from '../components/reusableComp/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function History() {
    const matches = useMediaQuery('(max-width:1040px)');

    return <>
        {matches ? <MiniNavbar /> : <Navbar />}
        <Banner />
        <Menu />
        <div className="archieve">
            <Link to="https://drive.google.com/file/d/1d269pg2aYJvJsqUcrCtAfKmH0NPn5qHc/view?usp=drive_link" target="_blank"><img src={assets.publication} alt="file" /></Link>
        </div>
        <Footer /> 
    </>
}
