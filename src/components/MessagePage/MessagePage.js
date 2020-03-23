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
         Message feature coming soon!<br/>
         <img src="https://i.redd.it/nwa52qoha8az.jpg" ></img>
         <br/>
         <button onClick={this.toMainPage}>Back to Main Page</button>
        </div>
      );
    }
  }
  
 
  const mapReduxStateToProps = reduxState => ({
    reduxState,
  });
  
  export default connect(mapReduxStateToProps)(MessagePage);