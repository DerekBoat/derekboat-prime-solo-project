import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPage extends Component {
state = {
    postTitle: '',
    postDescription: '',
    postImagePath: '',
    userId: this.props.state.user.id
}

handleChange = (event, type) => {
        this.setState({ [type]: event.target.value })
}

submitPost = () => {

}
    render() {
        return (
            <div>
                <h1>Here's where you can submit a post!</h1>
                <input label="Title" placeholder="Title" onChange={event => this.handleChange(event, "postTitle")} ></input>
                <input label="Description" placeholder="Description" onChange={event => this.handleChange(event, "postDescription")} ></input>
                <input label="Image Path" placeholder="Image Path" onChange={event => this.handleChange(event, "postImagePath")} ></input>

                <br/> <button onClick={this.submitPost}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(PostPage);