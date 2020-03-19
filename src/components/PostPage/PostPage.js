import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPage extends Component {

    // handleInputChangeFor = propertyName => (event) => {
    //   this.setState({
    //     [propertyName]: event.target.value,
    //   });
    // }

    render() {
        return (
            <div>

            </div>
        );
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(PostPage);