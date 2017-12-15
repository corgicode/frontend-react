import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Header from '../../components/header';
import Footer from '../../components/footer';

const App = () => (
    <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Footer />
    </div>
);

export default App;
