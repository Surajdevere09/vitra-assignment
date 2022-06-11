import axios from "axios"

export const getNewStoryAction =(data)=>{

    return {
    type:"GETNEWDATA",
    payload:data,
    }
}

export const Loading =()=>{
    return {
type: "LOADING",
       
    }
}
export const Error =()=>{
    return {
type: "ERROR",
       
    }
}


export const getData2 = (page)=>(dispatch)=>{

axios.get(`https://vitra-news.herokuapp.com/newstories?page=${page}&size=6`).then((res)=>{
//console.log('res:', res.data)
dispatch(getNewData(res.data))
})
}

export const getNewData = (arr)=>(dispatch)=>{
    //console.log(arr)
    axios.get("https://vitra-news.herokuapp.com/stories").then((res)=>{
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
    dispatch(getNewStoryAction(newarr))
    })
    }