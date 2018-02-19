import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {websocket, testWebSocket} from './utils/websocketAPI'
import CoachPhone from './components/CoachPhone'
import AthletePhone from './components/AthletePhone'
class App extends Component {
 
  state = {
    messages: [],
    newMessage: ''
  }

  send = message =>{
    websocket.send( message )
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({ newMessage: ''})
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
        <h1>Client side web sockets demo  with React</h1>
        <div className="App-inner">
        
            
          
            <CoachPhone
            
            newMessage={newMessage}
            handleSubmit={this.handleSubmit}    
            handleMessageChange={this.handleMessageChange}    
            
            />
            <AthletePhone messages={messages} />
        </div>
      </div>
    );
  }
}

export default App;
