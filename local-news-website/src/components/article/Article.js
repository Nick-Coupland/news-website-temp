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
        document.getElementById('pinButton').innerHTML = "&#128204; Pinned";
    }

    handleUnpinClick() {
        this.props.handleUnpin(this.props.articleData[0].id);
        document.getElementById('pinButton').innerHTML = "&times; Unpinned";
    }

    handleLikeClick() {
        this.props.handleLike(this.props.articleData[0].id);
        document.getElementById('likeButton').innerHTML = "&#10003; Liked";
        // document.getElementById('likeButton').removeAttribute('onClick');
    }

    handleUnlikeClick() {
        this.props.handleUnlike(this.props.articleData[0].id);
        document.getElementById('likeButton').innerHTML = "&times; Unliked";
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
        if(localStorage.username !== undefined && this.props.articleData[0].likeStatus === null) {
            likeButton = <button id="likeButton" onClick={this.handleLikeClick} type="button">Like</button>
        }
        else if(localStorage.username !== undefined && this.props.articleData[0].likeStatus === 1) {
            likeButton = <button id="likeButton" onClick={this.handleUnlikeClick} type="button">Unlike</button>
        }

        let likeCount;
        if(this.props.articleData[0].likes === null) {
            likeCount = <p>No likes yet!</p>
        }
        else {
            likeCount = <p>Likes: {this.props.articleData[0].likes}</p>
        }

        let likeStatus;
        if(this.props.articleData[0].likeStatus === null) {
            likeStatus = <p>Not liked</p>
        }
        else {
            likeStatus = <p>Liked</p>
        }

        return (
            <div className="articleView row">
                <div className="infoPanel row">
                    {likeCount}
                    {likeStatus}
                    {likeButton}
                    {pinButton}
                </div>

                <div className="clear"></div>
                <img className="col-m-6" src={this.props.articleData[0].photo} alt={this.props.articleData[0].title}/>
                <h1 className="col-m-6">{this.props.articleData[0].title}</h1>
                <p className="articleBody col-m-12">{this.props.articleData[0].body}</p>
            </div>
        );
    }
}

export default Article;