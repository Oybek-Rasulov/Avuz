import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom';

function ArchieveComp() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


    return <div className='archieve'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="2013" value="1" />
            <Tab label="2014" value="2" />
            <Tab label="2015" value="3" />
            <Tab label="2016" value="4" />
            <Tab label="2017" value="5" />
            <Tab label="2018" value="6" />
            <Tab label="2019" value="7" />
            <Tab label="2020" value="8" />
            <Tab label="2021" value="9" />
          </TabList>
        </Box>
        <TabPanel style={{display: "flex"}} value="1">
            <div className='journal-image'>
                <Link>
                    <img src="/images/archieve/archieve1.png" alt="Journal image" />
                </Link>
            </div>
            <div className='journal-image'>
                <Link><img src="/images/archieve/archieve1.png" alt="Journal image" /></Link>
            </div>
            <div className='journal-image'>
                <Link><img src="/images/archieve/archieve1.png" alt="Journal image" /></Link>
            </div>
            <div className='journal-image'>
                <Link><img src="/images/archieve/archieve1.png" alt="Journal image" /></Link>
            </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
}




export default ArchieveComp;