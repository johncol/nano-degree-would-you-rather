import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './login/Login';
import Navigation from './navigation/Navigation';
import Home from './home/Home';
import AddQuestion from './add-question/AddQuestion';
import { QuestionAction } from '../state/actions/questions';

class App extends Component {
  componentDidMount() {
    this.props.fetchAllQuestions();
  }

  render() {
    const { auth } = this.props;
    if (!auth.logged) {
      return <Login />;
    }

    return (
      <BrowserRouter basename="/nano-degree-would-you-rather/">
        <div className="main-container">
          <Navigation />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-question" component={AddQuestion} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const stateToProps = state => ({
  auth: state.auth
});

const dispatchToProps = dispatch => ({
  fetchAllQuestions: () => {
    dispatch(QuestionAction.fetchAllQuestions());
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(App);
