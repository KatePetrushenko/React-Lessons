import React from "react";

function RangeSlider(props) {

    const minPosition = props.value[0];
    const maxPosition = props.value[1];
    const track = props.holderWidth - maxPosition;

    return (
        <div className="range-wrap">
            <span className="range-root">
                <span 
                    className="range-track" 
                    style={{left: `calc(${minPosition}px)`, right: `${track}px` }}
                ></span>
                <span 
                    className="min-val pin" 
                    style={{left: `${minPosition}px`}} 
                    onMouseDown={props.onMouseDown}>
                    <span className="range-label">{minPosition}</span>
                </span>
                <span 
                    className="max-val pin" 
                    style={{left: `${maxPosition}px`}} 
                    onMouseDown={props.onMouseDownMax}
                    >
                    <span className="range-label">{maxPosition}</span>
                </span>
            </span>
        </div>
    );
}
  
export default RangeSlider;