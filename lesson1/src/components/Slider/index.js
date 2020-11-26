import React from "react";
import RangeSlider from "./RangeSlider";
import "./style.css";

const Slider = (props) => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`${props.className} container`}>
            <h2>{props.sliderWrapTitle}</h2>

            <h3>{props.sliderTitle}</h3> 
            
            <RangeSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
            />
        </div>
    );
}

export default Slider;