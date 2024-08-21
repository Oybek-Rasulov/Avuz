import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MultiActionAreaCard(props) {

var lan = props.exportLanguage

  if(lan === true) {return (
    <div className='news'>
        <h3 className='news-title'>Новости</h3>
        <div className='news-content'>
                <Card sx={{ maxWidth: 345 }} className="card">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="/images/newsOne.png"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary" className='news-text'>
                        Конференцияда иштирок этган 70 та делегат - иштирокчилари Ўзбекистон врачлар ассоциациясининг 2017-2019 йилдаги ҳисоботини тинглаб қонкарли деб бахолашди...
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href="/about" className="link">Узнать больше</a>
                    </Button>
                </CardActions>
                </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsTwo.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    70 делегатов-участников, принявших участие в конференции, оценили отчет Ассоциации врачей Узбекистана за 2017-2019 годы как интересный...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Узнать больше</a>
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsThree.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    Примите самые искренние поздравления с присвоением высшей правительственной награды – прославленного Героя России!...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Узнать больше</a>
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className='news-content'>
            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsOne.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    Конференцияда иштирок этган 70 та делегат - иштирокчилари Ўзбекистон врачлар ассоциациясининг 2017-2019 йилдаги ҳисоботини тинглаб қонкарли деб бахолашди...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Узнать больше</a>
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsTwo.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    70 делегатов-участников, принявших участие в конференции, оценили отчет Ассоциации врачей Узбекистана за 2017-2019 годы как интересный...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Узнать больше</a>
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsThree.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    Примите самые искренние поздравления с присвоением высшей правительственной награды – прославленного Героя России!...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Узнать больше</a>
                </Button>
            </CardActions>
            </Card>
        </div>
    </div>
  );} else {return (
    <div className='news'>
        <h3 className='news-title'>Янгиликлар</h3>
        <div className='news-content'>
                <Card sx={{ maxWidth: 345 }} className="card">
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="/images/newsOne.png"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography variant="body2" color="text.secondary" className='news-text'>
                        Конференцияда иштирок этган 70 та делегат - иштирокчилари Ўзбекистон врачлар ассоциациясининг 2017-2019 йилдаги ҳисоботини тинглаб қонкарли деб бахолашди...
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a href="/about" className="link">Батафсил маълумот олинг</a>
                    </Button>
                </CardActions>
                </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsTwo.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    70 делегатов-участников, принявших участие в конференции, оценили отчет Ассоциации врачей Узбекистана за 2017-2019 годы как интересный...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Батафсил маълумот олинг</a>
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsThree.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    Примите самые искренние поздравления с присвоением высшей правительственной награды – прославленного Героя России!...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Батафсил маълумот олинг</a>
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className='news-content'>
            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsOne.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    Конференцияда иштирок этган 70 та делегат - иштирокчилари Ўзбекистон врачлар ассоциациясининг 2017-2019 йилдаги ҳисоботини тинглаб қонкарли деб бахолашди...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Батафсил маълумот олинг</a>
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsTwo.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    70 делегатов-участников, принявших участие в конференции, оценили отчет Ассоциации врачей Узбекистана за 2017-2019 годы как интересный...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Батафсил маълумот олинг</a>
                </Button>
            </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }} className="card">
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/images/newsThree.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary" className='news-text'>
                    Примите самые искренние поздравления с присвоением высшей правительственной награды – прославленного Героя России!...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="/about" className="link">Батафсил маълумот олинг</a>
                </Button>
            </CardActions>
            </Card>
        </div>
    </div>
  );}
}
