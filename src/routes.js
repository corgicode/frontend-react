import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import e404 from './containers/404';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={e404} />
            </Switch>
        );
    }
}

export default Routes;
