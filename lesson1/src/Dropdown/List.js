import React from 'react';

function List(props) {
    return (
        <ul className={props.className} >
            {props.options.map((item, i) => (
                <li key={i} onClick={() => props.selectItem(item.option)}>
                    {item.option}
                </li>
            ))}
        </ul>
    );
  }
  
  export default List;