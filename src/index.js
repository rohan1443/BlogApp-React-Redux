import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path='/posts/new' component={PostNew} />
          <Route path='/posts/:id' component={PostsShow} />
          <Route path='/' component={PostIndex} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
