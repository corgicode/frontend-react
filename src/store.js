import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

const history = createHistory();

history.listen(location => {
    window && window.scrollTo(0, 0);
    window && window.ga && window.ga('send', 'pageview', location.pathname);
});

const _gaq = window._gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXX-X']);
_gaq.push(['_trackPageview']);

(() => {
    if (document) {
        const ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = (document.location.protocol === 'https:' ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    }
})();

export { history };

const initialState = {};
const enhancers = [];
const middleware = [
    thunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(
    rootReducer,
    initialState,
    composedEnhancers
);
