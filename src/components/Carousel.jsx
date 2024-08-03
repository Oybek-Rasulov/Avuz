import React from 'react';
import Carousel from 'react-material-ui-carousel';


function Example(props)
{
    var items = [
        {
            imageURL: "images/carousel1.png",
            content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."
        },
        {
            imageURL: "images/carousel2.png",
            content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."

        },
        {
            imageURL: "images/carousel3.png",
            content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."

        },
        {
            imageURL: "images/carousel4.png",
            content: "Ассоциация врачей Узбекистана основана в 1992 году и считается неправительственной, некоммерческой коллективной организацией."

        }
    ]

    return (
        
        <Carousel className='carousel-main' style={{ whiteSpace: 'nowrap' }}>
            
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
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
            <img style={style} src={props.item.imageURL} alt="Carousel Image" />
            <div id='carousel-content'>
                <div>
                    <h3 className='carousel-text'>{props.item.content}</h3>
                    <a href="/about" className='carousel-btn'>Перейти</a>
                </div>    
            </div>     
        </div>
        )
}  

export default Example;