import React from 'react';

import Dropdown from "./Dropdown";

import './Selection.scss';
import {cities} from '../data/Data';

function SelectionMultiple() {

  return <div className="selectionWrapper">
    <Dropdown multiple={true} data={cities}/>
  </div>
}

export default SelectionMultiple;
