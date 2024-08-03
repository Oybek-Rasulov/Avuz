import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function DoctorsComp() {
  return (
    <div className='archieve'>
        <ImageList style={{ width: "100%", height: "100%" }}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.author}</span>}
                position="below"
            />
            </ImageListItem>
        ))}
        </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: '/images/doctors/law1.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law2.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law3.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law4.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law5.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law6.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law7.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law8.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law9.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law10.png',
    title: 'Ассоциация Врачей Узбекистана basil',
  },
  {
    img: '/images/doctors/law11.png',
    title: 'Ассоциация Врачей Узбекистана star',
  },
  {
    img: '/images/doctors/law12.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law13.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law14.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law15.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law16.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law17.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law18.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law19.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law20.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law21.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
  {
    img: '/images/doctors/law22.png',
    title: 'Ассоциация Врачей Узбекистана',
  },
];
