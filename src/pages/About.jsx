import Navbar from "../components/reusableComp/Navbar";
import { MiniNavbar } from "../components/reusableComp/MiniNavbar";
import Banner from "../components/reusableComp/Banner";
import Menu from "../components/reusableComp/Menu";
import AboutUs from "../components/About/AboutUs";
import Footer from '../components/reusableComp/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {

    const matches = useMediaQuery('(max-width:1040px)');

    return (
        <>
            {matches ? <MiniNavbar /> : <Navbar />}
            <Banner />
            <Menu />
            <AboutUs />
            <Footer />
        </>
    )
}