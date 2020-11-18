import React from "react";
import Gallery from "./Gallery";

class GalleryContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            options: [],
        }
    }

    componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                options: result,
              });
            }
        )
    }

    render(){
        return (
            <Gallery options={this.state.options} />
        );
    }
}

export default GalleryContainer;