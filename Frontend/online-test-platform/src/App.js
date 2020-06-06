import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// Components
import Navbar from './components/Navbar';
// Routes
import dashboard from './pages/dashboard';
import login from './pages/login';
import signup from './pages/signup';

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
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
