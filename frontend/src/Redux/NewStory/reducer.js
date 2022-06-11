const initialState ={

    data:[],
    loading:false,
    error:false
}

export const  newStoryReducer=(store=initialState,action)=>{

    switch(action.type){

        case "GETNEWDATA":{
            return {...store, data:action.payload}
        }
        case "LOADING":{
            return {...store, loading:true,error:false}
        }
        case "ERROR":{
            return {...store,loading:false,error:true}
        }
        default:{
            return store
        }
    }

}