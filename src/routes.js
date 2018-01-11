import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Profile from './containers/profile';
import e404 from './containers/404';
import ProfileEdit from './containers/profile/Edit';
import Signup from './containers/signup';
import ChallengesContainer from './containers/challenges';
import SingleChallengeContainer from './containers/challenges/single';
import LearningPageContainer from './containers/learning';

class Routes extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/about" component={ About } />
                <Route path="/signup" component={ Signup } />
                <Route path="/learning" component={ LearningPageContainer } />
                <Route path="/challenges" component={ ChallengesContainer } />
                <Route path="/challenge/:number/:title" component={ SingleChallengeContainer } />
                <Route path="/profile/edit" component={ ProfileEdit } />
                <Route path="/profile/:username?" component={ Profile } />
                <Route path="/g/:username" component={ Profile } />
                <Route component={ e404 } />
            </Switch>
        );
    }
}

export default Routes;
