import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PostPage.css';

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
            postDescription: "A gauranteed source of nightmares!",
            postImagePath: "https://i5.walmartimages.com/asr/8a69cb1a-7e1d-43e9-a66f-8c995c722fff_2.7936d2242fee51c5094b01c954e31c58.jpeg",
            userId: this.props.state.user.id
        })
    }
    render() {
        return (

            <div>
                <h3 onClick={this.hidden}>Submit a Post</h3>
                <textarea className="title" label="Title" placeholder="Title" value={this.state.postTitle} onChange={event => this.handleChange(event, "postTitle")} ></textarea>
                <textarea className="description" label="Description" placeholder="Description" value={this.state.postDescription} onChange={event => this.handleChange(event, "postDescription")} ></textarea>
                <textarea className="image-path" label="Image Path" placeholder="Image Path" value={this.state.postImagePath} onChange={event => this.handleChange(event, "postImagePath")} ></textarea>

                <br /> <button onClick={this.submitPost} className="submit">Submit</button>
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(PostPage);