import NavbarUz from "../componentsUz/reusableComp/NavbarUz";
import MiniNavbarUz from "../componentsUz/reusableComp/MiniNavbarUz";
import BannerUz from "../componentsUz/reusableComp/BannerUz";
import MenuUz from "../componentsUz/reusableComp/MenuUz";
import FooterUz from '../componentsUz/reusableComp/FooterUz';
import useMediaQuery from '@mui/material/useMediaQuery';
import assets from "../components/assets";

export default function Law() {

    const matches = useMediaQuery('(max-width:1040px)');
    
    return (
        <>
        {matches ? <MiniNavbarUz /> : <NavbarUz />}
            <BannerUz />
            <MenuUz />
            <h2 className="law-title">Ўзбекистон Врачлар Ассоциацияси</h2>
            <div className='law-content'>
                <img src={assets.law1} alt="law" />
                <img src={assets.law2} alt="law" />
                <img src={assets.law3} alt="law" />
                <img src={assets.law4} alt="law" />
                <img src={assets.law5} alt="law" />
                <img src={assets.law6} alt="law" />
                <img src={assets.law7} alt="law" />
                <img src={assets.law8} alt="law" />
                <img src={assets.law9} alt="law" />
                <img src={assets.law10} alt="law" />
                <img src={assets.law11} alt="law" />
                <img src={assets.law12} alt="law" />
                <img src={assets.law13} alt="law" />
                <img src={assets.law14} alt="law" />
                <img src={assets.law15} alt="law" />
                <img src={assets.law16} alt="law" />
                <img src={assets.law17} alt="law" />
                <img src={assets.law18} alt="law" />
                <img src={assets.law19} alt="law" />
                <img src={assets.law20} alt="law" />
                <img src={assets.law21} alt="law" />
                <img src={assets.law22} alt="law" />
            </div>
            <FooterUz />
        </>
  );
}
