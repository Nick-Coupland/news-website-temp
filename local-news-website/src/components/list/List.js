import React, { Component } from 'react';
import Card from '../card/Card';

class List extends Component {
    createCard(data) {
        return (
            <Card   key={data.id}
                    id={data.id}
                    title={data.title}
                    body={data.body}
                    photo={data.photo}
                    onClick={this.props.onClick}
            />
        )}

    render() {
        if(this.props.items == null) {
            return null;
        }

        var listItems = [];
        var len = this.props.items.length;
        for(let i = 0; i < len; i++) {
            listItems.push(this.createCard(this.props.items[i]));
        }

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default List;