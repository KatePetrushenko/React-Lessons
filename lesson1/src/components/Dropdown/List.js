import React from "react";

function List(props) {
    return (
        <ul className={props.className} >
            {props.options.map((item, i) => (
                <li key={i} onClick={() => props.switchItem(item.option)}>
                    {item.option}
                </li>
            ))}
        </ul>
    );
  }
  
  export default List;