import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required, email, presence } from '../validations';

export default class MedicalHistoryForm extends React.Component{
    onSubmit = ()=>{
    }
    validate = ()=>{}
    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
            <form className="p-64" onSubmit={handleSubmit}>
<div class="tabs is-toggle is-fullwidth">
  <ul>
    <li >
      <a>
      <span className="icon is-small is-boxed"><i className="fas fa-align-justify" aria-hidden="true"></i></span>
        <span className="is-boxed is-left">Basic Intro</span>
      </a>
    </li>
    <li >
      <a>
      <span className="icon is-small"><i className="far fa-plus-square" aria-hidden="true"></i></span>
        <span>Current Condition</span>
      </a>
    </li>
    <li class="is-active">
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
          
                

<div class="table-container">
 <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead>
    <tr>
      <th><abbr title="Position">History Of Condition : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>Condition</th>
      <td>Anemia</td>
      <td>Hypertension</td>
      </tr>
      <tr>
      <th>Degree</th>
      <td>Acurate Persistance</td>
      <td>Mild Persistance</td>
      </tr>
      <tr>
      <th>Last Occurance</th>
      <td>present</td>
      <td>present</td>
      </tr>
       <tr>
      <th>Duration</th>
      <td>2 months</td>
      <td>Past 7 Years</td>
      </tr>
      <tr>
      <th>Medication</th>
      <td>Medicine 1</td>
      <td>Medicine 2</td>
      </tr>
      

  </tbody>


  

  <thead>
    <tr>
      <th><abbr title="Position">Surgical History  : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>Surgery</th>
      <td>Sur 1</td>
     
      </tr>
      <tr>
      <th>Degree</th>
      <td>Degree 1</td>
     
      </tr>
      <tr>
      <th>Date</th>
      <td>1/1/1990</td>
      
      </tr>
       
      <tr>
      <th>Medication</th>
      <td>Medicine 1</td>
      <td>Medicine 2</td>
      </tr>
</tbody>
      
<thead>
    <tr>
      <th><abbr title="Position">History of Relative : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>Condition</th>
      <td>Condition 1</td>
     
      </tr>
      <tr>
      <th>Degree</th>
      <td>Degree 1</td>
     
      </tr>
      <tr>
      <th>Relation</th>
      <td>Daughter</td>
      
      </tr>
       

  </tbody>


  <thead>
    <tr>
      <th><abbr title="Position">Immunization History  : </abbr></th>
       </tr>
  </thead>
  
  <tbody>
    <tr>
      <th>Immunization</th>
      <td>Immunization 1</td>
     
      </tr>
      <tr>
      <th>Date</th>
      <td>1/1/1990</td>
     
      </tr>
      <tr>
      <th>Active Till</th>
      <td>1/1/2030</td>
      
      </tr>
       

  </tbody>

  
</table>

</div>


                  
            </form>
            )}
        />
    }


}