import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPage extends Component {
    state = {
        postId: this.props.state.edit.id,
        postTitle: this.props.state.edit.title,
        postDescription: this.props.state.edit.description,
        postImagePath: this.props.state.edit.image_path,
        userId: this.props.state.user.id,
        userName: this.props.state.user.username
    }

    handleChange = (event, type) => {
        this.setState({ [type]: event.target.value })
    }
    componentWillUnmount = () => {
        this.props.dispatch({ type: 'UNEDIT_MODE' });
        this.props.dispatch({ type: 'UNEDIT_POST' });
    }

    submitPost = () => {
        if (this.props.state.editMode === true) {
            this.props.dispatch({
                type: 'UPDATE_POST',
                payload: this.state
            })
        }
        else {
            this.props.dispatch({
                type: 'ADD_POST',
                payload: this.state
            })
        }
        this.props.history.push('/')
        alert('Post Submitted');
    }

    hidden = () => {
        this.setState({
            postId: this.props.state.edit.id,
            postTitle: "Spooky Witch",
            postDescription: "A scary ghost sure to frighten children and adults alike!",
            postImagePath: "https://paylessdailyonline.com/i5/asr/4fa7485f-eade-4750-ac9b-3f9236a48466_1.1e4dd0c1fcd0a71a431f85536fbe5d72.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
            userId: this.props.state.user.id
        })
    }
    render() {
        return (
            <div>
                <h3 onClick={this.hidden}>Submit a Post</h3>
                <textarea label="Title" placeholder="Title" value={this.state.postTitle} onChange={event => this.handleChange(event, "postTitle")} ></textarea>
                <textarea label="Description" placeholder="Description" value={this.state.postDescription} onChange={event => this.handleChange(event, "postDescription")} ></textarea>
                <textarea label="Image Path" placeholder="Image Path" value={this.state.postImagePath} onChange={event => this.handleChange(event, "postImagePath")} ></textarea>

                <br /> <button onClick={this.submitPost}>Submit</button>
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(PostPage);