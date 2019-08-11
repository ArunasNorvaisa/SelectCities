import React from 'react';

import Dropdown from "./Dropdown";

import './Selection.scss';

function Selection() {

  return <div className="selectionWrapper">
    <Dropdown multiple={false} />
    <Dropdown multiple={true} />
  </div>
}

export default Selection;
