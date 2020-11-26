import React from "react";

function Gallery(props) {
  return (
        <ul className={props.className} >
            {props.options.map((item) => (
                <li key={item.id} className="gallery-item">
                    <img src={item.url} alt={item.title} /> 
                </li>
            ))}
        </ul>
    );
  }
  
  export default Gallery;