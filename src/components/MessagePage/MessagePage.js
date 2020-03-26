import React, { Component } from 'react';
import {connect} from 'react-redux';

class MessagePage extends Component {
   
    // handleInputChangeFor = propertyName => (event) => {
    //   this.setState({
    //     [propertyName]: event.target.value,
    //   });
    // }
    toMainPage = () => {
        this.props.history.push('/');
    }
  
    render() {
      return (
        <div>
        <h1>Hello {this.props.state.user.username}!</h1><br/>
        <h2>Welcome to your messages</h2>
         
         <br/>
         <button onClick={this.toMainPage}>Back to Main Page</button>
        </div>
      );
    }
  }
  
 
  const mapStateToProps = state => ({
    state,
  });
  
  export default connect(mapStateToProps)(MessagePage);