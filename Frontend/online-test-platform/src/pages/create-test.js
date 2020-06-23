import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

// material stuff
import withStyles from "@material-ui/core/styles/withStyles";
// import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
    form: {
        // textAlign: "center",
        maxWidth: 1200,
        margin: "1rem auto 1rem auto",
        padding: '3%',
    },
    content: {
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    studentInfo: {
        width: '80%'
    },
    textField:{
        width: '80%'
    },
};

class CreateTest extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                {/* <div>
                    <Paper elevation={3} className={classes.form}>
                        Questions Modal
                    </Paper>
                </div> */}
                <div>
                    <Paper elevation={3} className={classes.form}>
                        <Typography variant="h4">Student Info</Typography>
                        <div className={classes.content}>
                            <div className={classes.studentInfo}>
                                <TextField className={classes.textField} variant="outlined" disabled label="Email"/>
                                <Button>
                                    E</Button>
                                <Button>D</Button>
                            </div>
                            <Button>+ ADD CONTENT</Button>
                        </div>
                    </Paper>
                </div>
                <div>
                    <Paper elevation={3} className={classes.form}>
                        <Typography variant="h4">Test Sections</Typography>
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

CreateTest.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateTest);