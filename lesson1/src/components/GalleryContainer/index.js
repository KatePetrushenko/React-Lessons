import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import "./style.css";

const GalleryContainer = (props) => {
    const [options, setOptions] = useState([]);

    const getGalleryOptions = (url) => {
      fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setOptions(result);
        }
      )
    }

    useEffect(() => {
      getGalleryOptions(props.url);
    });

    return (
      <div className={`${props.className} container`}>
        <h2>{props.galleryTitle}</h2>
        <Gallery className="gallery" options={options} />
      </div>
    );
}

export default GalleryContainer;