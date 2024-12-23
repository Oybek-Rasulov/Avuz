import Carousel from 'react-material-ui-carousel';
import assets from '../assets';

export default function Example() {

        var items = [
            {
                imageURL: assets.carousel1,
                content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."
            },
            {
                imageURL: assets.carousel2,
                content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."

            },
            {
                imageURL: assets.carousel3,
                content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."

            },
            {
                imageURL: assets.carousel4,
                content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."

            }
        ]
    // }else {
    //     var items = [
    //         {
    //             imageURL: "images/carousel1.png",
    //             content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."
    //         },
    //         {
    //             imageURL: "images/carousel2.png",
    //             content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."

    //         },
    //         {
    //             imageURL: "images/carousel3.png",
    //             content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."

    //         },
    //         {
    //             imageURL: "images/carousel4.png",
    //             content: "Ўзбекистон Шифокорлар Ассоциацияси 1992-йилда ташкил этилган бўлиб, нодавлат нотижорат жамоавий ташкилот ҳисобланади."

    //         }
    //     ]
    // }

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
                    <a href="/about" className='carousel-btn'>Перейти</a>
                </div>    
            </div>     
        </div>
        )
}  
