import Modal from 'react-modal';
import { useState } from 'react';

 
const Contact = () => {
    let subtitle;
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          
        },
      };
      const [modalIsOpen, setIsOpen] = useState(true);
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'red';
        
      }
    
      function closeModal() {
        setIsOpen(false);
      }

    return(
      <>
       <div>
     
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
      </>  
      
    )

}
export default Contact;