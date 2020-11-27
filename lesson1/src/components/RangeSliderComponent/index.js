import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import "./style.css";

const RangeSliderComponent = (props) => {
    const initCoords = {};

    const [value, setValue] = React.useState([20, 37]);
    const [posMin, changePosMin] = React.useState(0);
    // const [posY, changePosY] = React.useState(0);

    useEffect(() => {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
    });

    const mouseDownHandler = e => {
        document.body.style.userSelect = 'none';
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);

        initCoords.downX = e.clientX;
        // initCoords.downY = e.clientY;
    }

    const mouseUpHandler = () => {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
    }

    const mouseMoveHandler = e => {
        const transformX = e.clientX - initCoords.downX;
        // const transformY = e.clientY - initCoords.downY;

        changePosMin(transformX);
        // changePosY(transformY);
    }

    return (
        <div className={`${props.className} container`}>
            <h2>{props.sliderWrapTitle}</h2>

            <h3>{props.sliderTitle}</h3> 

            
            <RangeSlider
                posMin={posMin}
                onMouseDown={mouseDownHandler}
                value={value}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default RangeSliderComponent;