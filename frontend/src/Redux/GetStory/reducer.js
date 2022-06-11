const initialState ={

    data:[],
    loading:false,
    error:false
}

export const  topStoryReducer=(store=initialState,action)=>{

    switch(action.type){

        case "GETTOPDATA":{
            return {...store, data:action.payload,loading:false,error:false}
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