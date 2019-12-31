import React from 'react'

// routing 
import { Switch, Route } from 'react-router-dom';

// pages 
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
        </div>
    )
}

export default Main;
