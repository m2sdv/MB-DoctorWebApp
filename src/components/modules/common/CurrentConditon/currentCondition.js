import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required, email, presence } from '../validations';


export default class CurrentCondition extends React.Component{

    onSubmit = ()=>{
    }
    validate = ()=>{}
    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
            <form className="p-32" onSubmit={handleSubmit}>
              
<div class="tabs is-toggle is-fullwidth">
  <ul>
    <li >
      <a>
      <span className="icon is-small is-boxed"><i className="fas fa-align-justify" aria-hidden="true"></i></span>
        <span className="is-boxed is-left">Basic Intro</span>
      </a>
    </li>
    <li class="is-active">
      <a>
      <span className="icon is-small"><i className="far fa-plus-square" aria-hidden="true"></i></span>
        <span>Current Condition</span>
      </a>
    </li>
    <li>
      <a>
      <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
        <span>Medical History</span>
      </a>
    </li>
    <li>
      <a>
      <span className="icon is-small"><i className="fas fa-history" aria-hidden="true"></i></span>
        <span>Timeline</span>
      </a>
    </li>
    <li>
      <a>
      <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
        <span>Digital Representation</span>
      </a>
    </li>
  </ul>
</div>




<div className="columns is-full has-text-left has-background-info ">
                 <div className="column is-size-4-widescreen is-one-fifth has-text-weight-bold" >
                 <h1><i class="fas  fa-user-md"></i>  Dr. Vijay Thakre  </h1>
                   </div>
         
          <br/>
 		 <div className="column has-text-left is-one-fifth is-size-5-widescreen ">
   		    <h1>(General Physicist)</h1>
 		 </div>
 	 </div>    
              
 <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead>
    <tr>
      <th><abbr title="Position">Active Condition : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>1</th>
      <td>Active Condition 1</td>
      </tr>
      <tr>
      <th>2</th>
      <td>Active Condition 2</td>
      </tr>
      <tr>
      <th>3</th>
      <td>Active Condition 3</td>
      </tr>
      

  </tbody>


  <thead>
    <tr>
      <th><abbr title="Position">Active Medication : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>1</th>
      <td>Medicine 1</td>
      <td>ABC </td>
      </tr>
      <tr>
      <th>2</th>
      <td>Medicine 2</td>
      <td>XYZ</td>
      </tr>
      
  </tbody>

  <thead>
    <tr>
      <th><abbr title="Position">Noted Symptoms : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>1</th>
      <td>Symptom 1</td>
      <td>Registered Today</td>
     
      </tr>
      <tr>
      <th>2</th>
      <td>Symptom 2</td>
      <td>Registered Two Days ago</td>
     
      </tr>
      
  </tbody>


  
</table>




               
                  
            </form>
            )}
        />
    }


}
