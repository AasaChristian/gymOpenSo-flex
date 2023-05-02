import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './Actions/Actions';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React-Redux App</h1>
        <button onClick={() => this.props.dispatch(actionCreator('Hello, Redux!'))}>
          Click me!
        </button>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(App);
