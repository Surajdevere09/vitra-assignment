import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WovenImageList from './TopStories';


const HomePage = () => {
  return (
    
 <Box sx={{ width: '100%',mt:8 }}>
 <Typography style={{textAlign: 'center'}} variant="h3" gutterBottom component="div">
       
        <marquee scrollamount="22" width="60%" direction="right" height="30%">
        Top Stories
    </marquee>
      </Typography>
      <WovenImageList />

 </Box>


  
  )
}

export default HomePage