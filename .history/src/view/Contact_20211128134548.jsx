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
        Le Van ThinhLe Van ThinhLe Van ThinhLe Van ThinhLe Van ThinhLe Van ThinhLe Van ThinhLe Van Thinh


        </div>




     
      
    </div>
      </>  
      
    )

}
export default Contact;