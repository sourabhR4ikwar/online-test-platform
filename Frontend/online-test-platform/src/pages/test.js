import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';

// material stuff
import withStyles from "@material-ui/core/styles/withStyles";
// import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
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
    textField: {
        width: '80%'
    },
};

class CreateTest extends Component {
    constructor() {
        super();
        this.state = {
            test: {},
            baseUrl: 'https://online-test-portal-f97ac.firebaseio.com/tests',
            testUrl: ''
        };
    }

    uploadTest = () => {
        let data = {
            teacherId: 'USER_ID',
            additionalInfo: [
                'Student_Roll_No',
                'College_Name',
            ],
            sections: [
                {
                    title: 'SECTION_TITLE',
                    questions: [
                        {
                            type: 'SCA/MCA', 
                            marks: 'QUESTION_MARKS',
                            question: 'STRING',
                            media: [
                                {
                                    imagePath: 'IMAGE_PATH',
                                    imageTitle: 'IMAGE_TITLE'
                                }
                            ],
                            options: [
                                {
                                    title: 'OPTION_Text',
                                    correct: 'TRUE/DEFAULT_FALSE',
                                    marks: 'OPTION_MARKS'
                                },
                            ],
                        },
                    ]
                }
            ]
        };
        fetch(this.state.baseUrl+'.json', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                this.setState({
                    testUrl: this.state.baseUrl+
                            '/'+
                            response.name+
                            '.json'
                })
            })
            .catch(err => {
                console.log(err);
            });
    };

    retrieveTest = () => {
        fetch(this.state.testUrl, {
            method: 'GET'
        })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                this.setState({
                    test: response
                })
            })
            .catch(err => {
                console.log(err);
            });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };

    render() {
        const { classes } = this.props;
        let test = this.state.test;
        return (
            <React.Fragment>
                <div>
                    <Paper elevation={3} className={classes.form}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.uploadTest}
                        >
                            Upload Test
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={this.retrieveTest}
                        >
                            Retrieve Test
                        </Button>
                        <div>
                            <br />
                            <h3>Response : </h3><br />
                            <pre>{JSON.stringify(test, null, 4)}</pre>
                        </div>
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