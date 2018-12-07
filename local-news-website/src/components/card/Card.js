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

        return (
            <div className="card col-m-8" onClick={this.handleClick}>
                <div className="testClass">
                    <img src={this.props.photo} alt={this.props.imgAlt}/>
                </div>
                <div className="textContainer">
                    <h3><b>{this.props.title}</b></h3>
                    <h4>By {this.props.author} | {this.props.likes} {like}</h4>
                    <p>{this.props.body}</p>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default Card;