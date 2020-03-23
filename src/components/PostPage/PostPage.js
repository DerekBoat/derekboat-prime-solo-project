import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPage extends Component {
    state = {
        postId: this.props.state.edit.id,
        postTitle: this.props.state.edit.title,
        postDescription: this.props.state.edit.description,
        postImagePath: this.props.state.edit.image_path,
        userId: this.props.state.user.id,
    }

    handleChange = (event, type) => {
        this.setState({ [type]: event.target.value })
    }

    submitPost = () => {
        if (this.props.state.editMode === true) {
            this.props.dispatch({
                type: 'UPDATE_POST',
                payload: this.state
            })
            this.props.history.push('/')
        }
        else {
            this.props.dispatch({
                type: 'ADD_POST',
                payload: this.state
            })
            this.props.dispatch({
                type: 'UNEDIT_POST'
            })
            this.props.history.push('/')
        }
    }
    render() {
        return (
            <div>
                <h1>Here's where you can submit a post!</h1>
                <textarea label="Title" placeholder="Title" value={this.state.postTitle} onChange={event => this.handleChange(event, "postTitle")} ></textarea>
                <textarea label="Description" placeholder="Description" value={this.state.postDescription} onChange={event => this.handleChange(event, "postDescription")} ></textarea>
                <textarea label="Image Path" placeholder="Image Path" value={this.state.postImagePath} onChange={event => this.handleChange(event, "postImagePath")} ></textarea>

                <br /> <button onClick={this.submitPost}>Submit</button>

                <br/>
                Use for MVP DEMO
                <br/>
                Title: Spooky Ghost
                <br/>
                Description: A scary ghost sure to frighten children and adults alike!
                <br/>
                Image Path: https://paylessdailyonline.com/i5/asr/4fa7485f-eade-4750-ac9b-3f9236a48466_1.1e4dd0c1fcd0a71a431f85536fbe5d72.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(PostPage);