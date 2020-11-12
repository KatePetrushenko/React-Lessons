import React from 'react';

function Counter(props) {
  return (
    <div className='count'>
      <p>{props.count}</p>
    </div>
  );
}

export default Counter;
