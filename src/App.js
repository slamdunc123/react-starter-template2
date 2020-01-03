import React from 'react';

// routing 
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';

// styles 
import './App.css';

function App() {
  return (
    <Router basename={'/'}>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
