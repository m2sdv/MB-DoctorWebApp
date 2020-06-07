import React, { Component } from 'react';
export default class Post extends Component {
    render() {
        return( 
            
            <div>
                <li>
                   id = {this.props.id}
            <br/>
            name = { this.props.name}
            <br/>
            contact = { this.props.contact}
            <hr/>
            </li>
            
            </div>
        )
    }
   
}