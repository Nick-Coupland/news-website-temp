import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    constructor(props) {
        super(props);
        this.handlePinClick = this.handlePinClick.bind(this);
        this.handleUnpinClick = this.handleUnpinClick.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleUnlikeClick = this.handleUnlikeClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handlePinClick() {
        this.props.handlePin(this.props.articleData[0].id);
        document.getElementById('pinButton').style.display = "none";
        alert("Article pinned.");
    }

    handleUnpinClick() {
        this.props.handleUnpin(this.props.articleData[0].id);
        document.getElementById('pinButton').style.display = "none";
    }

    handleLikeClick() {
        this.props.handleLike(this.props.articleData[0].id);
        document.getElementById('likeButton').style.display = "none";
    }

    handleUnlikeClick() {
        this.props.handleUnlike(this.props.articleData[0].id);
        document.getElementById('likeButton').style.display = "none";
    }

    render() {
        let pinButton;
        if(localStorage.username === "admin" && this.props.articleData[0].pinStatus === 0) {
            pinButton = <button id="pinButton" onClick={this.handlePinClick} type="button">Pin article</button>
        }
        else if(localStorage.username === "admin" && this.props.articleData[0].pinStatus === 1) {
            pinButton = <button id="pinButton" onClick={this.handleUnpinClick} type="button">Unpin article</button>
        }

        let likeButton;
        if(localStorage.username !== null && this.props.articleData[0].likeStatus === null) {
            likeButton = <button id="likeButton" onClick={this.handleLikeClick} type="button">&#10003; Like</button>
        }
        else if(localStorage.username !== null && this.props.articleData[0].likeStatus === 1) {
            likeButton = <button id="likeButton" onClick={this.handleUnlikeClick} type="button">&times; Unlike</button>
        }

        return (
            <div className="articleView row">
                {likeButton}
                {pinButton}
                <p>Likes: {this.props.articleData[0].likes}</p>
                <p>Like status?{this.props.articleData[0].likeStatus}</p>
                <div className="clear"></div>
                <img className="col-m-6" src={this.props.articleData[0].photo} alt={this.props.articleData[0].title}/>
                <h1 className="col-m-6">{this.props.articleData[0].title}</h1>
                <p className="articleBody col-m-12">{this.props.articleData[0].body}</p>
            </div>
        );
    }
}

export default Article;