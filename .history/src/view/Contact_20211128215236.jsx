import { useState } from 'react';
import '../styles/modal.scss';
import { BiX } from "react-icons/bi";
import {useHistory} from "react-router-dom";
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import { AwesomeButton } from "react-awesome-button";



 
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


    <AwesomeButton
      cssModule={AwesomeButtonStyles}
      type="primary"
      href="https://google.com"
      target="_blank"
    >
      Button
    </AwesomeButton>
      
    
               
      
                    <a href="https://fb.com/thinhvle2210/" target="_blanl"><div className="contact-btn fb">Facebook</div></a>
                    <a href="https://github.com/lethinh2003" target="_blanl"><div className="contact-btn github">Github</div></a>
                    
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