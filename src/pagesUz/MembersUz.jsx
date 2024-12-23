import NavbarUz from "../componentsUz/reusableComp/NavbarUz";
import MiniNavbarUz from "../componentsUz/reusableComp/MiniNavbarUz";
import BannerUz from "../componentsUz/reusableComp/BannerUz";
import MenuUz from "../componentsUz/reusableComp/MenuUz";
import MembersDetailUz from "../componentsUz/Members/MembersDetailUz";
import FooterUz from '../componentsUz/reusableComp/FooterUz';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Members() {
    
    const matches = useMediaQuery('(max-width:1040px)');

    return (
        <>
            {matches ? <MiniNavbarUz /> : <NavbarUz />}
            <BannerUz />
            <MenuUz />
            <MembersDetailUz />
            <FooterUz />
        </>
    )
}
