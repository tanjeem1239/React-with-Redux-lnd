import React from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'
import Button from '../components/Button';

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
        console.log('clicked');
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionModal = <div>
                <Button onClick={handleClose}>Accept</Button> 
                <Button onClick={handleClose}>Close</Button>  
    </div>

    return (
        <div>
            <Button primary onClick={handleClick}> Open Modal </Button>

            {showModal && 
            
            <Modal onClose={handleClose}>

                <p>Modal Content is showing.</p> 
                {actionModal}
            </Modal>}

        </div>
    )
}

export default ModalPage