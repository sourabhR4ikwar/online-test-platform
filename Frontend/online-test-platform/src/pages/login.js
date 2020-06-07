import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/images/testIcon.png";

// material stuff
import withStyles from "@material-ui/core/styles/withStyles";
// import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    textAlign: "center",
    maxWidth: 500,
    margin: "auto",
    padding: "5%",
  },
  image: {
    maxWidth: "150px",
    padding: "5%",
  },
  textField: {
    margin: "5% 0 5% 0",
  },
  button: {
    margin: "5%",
  },
};

export class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // TODO Submission handling here
    this.cred = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("form submit");
    console.log(this.cred);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={3} className={classes.form}>
        <img src={Logo} alt="Logo" className={classes.image} />
        <Typography variant="h4">Login</Typography>
        <form noValidate onSubmit={this.handleSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Paper>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);
