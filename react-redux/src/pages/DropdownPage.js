
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [ selected, setIsSelected] = useState(null);

  const handleSelect = (dropOption) => {
    setIsSelected(dropOption)
  }
  const dropOptions = [
    { label: 'Red' , value : 'red'},
    { label: 'Green' , value : 'green'},
    { label: 'Blue' , value : 'blue'},
  ]
  
  return (
    <div className="App">
      <div className="flex">
        <Dropdown dropOptions={dropOptions} handleSelect={handleSelect} selected={selected}/>
      </div>
    </div>
  );
}

export default DropdownPage;
