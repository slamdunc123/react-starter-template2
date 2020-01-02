import React, { Component } from 'react'

// redux 
import { connect } from 'react-redux';
import {
    readProducts
} from '../../redux/actions/productActions';

class Products extends Component {

    // get app state by getUsers dispatch
  componentDidMount() {
    this.props.readProducts();
  } 

    render() {
        const { products } = this.props.products;
        console.log(products);
        return (
            <div>
                {products.map((product, index) => (
                    <div key={index}>{product.title}</div>
                ))}
            </div>
        )
    }
}

// retrieve state from store and map to the component's props
const mapStateToProps = state => {
    return {
        products: state.products //passes products in initialState from productsReducer through to products in rootReducer
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
