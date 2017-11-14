import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, browserHistory } from 'react-router-dom';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

const routes = (
  <BrowserRouter history={browserHistory}>
    <Route path="/" component={App}></Route>
  </BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
