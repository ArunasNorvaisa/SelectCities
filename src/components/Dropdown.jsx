import React from 'react';

function Dropdown(props) {
  return <div>
    {props.array.map(
      (item, i) => <div key={i} onClick={props.handleClick.bind(this, item)}>
        {item}
      </div>
    )}
  </div>;
}

export default Dropdown;
