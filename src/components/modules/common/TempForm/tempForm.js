/*

import React from 'react';

function NameList() {
    const names = [ 'rahul']
    return (
        <div>{
            names.map(name => <h2>{names}</h2>)
            }
            
        </div>
    )
}
export default NameList

*/

/*


import React, { Component } from 'react';
import Post from "./Post.js";

export default class App extends React.Component {
    constructor() {
        super();
        this.postID=0;
        this.state = {
                postArray: [
             ],
                name: "",
                contact: "",
                id: ""
            }
        }

    setPost = (e) => {
        this.setState({
            name: e.target.value,
            contact: e.target.value
        
        })
    }   
      
    addPost = () => {
        this.postID = this.postID + 1 ;
        const copyPostArray = Object.assign([], this.state.postArray)
        copyPostArray.push({
            id: this.postID,
            name: this.state.name,
            contact: this.state.contact
            

        })
        this.setState({
            postArray: copyPostArray,
            
            
        })
    }

render () {
    return (
        <div>     
            <input type="text" name="name" value={this.state.name} onBlur={this.setPost}/>        
            <input type="integer" name="contact" value={this.state.contact} onBlur={this.setPost}/>                 
        <ul>
            { 
            this.state.postArray.map((post) => {
                return (
                    <Post
                    key = {post.id}
                    id = {post.id}
                    name = {post.name}
                    contact = {post.contact}
                    
                    />
                )
            }) 
        
        }
            
        </ul>
        <button onClick={this.addPost}> ADD </button>
        </div>
    )
}    
    
}

*/

/*

import React, { Component } from 'react';
class TempForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
                   contact: ''
                };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
      this.setState({contact: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + this.state.contact);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
         <div>
         <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
         </div>
          <div>
          <label>
            Contact:
            <input type="text"  onChange={this.handleChange} />
          </label>
          </div>
         
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  export default TempForm




*/

import React, { Component } from 'react';
class TempForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
                   contact: ''
                };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
      this.setState({contact: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + this.state.contact);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div class="tabs is-toggle">
  <ul>
    <li class="is-active">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Pictures</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>Videos</span>
      </a>
    </li>
    <li>
      <a>
        <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
        <span>Documents</span>
      </a>
    </li>
  </ul>
</div>
         <div>
         <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
         </div>
          <div>
          <label>
            Contact:
            <input type="text"  onChange={this.handleChange} />
          </label>
          </div>
         
          <input type="submit" value="Submit" />

          <table className="table is-bordered">
          <thead className="table is-bordered">
            <tr className= "table is-bordered">
            <th><abbr title="Position">Pos</abbr></th>
            <th><abbr title="Position">Pos</abbr></th>
              condition 1
            </tr>
            <tr>
              condition 2
            </tr>
            <tr>
              condition 3
            </tr>
          </thead>
          </table>

        </form>
      );
    }
  }

  export default TempForm
