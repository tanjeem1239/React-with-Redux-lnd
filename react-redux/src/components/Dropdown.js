import React, { useEffect, useRef } from 'react'
import { useState } from 'react';

import Panel from './Panel';

function Dropdown({ dropOptions, selected, handleSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect (() => {
        const handler = (event) => {
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler, true);
        }
    }, [])

    const handleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleDropdownClick = (dropOption) => {
        setIsOpen(false);
        handleSelect(dropOption);
    }

    const renderDropdown = dropOptions.map((dropOption) => {
        return <div onClick={() => handleDropdownClick(dropOption)} key={dropOption.value}>{dropOption.label}</div>
    })
    console.log('Dropdown value:', selected);

    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleDropdown}>

                {selected ? selected.label : 'Select Options'}
            </Panel>

            {isOpen && <Panel className='absolute top-full'> {renderDropdown} </Panel>}
        </div>
    )
}

export default Dropdown