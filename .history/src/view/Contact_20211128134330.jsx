import { useState } from 'react';
import '../styles/modal.scss';

 
const Contact = () => {
  const [modalIsOpen, setIsOpen] = useState(true); 
      function closeModal() {
        setIsOpen(false);
      }
    return(
      <>
    <div className="modal-container">
        <div className="modal-body">

        </div>




     
      
    </div>
      </>  
      
    )

}
export default Contact;