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
            <div className="modal-header">Contact me</div>
            <div className="modal-content">
                <div className="profile"><img src="https://lethinh2003.github.io/countdown_newyear/static/media/smile.6cb9325e.png" /></div>
                <div className="desc"></div>
            </div>
            <div className="modal-footer">Contact me</div>



        </div>




     
      
    </div>
      </>  
      
    )

}
export default Contact;