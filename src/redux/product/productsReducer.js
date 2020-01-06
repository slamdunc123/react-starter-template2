// types 
import productTypes from './productTypes';

// set initial state 
const initialState = {
    products: []
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        // read products 
        case productTypes.READ_PRODUCTS:

            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}

export default productsReducer;