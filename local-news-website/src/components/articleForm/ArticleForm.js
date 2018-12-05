import React, { Component } from 'react';

class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            image: null
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }

    handleImageChange(event) {
        this.setState({image: event.target.files[0]});
    }

    handleSubmit() {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="articleForm">
            <h1>Add a new article to Nick's News!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Article Headline</label>
                    <input type="text" placeholder="Enter article headline" name="title" onChange={this.handleTitleChange}/>

                    <label htmlFor="body">Article Body</label>
                    <textarea placeholder="Enter body text here" name="body" rows="25" onChange={this.handleBodyChange}/>

                    <label htmlFor="image">Recipe Photo</label>
                    <input type="file" name="image" onChange={this.handleImageChange}/>

                    <button type="submit">Submit recipe</button>
                </form>
            </div>
        );
    }
}

export default ArticleForm;