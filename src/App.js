import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { DefaultLayout } from './containers';
import { history } from './helpers';
import { alertActions } from './actions';
require('./App.css');

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    const { dispatch } = this.props;
    dispatch(alertActions.clear());
  }

  render() {
    /* eslint eqeqeq: 0 */
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/500" name="Page 500" component={(e) => { return <h3>not found</h3> }} />
            <Route exact path="/404" name="Page 404" component={(e) => { return <h3>not found</h3> }} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

export default connect(mapStateToProps)(App);

