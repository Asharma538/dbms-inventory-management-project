import React, { useState } from 'react'
import Nav from './Nav';

export default function Admin({doLogoutAdmin}) {
  
  const doLogout = () => {
    doLogoutAdmin();
  }
  
  const [searchText,setSearchText] = useState('');
  const handleSearchChange = (v) => {
    setSearchText(v.target.value);
  }

  const options = ["Option 1", "Option 2", "Option 3"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  }


  return (
    <div>
      <Nav doLogout={doLogout}/>
      <input type="text"
        className='search-input'
        onChange={handleSearchChange}
        value={searchText}
        placeholder='&#128269; Search'
      />

      <button onClick={handleDropdown} className='dropdown'>
        <div>{selectedOption || "Select a field"}</div>
        {isOpen && (
          <ul>
            {options.map((option) => (
              <li key={option} className='option-field' onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </button>

    </div>
  )
}