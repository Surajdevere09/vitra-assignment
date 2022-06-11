const initialState ={

    data:[]
}

export const  bestStoryReducer=(store=initialState,action)=>{

    switch(action.type){

        case "GETBESTDATA":{
            return {...store, data:action.payload}
        }
        default:{
            return store
        }
    }

}