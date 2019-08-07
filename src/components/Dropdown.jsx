import React from 'react';

function Dropdown(props) {
  return <div className="dropdown">
    {props.array.map(
      (item, i) => <div key={i} onClick={props.handleClick.bind(this, item)} className="dropdown__item">
        {item}
      </div>
    )}
  </div>;
}

export default Dropdown;
