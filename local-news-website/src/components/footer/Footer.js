import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    handleTopClick() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="footer">
                <div className="left">
                    <h2>About Nick's News</h2>
                    <p>Nick's News is a news website where users can browse, upload, and rate local news and events.</p>
                </div>

                <div className="right">
                    <h2>Want to get in touch?</h2>
                    <p>Contact me via email: couplan4@uni.coventry.ac.uk</p>
                </div>

                <div className="center">
                    <h2>Quick Links</h2>
                    <ul>
                        <li onClick={this.props.showHome}>Home</li>
                        <li onClick={this.props.showArticleForm}>Post new article</li>
                        <li onClick={this.handleTopClick}>Top</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;