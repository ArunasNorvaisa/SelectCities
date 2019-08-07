import React, { useState, useRef, useEffect } from 'react';

import Dropdown from "./Dropdown";
import { cities } from "../data/data";

import './style.css';

function SelectOne() {
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
    const filteredCities = cities.filter(item => item.toLowerCase().startsWith(target.value.toLowerCase()));
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

  return <div ref={node} className="formWrapper">
    <form>
      <input
        type='search'
        placeholder='Select...'
        value={selected || text}
        onChange={handleChange}
      />
      {active && !selected && <Dropdown array={filtered.slice(0, 8)} handleClick={handleClick} />}
    </form>
    <form>
      <input
        type='search'
        placeholder='Select...'
        value={selected || text}
        onChange={handleChange}
      />
      {active && !selected && <Dropdown array={filtered.slice(0, 8)} handleClick={handleClick} />}
    </form>
  </div>
}

export default SelectOne;
