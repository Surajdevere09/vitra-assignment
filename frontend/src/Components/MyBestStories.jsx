import * as React from 'react';
import "./styles/topStories.css"
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { getData2 } from '../Redux/NewStory/action';
import "./styles/newStories.css"




export default function BestStories() {

const dispatch = useDispatch()
const {data} =useSelector((store)=>store.newStories);
const navigate = useNavigate()
console.log('data:', data)

    React.useEffect(()=>{

        dispatch(getData2())
     


    },[dispatch])



  return (
    <div style={{marginTop:"80px"}}>
     <Typography style={{textAlign: 'center'}} variant="h3" gutterBottom component="div">
        Best Stories
      </Typography>
      <div  className="topContainer2">

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
  </div>
  );
}

