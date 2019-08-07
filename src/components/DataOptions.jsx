import React from 'react';

function DataOptions(props) {
  return <div>
    {props.array.map(
      (item, i) => <div key={i} onClick={props.handleClick.bind(this, item)}>
        {item}
      </div>
    )}
  </div>;
}

export default DataOptions;
