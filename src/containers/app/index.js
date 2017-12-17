import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import e404 from '../404';
import Header from '../../components/header';
import Footer from '../../components/footer';

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={e404} />
        </Switch>
        <Footer />
    </div>
);

export default App;
