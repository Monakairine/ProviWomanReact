import React from "react";
import Img from "../../IMG/ux-design.svg"
import "../../index.css";



class Card extends React.Component {



    render() {


        return (
            <div className={this.props.className} >
                <div className="small-div">
                    <i className={this.props.className}></i>
                </div>

                <div className="big-div">
                    <img src={this.props.img} alt='' />

                    <div>
                        <span className='div-card-title'>
                            {this.props.title}
                        </span>
                        <br />
                        <span>
                            {this.props.description}
                        </span>
                    </div>
                </div>
            </div>
        )


    }

}

export default Card