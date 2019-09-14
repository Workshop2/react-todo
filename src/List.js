import React, { Component } from 'react'

export default class List extends Component {

    render() {
        return (
            <ul>
            {
                this.props.items.map((item, index) => 
                    <li key={index} onClick={() => this.props.removeItem(index)}>{item}</li>
                )
            }
            </ul>
        );
    }
}