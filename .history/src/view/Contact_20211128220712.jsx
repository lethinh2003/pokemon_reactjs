import { useState } from 'react';
import '../styles/modal.scss';
import { BiX } from "react-icons/bi";
import {useHistory} from "react-router-dom";
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



 
const Contact = () => {
    let history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(true); 
      function closeModal() {
        setIsOpen(false);
         history.push("/");
      }

    return(
        
      <>
      {modalIsOpen && 
      
     
    <div className="modal-container">
        <div className="modal-body">
    
            <div className="modal-header">Contact me</div>
            <div className="modal-content">
                
                <div className="desc">


                <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type="facebook"
        
      >
        Van Thinh Le
      </AwesomeButtonSocial>
                <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type="github"
        href="https://github.com/lethinh2003/"
        
      >
        Van Thinh Le
      </AwesomeButtonSocial>

                </div>
            </div>
            <div className="modal-footer">
                <div className="close-btn" onClick={() => closeModal()}><BiX /></div>
            </div>



        </div>




     
      
    </div>
}
      </>  
      
    )

}
export default Contact;