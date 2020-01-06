// types 
import productTypes from './productTypes';

// data 
import productData from './productData'

// READ_PRODUCTS
export const readProducts = () => {
    return {
        type: productTypes.READ_PRODUCTS,
        payload: productData
    }
}



