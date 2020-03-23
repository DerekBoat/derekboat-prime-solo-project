import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {

    componentDidMount() {
        this.getPosts();
    }// end componentDidMount

    toAdminPage = () => {
        this.props.history.push('/AdminPage');
    }
    toMessagePage = () => {
        this.props.history.push('/MessagePage');
    }
    toPostPage = () => {
        this.props.history.push('/PostPage');
    }

    getPosts = () => {
        this.props.dispatch({ type: 'GET_POSTS' })
        console.log('in getPosts');
    }
    deletePost = () => {
        console.log('hello from delete Post');
    }
    editPost = () => {
        console.log('hello from edit post');
    }
    render() {
        return (
            <div>
                <h1>Welcome To Happy Holiday-Cerations! The Raddest Holiday Trading Hub!</h1>
                <br/>
                <button onClick={this.toAdminPage}>To admin Page</button>
                <button onClick={this.toMessagePage}>To message Page</button>
                <button onClick={this.toPostPage}>To Post Page</button>
                <br />
                {this.props.state.posts[0] ? (
                        <ul>
                            {this.props.state.posts.map(post => (
                                <div key={post.id} >
                                    <li>{post.title} <br/>{post.description} <br/> <img alt='Decoration Post' src={post.image_path} width='250px' /><button onClick={() => this.deletePost(post.id)}>DELETE</button><button onClick={() => this.editPost(post.id)}>EDIT</button></li>

                                </div>
                            ))}
                        </ul>
                    ) : (
                            <p>No Data</p>
                        )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(MainPage);

