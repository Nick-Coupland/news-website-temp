import React, { Component } from 'react';
import Card from '../card/Card';

class Grid extends Component {
    createCard(data) {
        return (
            // Possibly redundant div
            <div>
                <Card   id={data.id}
                        title={data.title}
                />
            </div>
        )}

    render() {
        if(this.props.items == null) {
            return null;
        }

        var listItems = [];
        var len = this.props.items.length;
        var x;
        for(x in this.props.items) {
            this.createCard(x);
        }

        return (
            {listItems}
        )
    }
}

export default Grid;