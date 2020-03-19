import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {

    render() {
        return (

            <div>
                <div>
                    <h1>Hello Admin!</h1>
                    <p>
                        List of users <br />
        User ID Username <button>Delete User</button>
                        <button>Back to Home</button>
                    </p>
                </div>
            </div>
        )
    };
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(AdminPage);



