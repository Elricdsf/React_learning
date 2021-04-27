import LoginComopnent from "./components/LoginComponent";
import React from "react";
import {LoginProvider} from "./contexts/LoginStatusContext";
import DashboardComponent from './components/DashboardComponent';
// import GlobalStyle from './GlobalSytle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import {LoginStatusContext} from './contexts/LoginStatusContext';
// import {useContext} from 'react';
function App() {
  return (
    <LoginProvider>
      <Router>
        <Switch>
          {/* <GlobalStyle /> */}
          <Route path='/login' component={LoginComopnent}/>
          <Route path='/dashboard' component={DashboardComponent}/>

        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;
