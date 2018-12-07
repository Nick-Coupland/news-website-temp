import React, { Component } from 'react';
import './Card.css';


// Sub-component of List.js
class Card extends Component {
    // Binds functions to this object
    constructor(props) {
        super(props);

    this.handleClick = this.handleClick.bind(this);
    }

    // Sends ArticleID to render article view
    handleClick() {
        this.props.onClick(this.props.id);
    }


    render() {
        // Allows conditional rendering of like count based on number of likes
        let like;
        if(this.props.likes <= 0) {
            like = "No likes yet"
        }
        else if(this.props.likes === 1) {
            like = "Like"
        }
        else {
            like = "likes"
        }

        // Allows conditional rendering of pin based on pin status
        let pin;
        if(this.props.pinStatus === 1) {
            pin = <h3 id="pin"><span role="img" aria-label="pinIcon">&#128204;</span></h3>
        }

        return (
            // Renders responsive card pulling through required data
            <div className="card col-xs-12 col-s-12 col-m-10 col-l-10 col-xl-8" onClick={this.handleClick}>
                {pin}
                <div className="col-xs-6 col-s-6 col-s-6 col-m-6">
                    <img src={this.props.photo} alt={this.props.imgAlt}/>
                </div>
                <div className="textContainer col-xs-6 col-s-6 col-m-6">
                    <h3><b>{this.props.title}</b></h3>
                    <h4>By {this.props.author} | {this.props.likes} {like}</h4>
                    <p>{this.props.body}</p>
                </div>
            </div>
        );
    }
}

export default Card;