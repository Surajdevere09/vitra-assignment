import * as React from 'react';
import "./styles/topStories.css"
import { useDispatch, useSelector } from 'react-redux';
import { getData, getTopData } from '../Redux/GetStory/action';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ServerError from './ServerError';



export default function WovenImageList() {
    const [page,setPage]= React.useState(1)
const dispatch = useDispatch()
const {data,loading,error} =useSelector((store)=>store.topStories);
const navigate = useNavigate()
console.log('data:',error)

    React.useEffect(()=>{

        dispatch(getData(page))
     


    },[dispatch,page])

    const handlePage=(e,p) => {
        setPage(p)
        
               }


if(loading){
    return (
        <Box sx={{ display: 'flex',mt:20,ml:85 }}>
          <CircularProgress />
        </Box> 
    
    )
}
else if(error){
    return (
        <ServerError />
      
    )
   }
else{

return (

    <div> 
   <div className="topContainer">
 
 {data && data.map((e)=>
 <div title="Click here to know more" key={e._id} style={{marginBottom:"100px"}}>
     <a href={e.url} style={{textDecoration:"none",color:"black"}}> 
     <img style={{ width:"100%", height:"100%"}}   src={e.image} />
       
     <Typography style={{color:"blue"}} variant="subtitle1" gutterBottom component="div">
          Posted by {e.by}
       </Typography>
       <Typography style={{color:"red"}} variant="subtitle1" gutterBottom component="div">
          {e.time.slice(0,10)} at {e.time.slice(11,16) }
       </Typography>
     <Typography style={{textAlign: 'center'}} variant="h6" gutterBottom component="div">
         {e.title}
       </Typography>
       </a>
      </div>
 
      
 )}
 </div>
    <Stack style={{marginTop:"80px",marginBottom:"80px"}} alignItems="center" spacing={2}>
      
       <Pagination onChange={handlePage} count={10} page={page}  color="primary" />
      
     </Stack>
   </div>
 )
}

  

}


