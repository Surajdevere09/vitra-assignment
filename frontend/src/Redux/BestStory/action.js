import axios from "axios"

export const getBestStoryAction =(data)=>{

    return {
    type:"GETBESTDATA",
    payload:data,
    }
}


export const getData3 = ()=>(dispatch)=>{

axios.get("http://localhost:3001/beststories").then((res)=>{
//console.log('res:', res.data)
dispatch(getBestData(res.data))
})
}

export const getBestData = (arr)=>(dispatch)=>{
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
    dispatch(getBestStoryAction(newarr))
    })
    }