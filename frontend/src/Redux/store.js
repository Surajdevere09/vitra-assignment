import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import  { topStoryReducer } from  "./GetStory/reducer";
import thunk from "redux-thunk";
import { newStoryReducer } from "./NewStory/reducer";
import { bestStoryReducer } from "./BestStory/reducer";



const rootReducer = combineReducers({

   topStories:topStoryReducer,
   newStories:newStoryReducer,
   bestStories:bestStoryReducer
})

const logger =applyMiddleware(thunk)

const composeEnhancer= compose(logger,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export const store = createStore(rootReducer,composeEnhancer) 