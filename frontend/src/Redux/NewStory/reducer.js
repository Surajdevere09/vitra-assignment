const initialState ={

    data:[]
}

export const  newStoryReducer=(store=initialState,action)=>{

    switch(action.type){

        case "GETNEWDATA":{
            return {...store, data:action.payload}
        }
        default:{
            return store
        }
    }

}