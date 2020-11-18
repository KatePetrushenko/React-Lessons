import React from "react";

function Gallery(props) {
  return (
        <ul className={props.className} >
            {props.options.map((item, i) => (
                <li key={i}>
                    <img src={item.url} alt={item.title} /> 
                </li>
            ))}
        </ul>
    );
  }
  
  export default Gallery;