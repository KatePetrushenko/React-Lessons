import React, { useState, useEffect } from "react";
import RangeSlider from "./RangeSlider";
import "./style.css";

const RangeSliderComponent = (props) => {
    const initCoords = {};

    const [value, setValue] = useState(props.defoultCoords);
    const [posMin, changePosMin] = useState(0);
    const [posMax, changePosMax] = useState(0);
    const [holderWidth, getWidth] = useState(0);
    const [holderOffsetLeft, getOffsetLeft] = useState(0);

    useEffect( () => {
        getWidth(document.getElementsByClassName("range-wrap")[0].offsetWidth);
        getOffsetLeft(document.getElementsByClassName("range-wrap")[0].offsetLeft);

        document.body.style.userSelect = "auto";
        window.removeEventListener("mousemove", mouseMoveHandler);
        window.removeEventListener("mousemove", mouseMoveHandlerMax);
        window.removeEventListener("mouseup", mouseUpHandler);
    });

    const mouseDown = (e, pos) => {
        document.body.style.userSelect = "none";

        if (pos === "min") {
            window.addEventListener("mousemove", mouseMoveHandler);
        } else {
            window.addEventListener("mousemove", mouseMoveHandlerMax);
        }
        
        window.addEventListener("mouseup", mouseUpHandler);
        initCoords.downX = e.clientX;
    }

    const mouseUpHandler = () => {
        document.body.style.userSelect = "auto";
        window.removeEventListener("mousemove", mouseMoveHandler);
        window.removeEventListener("mousemove", mouseMoveHandlerMax);
        window.removeEventListener("mouseup", mouseUpHandler);
    }

    const mouseMoveHandler = e => {
        mouseMove(e,"min");
    }
    const mouseMoveHandlerMax = e => {
        mouseMove(e,"max");
    }

    const mouseMove = (e, pos) => {
        const transformX = e.clientX - initCoords.downX;
        let posValue;
        let posValidation;

        if (pos === "min") {
            posValue = (e.clientX < holderOffsetLeft) || ((value[0] + transformX) > value[1]);
            posValidation = [value[0] + transformX, value[1]];
            changePosMin(transformX);
        } else {
            posValue = ((value[1] + transformX) < value[0]) || (e.clientX > (holderOffsetLeft + holderWidth));
            posValidation = [value[0],value[1] + transformX];
            changePosMax(transformX);
        }

        if ( !posValue ) {
            setValue(posValidation);
        }
    }

    return (
        <div className={`${props.className} container`}>
            <h2>{props.sliderWrapTitle}</h2>

            <h3>{props.sliderTitle}</h3> 

            <RangeSlider
                posMin={posMin}
                posMax={posMax}
                onMouseDown={mouseDown}
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