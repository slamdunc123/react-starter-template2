// types 
import productTypes from './productsTypes';

// data 
import productData from './productsData'

// READ_PRODUCTS
export const readProducts = () => {
    return {
        type: productTypes.READ_PRODUCTS,
        payload: productData
    }
}



