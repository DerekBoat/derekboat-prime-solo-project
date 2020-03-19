import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {

    toAdminPage = () => {
        this.props.history.push('/AdminPage');
    }
    toMessagePage = () => {
        this.props.history.push('/MessagePage');
    }
    toPostPage = () => {
        this.props.history.push('/PostPage');
    }

    render() {
        return (
            <div>
                Hello! 
                <button onClick={this.toAdminPage}>To admin Page</button>
                <button onClick={this.toMessagePage}>To message Page</button>
                <button onClick={this.toPostPage}>To Post Page</button>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapReduxStateToProps)(MainPage);

