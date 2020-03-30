import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MessagePage.css';

class MessagePage extends Component {

  state = {
    message: '',
    user: this.props.state.user.id,
    postUserId: this.props.state.postUserId

  }
  componentDidMount = () => {
    this.getMessages();
  }

  getMessages = () => {
    this.props.dispatch({
      type: 'GET_MESSAGES',
      payload: this.props.state.user.id
    })
  }

  hidden = () => {
    this.setState({
      message: 'Hi there, I am interested in your penny wise decoration, contact me at JeffBezos@amazon.com'
    })
  }

  toMainPage = () => {
    this.props.history.push('/');
    alert('Message Sent')
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
  }
  deleteMessage = (data) => {
    this.props.dispatch({
      type: 'DELETE_MESSAGE',
      payload: data
    })
    this.getMessages();
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.state.user.username}!</h1>
        <h2>Welcome to your messages</h2>
        <h3 onClick={this.hidden}>Send a Message </h3>
        <textarea className="textArea" label="message" placeholder="Send a Message" type="text" value={this.state.message}onChange={event => this.handleChange(event, "message")} ></textarea>
        <br />
        <button onClick={this.toMainPage}>Send Message</button>
        <h2>Previously recieved messages</h2>
        {this.props.state.messages[0] ? (
          <ul>
            {this.props.state.messages.map(messages => (
              <div key={messages.id} >
                <div className="messages">From Username: {messages.username}.<br/>Message: {messages.message}<button onClick={() => this.deleteMessage(messages.id)}>   DELETE</button></div>
              </div>
            ))}
          </ul>
        ) : (
            <p></p>
          )}
    
    </div>
    )
  }
}


const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(MessagePage);