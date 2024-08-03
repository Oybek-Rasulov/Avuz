import * as React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
    }

    export default function VerticalTabs() {

        
        const fileInputRef = useRef(null);
        const [selectedFile, setSelectedFile] = useState(null);

      
        const handleButtonClick = () => {
          fileInputRef.current.click();   
      
        };
      
        const handleFileChange = (event) => {   

            setSelectedFile(event.target.files[0]);
        };
      
        const handleSubmit = (event) => {
            event.preventDefault();

            const formData = new FormData();
            formData.append('image', selectedFile);
            
            axios.post('/api/uploadnews', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                console.log('File uploaded successfully',   
                response.data);
                })
                .catch(error => {
                console.error('Error uploading file', error);   

                });
          console.log(selectedFile);
        };


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [callCheck, setCallCheck] = useState(false);
    const [callCheckFile, setCallCheckFile] = useState(false);

    function callClick() {
        setCallCheck(true)
    }

    function callClickFile() {
        setCallCheckFile(true)
    }

    const [age, setAge] = React.useState('');
    const handleChangeSelect = (event) => {
        setAge(event.target.value);
      };

    return (
        <div className='admin-panel'>
            <h2 className='news-title text-white'>Добро пожаловать в админ панель!</h2>
            <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500, borderRadius: 5}}
            >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Новости" {...a11yProps(0)} />
                <Tab label="Архив" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
        <div className='news-admin'>
        <h3 className='archieve-title'>Новости</h3>
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


                    <button className='call-btn' onClick={callClick}>
                        <img src="/images/add.png" alt="add" />
                    </button>
            </div>
        </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <h3 className='archieve-title'>Архив</h3>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Архив"
                        onChange={handleChangeSelect}
                        >
                        <MenuItem value={10}>2013</MenuItem>
                        <MenuItem value={20}>2014</MenuItem>
                        <MenuItem value={30}>2015</MenuItem>
                        <MenuItem value={40}>2016</MenuItem>
                        <MenuItem value={50}>2017</MenuItem>
                        <MenuItem value={60}>2018</MenuItem>
                        <MenuItem value={70}>2019</MenuItem>
                        <MenuItem value={80}>2020</MenuItem>
                        <MenuItem value={90}>2021</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <div className='archieve-content'>
                    <button className='call-btn' onClick={callClickFile}>
                            <img src="/images/add.png" alt="add" />
                    </button>
                </div>
            </TabPanel>
            </Box>

            <form action="/uploadnews" method='post' className="admin-form" onSubmit={handleSubmit} style={callCheck ? {top: "50px",  boxShadow: "0px 0px 0px 100000px #555"} : {top: "-1000px", boxShadow: "none"}} >
                <div className='close'>
                    <button className='close-btn' onClick={() => {setCallCheck(false)}}>
                        <CloseIcon />
                    </button>
                </div>
                <input name='image' type="file" placeholder='Rasmni joylang...' className="file-input" ref={fileInputRef} onChange={handleFileChange} />
                <button className='file-btn' type='button' onClick={handleButtonClick}>
                    <AddAPhotoIcon fontSize='large'/>
                </button>
                <input name='title' required type="text" placeholder='Yangilik sarlavhasini kiriting'/>
                <textarea name='content' required type="text" placeholder='Yangilik malumotini kiriting...' />
                <button type='submit' className='admin-btn'>Yuborish</button>
            </form>

            <form action="/uploadarchieve" method='post' enctype="multipart/form-data" className="admin-form" onSubmit={handleSubmit} style={callCheckFile ? {top: "50px",  boxShadow: "0px 0px 0px 100000px #555"} : {top: "-1000px", boxShadow: "none"}} >
                <div className='close'>
                    <button className='close-btn' onClick={() => {setCallCheckFile(false)}}>
                        <CloseIcon />
                    </button>
                </div>
                <input required type="file" placeholder='Rasmni joylang...' className="file-input" ref={fileInputRef} onChange={handleFileChange} />
                <button className='file-btn' type='button' onClick={handleButtonClick}>
                    <AttachFileIcon fontSize='large'/>
                </button>
                <input type="number" placeholder='Arxiv yilini kiriting...' required />
                <button className='admin-btn' type='submit'>Yuborish</button>
            </form>
        </div>
    );
    }