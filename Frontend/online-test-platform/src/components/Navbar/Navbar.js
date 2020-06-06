import React, { Component } from 'react'

// Material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";

export class Navbar extends Component {
    render() {
        return (
          <AppBar position="fixed">
            <Toolbar>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Signup</Button>
            </Toolbar>
          </AppBar>
        );
    }
}

export default Navbar
