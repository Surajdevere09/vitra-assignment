const initialState ={

    data:[],
    loading:false,
    error:false
}

export const  bestStoryReducer=(store=initialState,action)=>{

    switch(action.type){

        case "GETBESTDATA":{
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