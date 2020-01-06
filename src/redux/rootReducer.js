// redux 
import { combineReducers } from 'redux';

// reducers 
import productsReducer from './products/productsReducer';
import userReducer from './users/usersReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    users: userReducer

})

export default rootReducer;
