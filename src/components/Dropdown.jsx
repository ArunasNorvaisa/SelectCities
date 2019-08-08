import React, { useState, useRef, useEffect } from 'react';

import DropdownMenu from "./DropdownMenu";
import { cities } from "../data/data";

import './Dropdown.scss';

function Selection() {
  const node = useRef();

  const [active, setActive] = useState(false);
  const [filtered, setFiltered] = useState(cities);
  const [selected, setSelected] = useState('');
  const [text, setText] = useState('');

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

  const handleChange = function ({target}) {
    const filterValues = val => val.toLowerCase().includes(target.value.toLowerCase());
    const filteredCities = cities.filter(filterValues);
    setActive(true);
    setSelected('');
    setText(target.value);
    setFiltered(filteredCities);
  };

  const handleClickOutside = function ({target}) {
    if (node.current.contains(target)) {
      // click inside
      return;
    }
    // click outside
    setActive(false);
  };

  const handleClick = function (city) {
    setSelected(city);
  };

  return <div ref={node}>
    <form>
      <input
        type='search'
        placeholder='Select...'
        value={selected || text}
        onChange={handleChange}
      />
      {active && !selected && <DropdownMenu array={filtered.slice(0, 8)} handleClick={handleClick} />}
    </form>
  </div>
}

export default Selection;
