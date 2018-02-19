import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CoachForm from './CoachForm'
import coach from '../svgs/coach.svg'




class CoachPhone extends Component{
    static propTypes ={       
       
       
        newMessage : PropTypes.string.isRequired,
        handleMessageChange : PropTypes.func.isRequired,
        handleSubmit : PropTypes.func.isRequired
    }


    render(){   
       
        const {newMessage,  handleMessageChange, handleSubmit} = this.props 
       
        return(      
            <div className="iphone">
            <div className="iphone-top">
                <span className="camera"></span>
                <span className="sensor"></span>
                <span className="speaker"></span>
            </div>
            <div className="top-bar"></div>
            <div className="iphone-screen ">
            <div className="talk-bubble tri-right btm-right round">
                <div className="talktext">
                <CoachForm
                         newMessage={newMessage}
                         handleSubmit={handleSubmit}    
                         handleMessageChange={handleMessageChange}   
                    />
                </div>
            </div>
                    
                    <img className="people" src={coach}/>

                       
                 
           
        </div>
        <div className="buttons">
            <span className="on-off"></span>
            <span className="sleep"></span>
            <span className="up"></span>
            <span className="down"></span>
        </div>
        <div className="bottom-bar"></div>
        <div className="iphone-bottom">
            <span></span>
        </div>
        </div>
        
        )
    }
}

export default CoachPhone