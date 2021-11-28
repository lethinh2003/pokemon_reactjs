import { useState } from 'react';
import '../styles/modal.scss';
import { BiX } from "react-icons/bi";
import {useHistory} from "react-router-dom";


 
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
                    <a href="https://fb.com/thinhvle2210/" target="_blanl"><div className="contact-btn fb">Facebook</div></a>
                    <div className="contact-btn github">Github</div>
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