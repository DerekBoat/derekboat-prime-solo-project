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
    this.props.history.push('/');
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
        <textarea label="message" placeholder="Send a Message" type="text" onChange={event => this.handleChange(event, "message")} ></textarea>
        <br />
        <button onClick={this.toMainPage}>Send Message</button>
        <h2>Previously recieved messages</h2>
        {this.props.state.messages[0] ? (
          <ul>
            {this.props.state.messages.map(messages => (
              <div key={messages.id} >
                <li>{messages.message}<button>delete</button></li>
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