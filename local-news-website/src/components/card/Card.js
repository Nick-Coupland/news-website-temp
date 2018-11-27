import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

    this.handleClick = this.handleClick.bind(this);
}

    handleClick(event) {
        event.preventDefault();
        // this.props.onClick(this.props.id);
        console.log("card clicked");
    }


    render() {
        return (
            <div className="card" onClick={this.handleClick}>
                <img src={this.props.image} alt={this.props.imgAlt}/>
                <div className="textContainer">
                    <h4><b>{this.props.title}</b></h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default Card;