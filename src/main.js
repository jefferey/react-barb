import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MainView from './containers/MainView';
import AboutView from './components/AboutView';
import barbApp from './reducers';

let store = createStore(barbApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
  <Provider store={store}>
	<Router history={browserHistory}>
	  <Route path="/" component={App}>
	    <IndexRoute component={MainView} />
	    <Route path="about" component={AboutView} />
	  </Route>
	</Router>
  </Provider>
), document.getElementById('app'))
