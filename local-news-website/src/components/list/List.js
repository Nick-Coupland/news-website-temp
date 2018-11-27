import React, { Component } from 'react';
import Card from '../card/Card';

class Grid extends Component {
    createCard(data) {
        return (
            <Card   id={data.id}
                    title={data.title}
                    body={data.body}
                    photo={data.photo}
            />
        )}

    render() {
        if(this.props.items == null) {
            return null;
        }

        var listItems = [];
        var len = this.props.items.length;
        for(let i = 0; i < len; i++) {
            console.log(this.props.items[i]);
            listItems.push(this.createCard(this.props.items[i]));
        }

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default Grid;