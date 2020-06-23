import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// Components
import Navbar from './components/Navbar';
// Routes
import dashboard from './pages/dashboard';
import login from './pages/login';
import signup from './pages/signup';
import createTest from './pages/create-test';
import Test from './pages/test';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={dashboard} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/create-test" component={createTest} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
