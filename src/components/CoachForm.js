import React from 'react'


const CoachForm = props =>{

    const {newMessage, handleSubmit , handleMessageChange } = props
return(
   
       

        
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

   
    )
    
}
export default CoachForm



