import React from 'react';

import './SelectedItems.scss';
import delete_icon from '../icons/Cancel.svg';

function SelectedItems(props) {

  const selectedItem = (item, i) => {
    return <span key={i} className="selected__item">
      <button
        className="btn__cancel"
        onClick={e => {e.preventDefault();props.deleteItem(item)}}
      >
        <img alt='delete icon' src={delete_icon} className="icon__delete" />
      </button>
      <span>{item}</span>
    </span>;
  };

  return <span className="selected">
    {props.array.map((item, i) => selectedItem(item, i))}
  </span>;
}

export default SelectedItems;
