import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './containers/home';
import About from './containers/about';
import WeAreOpenSource from './containers/about/openSource';
import Profile from './containers/profile';
import e404 from './containers/404';
import ProfileEdit from './containers/profile/Edit';
import Join from './containers/join';
import SubmitFormContainer from './containers/submit/form';
import SubmitEditContainer from './containers/submit/edit';
import SubmitViewContainer from './containers/submit';
import ChallengesContainer from './containers/challenges';
import SingleChallengeContainer from './containers/challenges/single';
import LearningPageContainer from './containers/learning';
import EasterEgg from './containers/easter';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about/open-source" component={WeAreOpenSource} />
                <Route exact path="/about" component={About} />
                <Route exact path="/join" component={Join} />
                <Route exact path="/learning" component={LearningPageContainer} />
                <Route exact path="/challenges" component={ChallengesContainer} />
                <Route exact path="/418" component={() => <EasterEgg type="418" />} />
                <Route path="/submit/new/:number" component={SubmitFormContainer} />
                <Route path="/submit/edit/:id" component={SubmitEditContainer} />
                <Route path="/submit/:id" component={SubmitViewContainer} />
                <Route path="/challenge/:number/:title" component={SingleChallengeContainer} />
                <Route path="/profile/edit" component={ProfileEdit} />
                <Route path="/profile/:username?" component={Profile} />
                <Route path="/g/:username" component={Profile} />
                <Route component={e404} />
            </Switch>
        );
    }
}

export default withRouter(Routes);
