import React, { useEffect, useRef, useState } from 'react';

import DropdownMenu from "./DropdownMenu";
import SelectedItems from "./SelectedItems";
import { cities } from "../data/data";

import './Dropdown.scss';

function Dropdown(props) {
  const [active, setActive] = useState(false);
  const [filtered, setFiltered] = useState([...cities]);
  const [arrayToDisplay, setArrayToDisplay] = useState([...cities]);
  const [selectedEntries] = useState([]);
  const [text, setText] = useState('');

  const node = useRef();

  useEffect(function () {
    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);

  const handleClickOutside = ({target}) => {
    if (node.current.contains(target)) {
      // click inside
      return;
    }
    // click outside
    setActive(false);
  };

  const handleChange = ({target}) => {
    const filterFunction = val => val.toLowerCase().includes(target.value.toLowerCase());
    // As an alternative, we can use below function that looks for cities that starts with search
    // query, as opposed to including it.
    // const filterFunction = val => val.toLowerCase().startsWith(target.value.toLowerCase());
    const filteredCities = arrayToDisplay.filter(filterFunction);
    setText(target.value);
    setFiltered(filteredCities);
  };

  const handleSelection = city => {
    if (props.multiple) {
      setArrayToDisplay(arrayRemove(arrayToDisplay, city));
      selectedEntries.push(city);
      setText('');
    } else setText(city);
    setActive(false);
    setFiltered(arrayToDisplay);
  };

/*  const arrayRemove = (arr, index) => {
    console.log('L59 arr.length ===', arr.length);
    arr.splice(index, 1);
    return arr;
  };*/

  const arrayRemove = (arr, value) => arr.filter(item => item !== value);

  return <div ref={node} className="formWrapper">
    <form>
      <div className="formWrapper__input">
        {selectedEntries.length > 0 && props.multiple && <SelectedItems array={selectedEntries} />}
        <input
          type='search'
          placeholder='Select...'
          value={text}
          onChange={handleChange}
          onFocus={() => setActive(true)}
        />
      </div>
      {active && <DropdownMenu array={filtered} handleClick={handleSelection} />}
    </form>

  </div>
}

export default Dropdown;
