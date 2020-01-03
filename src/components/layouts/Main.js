import React from 'react'

// routing 
import { Switch, Route } from 'react-router-dom';

// pages 
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route exact path='/products' component={ProductsPage} />
            </Switch>
        </div>
    )
}

export default Main;
