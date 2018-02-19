import React from 'react'
import athlete from '../svgs/athlete.svg'

const AthletePhone = props => {
    const {messages} = props
    
    return(

        <div className="iphone">
            <div className="iphone-top">
                <span className="camera"></span>
                <span className="sensor"></span>
                <span className="speaker"></span>
            </div>
            <div className="top-bar"></div>
            <div className="iphone-screen">
                 <ul>{ messages.slice(0).reverse().map( (msg, idx) => <li key={'msg-' + idx }>{ msg }</li> )}</ul>

                <img className="people" src={athlete} alt="" />
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

export default AthletePhone