import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {websocket, testWebSocket} from './utils/websocketAPI'
import SendForm from './components/SendForm'
class App extends Component {
 
  state = {
    messages: ['hello'],
    newMessage: ''
  }

  send = message =>{
    websocket.send( message )
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    websocket.send( this.state.newMessage)
  }
  handleMessageChange = (newMessageEvent) =>{
    this.setState({ newMessage: newMessageEvent}) 
  }
  
  componentDidMount(){
    testWebSocket()
    websocket.onmessage = evt => { 
      // add the new message to state
        this.setState({
        messages : this.state.messages.concat([ evt.data ])
      })
    }
    // for testing: sending a message to the echo service every 2 seconds, 
    // the service sends it right back
    /*
    setInterval( _ =>{
      websocket.send( Math.random() )
    }, 2000 )
    */
  }
  render() {
    const {newMessage, messages} = this.state;
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>{ messages.map( (msg, idx) => <li key={'msg-' + idx }>{ msg }</li> )}</ul>
        <SendForm 
        
         newMessage={newMessage}
         handleSubmit={this.handleSubmit}    
         handleMessageChange={this.handleMessageChange}    
        
        />
      </div>
    );
  }
}

export default App;
