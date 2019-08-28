import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
