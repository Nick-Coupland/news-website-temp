import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
                        <li><a href="#default">Home</a></li>
                        <li><a href="#default">Top</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;