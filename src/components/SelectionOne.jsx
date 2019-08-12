import React from 'react';

import Dropdown from "./Dropdown";

import './Selection.scss';
import {cities} from '../data/Data';

function SelectionOne() {

  return <div className="selectionWrapper">
    <Dropdown multiple={false} data={cities} />
  </div>
}

export default SelectionOne;
