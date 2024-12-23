import NavbarUz from "../componentsUz/reusableComp/NavbarUz";
import MiniNavbarUz from "../componentsUz/reusableComp/MiniNavbarUz";
import BannerUz from "../componentsUz/reusableComp/BannerUz";
import MenuUz from "../componentsUz/reusableComp/MenuUz";
import FooterUz from '../componentsUz/reusableComp/FooterUz';
import { Link } from "react-router-dom";
import assets from "../components/assets";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function History() {
    const matches = useMediaQuery('(max-width:1040px)');

    return <>
        {matches ? <MiniNavbarUz /> : <NavbarUz />}
        <BannerUz />
        <MenuUz />
        <div className="archieve">
            <Link to="https://drive.google.com/file/d/1d269pg2aYJvJsqUcrCtAfKmH0NPn5qHc/view?usp=drive_link" target="_blank"><img src={assets.publication} alt="file" /></Link>
        </div>
        <FooterUz /> 
    </>
}
