import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


export const requireAuth = (WrappedComponent) => {
  class ComposedComponent extends Component {
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return { auth: state.auth };
  };

  return connect(mapStateToProps, actions)(ComposedComponent);
};