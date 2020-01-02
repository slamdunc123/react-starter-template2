// types 
import actionTypes from './actionTypes';

// data 
import productsData from './productsData'

// READ_PRODUCTS
export const readProducts = () => {
    return {
        type: actionTypes.READ_PRODUCTS,
        payload: productsData
    }
}



