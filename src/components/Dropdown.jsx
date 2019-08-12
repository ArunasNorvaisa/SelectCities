import React, { useEffect, useRef, useState } from 'react';

import DropdownMenu from "./DropdownMenu";
import SelectedItems from "./SelectedItems";
import SelectedEntries from "./SelectedEntries";

import './Dropdown.scss';

function Dropdown(props) {
  const [active, setActive] = useState(false);
  const [text, setText] = useState('');
  const [entries, setEntries] = useState(arrayToObject(props.data));

  function arrayToObject(array, condition = false) {
    const obj = {};
    array.forEach(item => obj[item] = condition);
    return obj;
  }

  const filterEntries = condition => {
    const arr = [];
    for (let item in entries) {
      if (entries[item] === condition) arr.push(item);
    }
    return arr;
  };

  const filterFunction = val => val.toLowerCase().includes(text.toLowerCase());
  // As an alternative, we can use function that looks for cities that starts with search
  // query, as opposed to including it.
  // const filterFunction = val => val.toLowerCase().startsWith(target.value.toLowerCase());

  const entriesToSelect = () => filterEntries(false).filter(filterFunction);
  const selectedEntries = () => filterEntries(true);

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line
  }, [active]);

  const node = useRef();

  const handleClickOutside = ({target}) => {
    if (node.current.contains(target)) {
      // click inside
      return;
    }
    // click outside
    setActive(false);
    if (!props.multiple) setText(selectedEntries()[0]);
  };

  const handleChange = ({target}) => {
    setText(target.value);
  };

  const handleSelection = city => {
    const newEntries = {...entries};
    if (props.multiple) setText('');
    else {
      if (selectedEntries().length > 0) newEntries[selectedEntries()[0]] = false;
      setText(city);
    }
    newEntries[city] = true;
    setEntries(newEntries);
    setActive(false);
  };

  const handleOnFocus = () => {
    setActive(true);
    setText('');
  };

  const deleteItem = city => {
    setEntries({...entries, [city]: false});
  };

  return <div ref={node} className="formWrapper">
    <form>
      <div className="formWrapper__input">
        {props.multiple && <SelectedItems array={selectedEntries()} deleteItem={deleteItem} />}
        <input
          type='search'
          placeholder='Select...'
          value={text}
          onChange={handleChange}
          onFocus={handleOnFocus}
        />
      </div>
      {active && <DropdownMenu array={entriesToSelect()} handleClick={handleSelection} />}
    </form>
    {selectedEntries().length > 0 && <SelectedEntries data={selectedEntries()} />}
  </div>
}

export default Dropdown;
