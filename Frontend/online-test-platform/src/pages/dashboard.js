import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export class dashboard extends Component {
    render() {
        return (
            <div>
                <Button component={Link} to='/create-test'>
                    Create Test
                </Button>
                <Button component={Link} to='/test'>
                    Test Firebase
                </Button>
            </div>
        )
    }
}

export default dashboard;
