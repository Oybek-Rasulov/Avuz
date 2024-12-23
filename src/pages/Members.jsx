import MembersDetail from "../components/Members/MembersDetail"
import Navbar from "../components/reusableComp/Navbar";
import { MiniNavbar } from "../components/reusableComp/MiniNavbar";
import Banner from "../components/reusableComp/Banner";
import Menu from "../components/reusableComp/Menu";
import Footer from '../components/reusableComp/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Members() {
    
    const matches = useMediaQuery('(max-width:1040px)');

    return (
        <>
            {matches ? <MiniNavbar /> : <Navbar />}
            <Banner />
            <Menu />
            <MembersDetail />
            <Footer />
        </>
    )
}
