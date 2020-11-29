import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import "./style.css";

const RangeSliderComponent = (props) => {
    const initCoords = {};

    const [value, setValue] = React.useState(props.defoultCoords);
    const [posMin, changePosMin] = React.useState(0);
    const [posMax, changePosMax] = React.useState(0);
    const [holderWidth, getWidth] = React.useState(0);
    const [holderOffsetLeft, getOffsetLeft] = React.useState(0);

    useEffect(() => {
        getWidth(document.getElementsByClassName('range-wrap')[0].offsetWidth);
        getOffsetLeft(document.getElementsByClassName('range-wrap')[0].offsetLeft);

        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);

        window.removeEventListener('mousemove', mouseMoveHandlerMax);
        window.removeEventListener('mouseup', mouseUpHandlerMax);
    });

    const mouseDownHandler = (e) => {
        document.body.style.userSelect = 'none';
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseUpHandler);

        initCoords.downX = e.clientX;
    }

    const mouseDownHandlerMax = e => {
        document.body.style.userSelect = 'none';
        window.addEventListener('mousemove', mouseMoveHandlerMax);
        window.addEventListener('mouseup', mouseUpHandlerMax);

        initCoords.downX = e.clientX;
    }

    const mouseUpHandler = () => {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', mouseUpHandler);
    }

    const mouseUpHandlerMax = () => {
        document.body.style.userSelect = 'auto';
        window.removeEventListener('mousemove', mouseMoveHandlerMax);
        window.removeEventListener('mouseup', mouseUpHandlerMax);
    }

    const mouseMoveHandler = e => {
        const transformX = e.clientX - initCoords.downX;

        if ( (e.clientX < holderOffsetLeft) || ((value[0] + transformX) > value[1]) ) {
            document.body.style.userSelect = 'none';
        } else {
            changePosMin(transformX);
            setValue([value[0] + transformX, value[1]]);
        }
    }
    const mouseMoveHandlerMax = e => {
        const transformX = e.clientX - initCoords.downX;

        if ( ((value[1] + transformX) < value[0]) || (e.clientX > (holderOffsetLeft + holderWidth)) ) {
            document.body.style.userSelect = 'none';
        } else {
            changePosMax(transformX);
            setValue([value[0],value[1] + transformX]);
        }
    }

    return (
        <div className={`${props.className} container`}>
            <h2>{props.sliderWrapTitle}</h2>

            <h3>{props.sliderTitle}</h3> 

            <RangeSlider
                posMin={posMin}
                posMax={posMax}
                onMouseDown={mouseDownHandler}
                onMouseDownMax={mouseDownHandlerMax}
                value={value}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                holderWidth={holderWidth}
                holderOffsetLeft={holderOffsetLeft}
            />
        </div>
    );
}

export default RangeSliderComponent;