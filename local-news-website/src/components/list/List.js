import React, { Component } from 'react';
import Card from '../card/Card';

class List extends Component {
    // Renders cards and passes required data
    createCard(data) {
        return (
            <Card   key={data.id}
                    id={data.id}
                    title={data.title}
                    body={data.body}
                    photo={data.photo}
                    author={data.author}
                    likes={data.likes}
                    pinStatus={data.pinStatus}
                    onClick={this.props.onClick}
            />
        )}

    render() {
        if(this.props.items == null) {
            return null;
        }

        // Calls function to create cards for each piece of data passed as a prop
        var listItems = [];
        var len = this.props.items.length;
        for(let i = 0; i < len; i++) {
            listItems.push(this.createCard(this.props.items[i]));
        }

        return (
            // Renders all cards
            <div>
                {listItems}
            </div>
        )
    }
}

export default List;