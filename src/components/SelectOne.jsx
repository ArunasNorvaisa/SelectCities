import React, { useState } from 'react';
import Cities from "./Cities";
import { cities } from "../data/data";

function SelectOne() {
  const [active, setActive] = useState(false);
  const [filtered, setFiltered] = useState(cities);
  const [selected, setSelected] = useState('');
  const [text, setText] = useState('');

  const handleChange = function ({target}) {
    setSelected('');
    setText(target.value);
    const filteredCities = cities.filter(item => item.toLowerCase().includes(target.value));
    setFiltered(filteredCities);
  };

  const handleFocusOn = function () {
    setActive(true);
  };

  const handleFocusOff = function () {
    setActive(false);
  };

  const handleClick = function (city) {
    setSelected(city);
  };

  return <div>
    <form>
      <input
        type='search'
        placeholder='Select...'
        value={selected || text}
        onChange={handleChange}
        onFocus={handleFocusOn}
        onBlur={handleFocusOn}
      />
    </form>
    {active ? <Cities array={filtered} handleClick={handleClick} /> : ''}
  </div>
}

export default SelectOne;
