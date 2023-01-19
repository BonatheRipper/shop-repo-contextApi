import React from 'react'

const Modal = ({openModal, setOpenModal}) => {

    if (!openModal) {

        return null
    } else {

        return (
            <div className="overlay">
                <div className="modal">
                    <div className='modal-btn-container'>
                    <button onClick={() => setOpenModal(false)}>X</button>
                    </div>
                
                <h3>This is the modal</h3>
                </div>
                
            </div>
        )
    }
}

export default Modal