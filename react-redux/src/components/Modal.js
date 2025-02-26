import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react';

function Modal({onClose, children, actionModal}) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.remove.classList('overflow-hidden');
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
        <div onClick={onClose} className='absolute inset-0 bg-gray-300 opacity-80' ></div>
        <div className='absolute inset-40 bg-white p-10'>
            <div className='flex flex-col justify-between h-full'>
                {children}

                <div className='flex justify-end'>
                     {actionModal}
                </div>
            </div>
        </div>
        
    </div>,
    document.querySelector('.modal-container')
    );
}

export default Modal