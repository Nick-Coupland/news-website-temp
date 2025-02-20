import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    // Binds functions to this object
    constructor(props) {
        super(props);
        this.handlePinClick = this.handlePinClick.bind(this);
        this.handleUnpinClick = this.handleUnpinClick.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleUnlikeClick = this.handleUnlikeClick.bind(this);
    }

    // Scrolls to top of page to simulate new page
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // Sends ArticleID to handlePin function
    handlePinClick() {
        this.props.handlePin(this.props.articleData[0].id);
        document.getElementById('pinButton').innerHTML = "&#128204; Pinned";
    }

    // Sends ArticleID to handleUnpin function
    handleUnpinClick() {
        this.props.handleUnpin(this.props.articleData[0].id);
        document.getElementById('pinButton').innerHTML = "&times; Unpinned";
    }

    // Sends ArticleID to handleLike function
    handleLikeClick() {
        this.props.handleLike(this.props.articleData[0].id);
        document.getElementById('likeButton').innerHTML = "&#10003; Liked";
    }

    // Sends ArticleID to handleUnlike function
    handleUnlikeClick() {
        this.props.handleUnlike(this.props.articleData[0].id);
        document.getElementById('likeButton').innerHTML = "&times; Unliked";
    }

    render() {
        // Allows conditional rendering of like count based on number of likes
        let like;
        if(this.props.articleData[0].likes <= 0) {
            like = "No likes yet"
        }
        else if(this.props.articleData[0].likes === 1) {
            like = "Like"
        }
        else {
            like = "likes"
        }

        // Allows conditional rendering of pin button based on pin status
        let pinButton;
        if(localStorage.username === "admin" && this.props.articleData[0].pinStatus === 0) {
            pinButton = <button id="pinButton" onClick={this.handlePinClick} type="button">Pin article</button>
        }
        else if(localStorage.username === "admin" && this.props.articleData[0].pinStatus === 1) {
            pinButton = <button id="pinButton" onClick={this.handleUnpinClick} type="button">Unpin article</button>
        }

        // Allows conditional rendering of like button based on like status
        let likeButton;
        if(localStorage.username !== undefined && this.props.articleData[0].likeStatus === null) {
            likeButton = <button id="likeButton" onClick={this.handleLikeClick} type="button">Like</button>
        }
        else if(localStorage.username !== undefined && this.props.articleData[0].likeStatus === 1) {
            likeButton = <button id="likeButton" onClick={this.handleUnlikeClick} type="button">Unlike</button>
        }

        return (
            // Renders fully responsive article view
            <div className="articleView row">
                <div className="infoPanel col-xs-12 col-s-12 col-m-10 col-l-10 col-xl-8">
                    {likeButton}
                    {pinButton}
                </div>
                <div className="clear"></div>

                <h1 className="col-xs-12 col-s-12 col-m-10 col-l-10 col-xl-8">{this.props.articleData[0].title}</h1>
                <h3 className="col-xs-12 col-s-12 col-m-10 col-l-10 col-xl-8">Written by {this.props.articleData[0].author} | {this.props.articleData[0].likes} {like}</h3>
                <img className="col-xs-12 col-s-12 col-m-10 col-l-10 col-xl-8" src={this.props.articleData[0].photo} alt={this.props.articleData[0].title}/>
                <p className="col-xs-12 col-s-12 col-m-10 col-l-10 col-xl-8">{this.props.articleData[0].body}</p>
            </div>
        );
    }
}

export default Article;