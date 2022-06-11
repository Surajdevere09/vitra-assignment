const initialState ={

    data:[]
}

export const  topStoryReducer=(store=initialState,action)=>{

    switch(action.type){

        case "GETTOPDATA":{
            return {...store, data:action.payload}
        }
        default:{
            return store
        }
    }

}