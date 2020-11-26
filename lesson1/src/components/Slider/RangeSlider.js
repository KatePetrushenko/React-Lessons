import React from "react";

function RangeSlider(props) {
    return (
        <div className="range-wrap">
            <span className="range-root">
                <span className="range-track"></span>
                <span className="min-val pin">
                    <span className="range-label">2</span>
                </span>
                <span className="max-val pin">
                    <span className="range-label">4</span>
                </span>
            </span>
        </div>
    );
}
  
export default RangeSlider;