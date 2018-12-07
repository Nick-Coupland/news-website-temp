import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    // Scrolls to top on button click
    handleTopClick() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            // Renders footer content
            <div className="footer row">
                <div className="left col-m-4">
                    <h2>About Nick's News</h2>
                    <p>Nick's News is a news website where users can browse, upload, and rate local news and events.</p>
                </div>

                <div className="center col-m-4">
                    <h2>Quick Links</h2>
                    <ul>
                        <li onClick={this.props.showHome}>Home</li>
                        <li onClick={this.props.showArticleForm}>Post new article</li>
                        <li onClick={this.handleTopClick}>Top</li>
                    </ul>
                </div>

                <div className="right col-m-4">
                    <h2>Want to get in touch?</h2>
                    <p>Contact me via email: couplan4@uni.coventry.ac.uk</p>
                </div>
            </div>
        );
    }
}

export default Footer;