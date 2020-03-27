import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessagePage extends Component {

  state = {
    message: '',
    user: this.props.state.user.id,
    postUserId: this.props.state.postUserId

  }
  componentDidMount = () => {
    console.log(this.state);
    this.getMessages();
  }

  getMessages = () => {
    this.props.dispatch({
      type: 'GET_MESSAGES',
      payload: this.props.state.user.id
    })
  }

  toMainPage = () => {
    // this.props.history.push('/');
    this.props.dispatch({
      type: 'SEND_MESSAGE',
      payload: this.state
    })
    this.props.dispatch({
      type: 'UNSET_ID',
    })
  }

  handleChange = (event, type) => {
    this.setState({ [type]: event.target.value })
    console.log(this.state.message);
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.state.user.username}!</h1><br />
        <h2>Welcome to your messages</h2>
        <br />
        <h3>Send a message to </h3>
        <textarea label="message" placeholder="Send a Message" onChange={event => this.handleChange(event, "message")} ></textarea>
        <br />
        <button onClick={this.toMainPage}>Send Message</button>
        <h2>Previously recieved messages</h2>
        {this.props.state.posts[0] ? (
          <ul>
            {this.props.state.posts.map(post => (
              <div key={post.id} >
                <li>{post.title} <br />{post.description} <br /> <img alt='Decoration Post' src={post.image_path} width='250px' />
                  <button onClick={() => this.deletePost(post.id)}>DELETE</button>
                  <button onClick={() => this.editPost(post)}>EDIT</button>
                  <button onClick={() => this.toMessagePage(post.user_id)}>Contact Owner</button></li>

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

export default connect(mapStateToProps)(MessagePage);