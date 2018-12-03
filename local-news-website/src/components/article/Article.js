import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="articleView row">
                <img className="col-m-6" src={this.props.articleData[0].photo} alt={this.props.articleData[0].title}/>
                <h1 className="col-m-6">{this.props.articleData[0].title}</h1>
                <p className="articleBody col-m-12">{this.props.articleData[0].body}</p>
            </div>
        );
    }
}

export default Article;