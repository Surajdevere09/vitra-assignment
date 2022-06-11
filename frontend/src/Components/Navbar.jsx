import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
const navigate =useNavigate()

    const handleNavigate=(e)=>{
        if(e.target.innerText === "TopStories"){
            navigate("/")
        }
        else if(e.target.innerText === "NewStories"){
            navigate("/newStories")
        }
        else if(e.target.innerText === "BestStories"){
            navigate("/bestStories")
        }
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div onClick={(e)=>handleNavigate(e)} style={{display: 'flex'}}>
          <Typography style={{cursor: 'pointer'}} sx={{ml:1}} variant="h6" component="div" >TopStories</Typography>
          <Typography style={{cursor: 'pointer'}}  sx={{ml:4}} variant="h6" component="div" >NewStories</Typography>
          <Typography style={{cursor: 'pointer'}}  sx={{ml:4}} variant="h6" component="div" >BestStories</Typography>
             </div>
          

          <Button style={{position: "absolute",right:"0"}} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
