import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WovenImageList from './TopStories';


const HomePage = () => {
  return (
    
 <Box sx={{ width: '100%',mt:8 }}>
 <Typography style={{textAlign: 'center'}} variant="h3" gutterBottom component="div">
        Top Stories
      </Typography>
      <WovenImageList />

 </Box>


  
  )
}

export default HomePage