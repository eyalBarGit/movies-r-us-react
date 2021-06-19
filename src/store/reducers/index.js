import { combineReducers } from 'redux';
import mediaReducer from './media.reducer'


const rootReducer = combineReducers({
  mediaReducer: mediaReducer,
})

export default rootReducer;