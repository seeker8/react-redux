import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Route, Link } from 'react-router-dom';
import { CommentBox } from './CommentBox';
import { CommentList } from './CommnentList';

const NavigationComponent = ({ auth }) => {
  return (
    <nav>
      <ul style={{ "padding-left": 0 }}>
        <li style={{ display: "inline-block", padding: "0 5px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline-block", padding: "0 5px" }}>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li style={{ display: "inline-block", padding: "0 5px" }}>
          {(auth
            && <Link to="/auth">Sign Out</Link>)
            || <Link to="/auth">Sign In</Link>}
        </li>
      </ul>
    </nav>
  );
};

const headerStateToProps = (state) => {
  return { auth: state.auth };
}

const Navigation = connect(headerStateToProps, actions)(NavigationComponent);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Route
        path="/post" component={CommentBox} />
      <Route
        path="/" exact component={CommentList} />
    </div>
  )
}