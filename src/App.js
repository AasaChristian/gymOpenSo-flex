import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './Actions/Actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React-Redux App</h1>

        <p>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(App);
