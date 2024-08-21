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
          <TabList onChange={handleChange}>
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
        <TabPanel style={{display: "flex", position: "absolute", top: "100px", position: "absolute", top: "100px"}} value="1">
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
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="2">
          <div className='journal-image'>
                  <Link to="http://test.avuz.uz/uploads/files/1-2014_.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                  </Link>
              </div>
              <div className='journal-image'>
                  <Link to="http://test.avuz.uz/uploads/files/2-2014_print.pdf" target="_blank">
                    <img src="/images/archieve/archieve1.png" alt="Journal image" />
                  </Link>
              </div>
              <div className='journal-image'>
                  <Link to="http://test.avuz.uz/uploads/files/1414413506_3-2014ch-b.pdf" target="_blank">
                    <img src="/images/archieve/archieve1.png" alt="Journal image" />
                  </Link>
              </div>
              <div className='journal-image'>
                  <Link to="http://test.avuz.uz/uploads/files/1420461402_4-2014-7.pdf" target="_blank">
                    <img src="/images/archieve/archieve1.png" alt="Journal image" />
                  </Link>
              </div>
        </TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="3">
        <div className='journal-image'>
                  <Link to="http://test.avuz.uz/uploads/files/1-2015.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                  </Link>
              </div>
              <div className='journal-image'>
                  <Link to="http://test.avuz.uz/uploads/files/2-2015.pdf" target="_blank">
                    <img src="/images/archieve/archieve1.png" alt="Journal image" />
                  </Link>
              </div>
        </TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="4">
          <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/2-2016.pdf" target="_blank">
                        <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/4-2016.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
        </TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="5">
          <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/1-2017.pdf" target="_blank">
                        <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/2-2017.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/3-2017.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/4-2017.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
        </TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="6">
          <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/1-2018.pdf" target="_blank">
                        <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/2-2018.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/3-2018.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="http://test.avuz.uz/uploads/files/4-2018.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
        </TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="7">No file yet</TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="8">  
                <div className='journal-image'>
                    <Link to="https://iamoybekworkbusiness.files.wordpress.com/2022/03/d091d090d092d0a31-2021.pdf" target="_blank">
                        <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
        </TabPanel>
        <TabPanel style={{display: "flex", position: "absolute", top: "100px"}} value="9">
        <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                        <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
                <div className='journal-image'>
                    <Link to="https://djejnjjdjdjdart.files.wordpress.com/2022/04/d091d090d092d0a32-2020.pdf" target="_blank">
                      <img src="/images/archieve/archieve1.png" alt="Journal image" />
                    </Link>
                </div>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
}




export default ArchieveComp;