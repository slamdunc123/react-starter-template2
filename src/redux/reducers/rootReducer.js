// redux 
import { combineReducers } from 'redux';

// reducers 
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    products: productsReducer

})

export default rootReducer;
