import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app';
import React from 'react';
import {Provider} from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import PhotoFormContainer from './photo/photo_form_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser === null) {
      replace('/login');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={_redirectIfNotLoggedIn} >
          <Route path="/create" component={ PhotoFormContainer } onEnter={_redirectIfNotLoggedIn}/>
        </Route>
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn}/>
      </Router>
    </Provider>
  );
};

export default Root;
