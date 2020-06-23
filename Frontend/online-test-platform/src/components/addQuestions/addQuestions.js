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
    
};

export class login extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper elevation={3} className={classes.form}>
                <form>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        uploadTest
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        RetrieveTest
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
