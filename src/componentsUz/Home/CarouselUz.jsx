import Carousel from 'react-material-ui-carousel';
import assets from '../assets';
import { Link } from 'react-router-dom';

export default function Example() {

        var items = [
            {
                imageURL: assets.carousel1,
                content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."
            },
            {
                imageURL: assets.carousel2,
                content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."

            },
            {
                imageURL: assets.carousel3,
                content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."

            },
            {
                imageURL: assets.carousel4,
                content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."

            }
        ]

    return (
        <Carousel className='carousel-main' style={{ whiteSpace: 'nowrap' }}>  
            { items.map( (item, i) => <Item key={i} item={item} /> ) }
        </Carousel>
    )
}

function Item(props)
{
    const style = {
        backgroundSize: "cover",
        height: "500px",
        width: "100%",
        overflow: "hidden"

    }
    return (
        <div style={{position: "relative"}}>
            <img style={style} src={props.item.imageURL} alt="Nature" />
            <div id='carousel-content'>
                <div>
                    <h3 className='carousel-text'>{props.item.content}</h3>
                    <Link to="/aboutUz" className='carousel-btn'>Бориш</Link>
                </div>    
            </div>     
        </div>
        )
}  
