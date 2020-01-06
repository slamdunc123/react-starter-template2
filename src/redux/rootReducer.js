// redux 
import { combineReducers } from 'redux';

// reducers 
import productsReducer from './product/productsReducer';
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    users: userReducer

})

export default rootReducer;
