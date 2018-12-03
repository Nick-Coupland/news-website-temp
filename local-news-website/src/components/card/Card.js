import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);

    this.handleClick = this.handleClick.bind(this);
}

    handleClick() {
        this.props.onClick(this.props.id);
    }


    render() {
        return (
            <div className="card col-m-8" onClick={this.handleClick}>
                <div className="testClass">
                    <img src={this.props.photo} alt={this.props.imgAlt}/>
                </div>
                <div className="textContainer">
                    <h3><b>{this.props.title}</b></h3>
                    <p>{this.props.body}</p>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Card;