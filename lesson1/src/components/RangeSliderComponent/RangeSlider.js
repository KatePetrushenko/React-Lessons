import React from "react";

function RangeSlider(props) {
    const track = 100 - props.value[1];

    return (
        <div className="range-wrap">
            <span className="range-root">
                <span className="range-track" style={{left: `calc(${props.value[0]}% + ${props.posMin}px)`, right: `${track}%` }}></span>
                <span className="min-val pin" style={{left: `calc(${props.value[0]}% + ${props.posMin}px)`}} onMouseDown={props.onMouseDown}>
                    <span className="range-label">{props.value[0]}</span>
                </span>
                <span className="max-val pin" style={{left: `${props.value[1]}%`}} onMouseDown={props.onMouseDown}>
                    <span className="range-label">{props.value[1]}</span>
                </span>
            </span>
        </div>
    );
}
  
export default RangeSlider;