import axios from "axios"

// export const getStoryAction =(data)=>{

//     return {
//     type:"GETDATA",
//     payload:data,
//     }
// }

export const getTopStoryAction =(data)=>{

    return {
    type:"GETTOPDATA",
    payload:data,
    }
}


export const getData = ()=>(dispatch)=>{

axios.get("http://localhost:3001/topStories").then((res)=>{
//console.log('res:', res.data)
dispatch(getTopData(res.data))
})
}

export const getTopData = (arr)=>(dispatch)=>{
    //console.log(arr)
    axios.get("http://localhost:3001/stories").then((res)=>{
    //console.log('res:', res.data)
  let newarr=[];
  for(let i=0; i<res.data.length; i++){
   
    for(let j=0; j<arr.length; j++){
        if(arr.includes(res.data[i]._id)){
            newarr.push(res.data[i])
            break;
        }
    }
  }
 // console.log('newarr:', newarr)
    dispatch(getTopStoryAction(newarr))
    })
    }