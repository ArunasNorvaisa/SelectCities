import React from 'react';

import './SelectedItems.scss';
import delete_icon from '../icons/cancel.svg';

function SelectedItems(props) {

  const selectedItem = (item, i) => {
    return (
      <span key={i} className="selected__item">
        <button
          className="btn__cancel"
        >
          <img alt='delete icon' src={delete_icon} className="icon__delete" />
        </button>
        <span>{item}</span>
      </span>
    );
  };

  return <span className="selected">
    {props.array.map((item, i) => selectedItem(item, i))}
    {/*{props.array.map((item, i) => <div key={i} className="selected__item">{item}</div>)}*/}
  </span>;
}

export default SelectedItems;