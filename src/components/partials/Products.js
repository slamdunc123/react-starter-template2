import React, { Component } from 'react'

// redux 
import { connect } from 'react-redux';
import {
    readProducts
} from '../../redux/products/productsActions';

// styles 
import './Products.scss';

class Products extends Component {

    // get app state by getUsers dispatch
    componentDidMount() {
        this.props.readProducts();
    }

    render() {
        const { products } = this.props;
        console.log(products);
        return (
            <div className='products-container'>
                {products.map((product, index) => (
                    <div className='product-container' key={index}>{product.title}</div>
                ))}
            </div>
        )
    }
}

// retrieve state from store and map to the component's props
const mapStateToProps = state => {
    return {
        products: state.products.products //passes products in initialState from productsReducer through to products in rootReducer
        //state.products is ref to products in rootReducer - state.products.products is ref to products in productsReducer
    }
}

// dispatch actions to state in store
const mapDispatchToProps = dispatch => {
    return {
        readProducts: () => {
            dispatch(readProducts());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
