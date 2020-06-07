import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/images/testIcon.png";

// material ui
import withStyles from "@material-ui/core/styles/withStyles";
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

export class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.cred = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("Sign Up");
    console.log(this.cred);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={3} className={classes.form}>
        <img src={Logo} alt="Logo" className={classes.image} />
        <Typography variant="h4">Sign Up</Typography>
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

signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signup);
