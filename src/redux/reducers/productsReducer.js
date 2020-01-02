// types 
import actionTypes from '../actions/actionTypes';

// set initial state 
const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        // read products 
        case actionTypes.READ_PRODUCTS:
           
            return {
                ...state,
                products: action.payload
            }

        default:
        return state;
    }
}

export default productsReducer;