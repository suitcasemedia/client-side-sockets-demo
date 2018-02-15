import React, {Component} from 'react'
import PropTypes from 'prop-types'




class SendForm extends Component{
    static propTypes ={       
       
       
        newMessage : PropTypes.string.isRequired,
        handleMessageChange : PropTypes.func.isRequired,
        handleSubmit : PropTypes.func.isRequired
    }


    render(){   
       
        const {newMessage,  handleMessageChange, handleSubmit} = this.props 
       
        return(      
            <div className="">
                <div className="">
                    
                    <div className="">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Input message here"
                            value={newMessage}
                            onChange={(event) =>  {
                               
                                handleMessageChange(event.target.value);
                                }
                            }   
                           
                        />   
                        <input type="submit" value="Submit" />   
                     </form>            
                    </div>
                </div>
               
            </div>
        )
    }
}

export default SendForm