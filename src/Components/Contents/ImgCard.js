import React from "react";
import "../../index.css";


class ImgCard extends React.Component {

    render() {


        return (        
                <div className="imgCard-div">
                    <img src={this.props.img} />
                    <div>
                        <h3> {this.props.name} </h3>
                        <p> {this.props.description} </p>
                    </div>
                </div>
        )
    }
}

export default ImgCard