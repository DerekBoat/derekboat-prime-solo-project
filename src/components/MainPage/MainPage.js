import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainPage extends Component {

    componentDidMount() {
        this.getPosts();
    }// end componentDidMount

    toMessagePage = (data) => {
        this.props.history.push('/MessagePage');
        this.props.dispatch({ type: 'GET_ID', payload: data});
        
    }
    getPosts = () => {
        this.props.dispatch({ type: 'GET_POSTS' });
        this.props.dispatch({ type: 'GET_USERS' });
        console.log('in getPosts');
    }
    deletePost = (data) => {
        this.props.dispatch({
            type: 'DELETE_POST',
            payload: data
          })
    }
    editPost = (data) => {
        this.props.dispatch({ type: 'EDIT_POST', payload: data});
        this.props.history.push('/PostPage',);
        this.props.dispatch({type: 'EDIT_MODE'});
    }
    render() {
        return (
            <div>
                <h1>Welcome To Happy Holiday-Cerations</h1>
                <h2>The Holiday Trading Hub!</h2>
                <br/>
                {this.props.state.posts[0] ? (
                        <ul>
                            {this.props.state.posts.map(post => (
                                <div key={post.id} >
                                    <li>{post.title}<br/>
                                    Posted By: {post.username}
                                      
                                    <br/>{post.description} <br/> <img alt='Decoration Post' src={post.image_path} width='250px' /><br/>
                                    {this.props.state.user.id !== post.user_id && <button onClick={() => this.toMessagePage(post.user_id)}>Contact Owner</button>}
                                   {this.props.state.user.id === post.user_id && <button onClick={() => this.deletePost(post.id)}>DELETE</button>}
                                   {this.props.state.user.id === post.user_id && <button onClick={() => this.editPost(post)}>EDIT</button>}
                                    </li>

                                </div>
                            ))}
                        </ul>
                    ) : (
                            <p></p>
                        )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps)(MainPage);

