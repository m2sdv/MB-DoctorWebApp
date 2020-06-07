import React, { Component } from 'react';

export default class Post extends Component {
    render() {
        return( 
        
           <div className="ak-appointment-list">
             <div className={"ak-appointment-list-item"}> 
            <div class="columns">
            <div class="column">
            id 
            <br/>
           {this.props.id}
            </div>
            <div class="column">
            name 
            <br/>
             { this.props.name}
            </div>
            <div class="column">
            Address 
            <br/>
            { this.props.address}
            </div>
            <div class="column">
            Phone
            <br/>
            { this.props.phone}
            </div>
          </div>
           </div>
           </div>
              
           
        )
    }
   
}