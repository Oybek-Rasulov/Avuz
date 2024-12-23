import NavbarUz from "../componentsUz/reusableComp/NavbarUz";
import MiniNavbarUz from "../componentsUz/reusableComp/MiniNavbarUz";
import BannerUz from "../componentsUz/reusableComp/BannerUz";
import MenuUz from "../componentsUz/reusableComp/MenuUz";
import CarouselUz from "../componentsUz/Home/CarouselUz";
import NewsUz from "../componentsUz/Home/NewsUz";
import FooterUz from '../componentsUz/reusableComp/FooterUz';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {

    const matches = useMediaQuery('(max-width:1040px)');

    return (
        <>
            {matches ? <MiniNavbarUz /> : <NavbarUz />}
            <BannerUz />
            <MenuUz />
            <CarouselUz />
            <NewsUz />
            <FooterUz />
        </>
    )
}
