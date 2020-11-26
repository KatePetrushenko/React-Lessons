import React from "react";
import "./style.css";

class Slider extends React.Component {
    constructor() {
        super();
        
        this.state = {
            open: false,
		};
    }

    render(){

        const {
            className,
            sliderWrapTitle,
            sliderTitle,
        } = this.props;


        return (
            <div className={`${className} container`}>
                <h2>{sliderWrapTitle}</h2>

                <h3>{sliderTitle}</h3> 
                

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
            </div>
        );
    }
}

export default Slider;