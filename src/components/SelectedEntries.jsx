import React from 'react';

import './SelectedEntries.scss';

function SelectedEntries(props) {
  return <div className="selectedEntries">
    <h6>Selected entries:</h6>
    {props.data.map((item, i) => <span key={i} className="selectedEntries__item">{item}</span>)}
  </div>;
}

export default SelectedEntries;