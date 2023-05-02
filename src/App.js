import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from "react-router-dom";
import { actionCreator } from './Actions/Actions';
import PrivateRoute from './Components/Authintications/PrivateRoute';

function App()  {
  
    return (
      <div>
<Switch>
  <PrivateRoute
    exact path="/private"
  />

<Route exact path= '/login'
      render={props => <Login {...props}  axiosAddress={axiosAddress} />}
      />
</Switch>
      </div>
    );
  }

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(App);
