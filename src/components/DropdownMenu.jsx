import React from 'react';

import './DropdownMenu.scss';

function DropdownMenu(props) {
  return <div className="dropdown">
    {props.array.map(
      (item, i) => <div key={i} onClick={props.handleClick.bind(this, item)} className="dropdown__item">
        {item}
      </div>
    )}
  </div>;
}

export default DropdownMenu;
