import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required, email, presence } from '../validations';

export default class DoctorBasicIntroForm extends React.Component{
    onSubmit = ()=>{
    }
    validate = ()=>{}
    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
            <form className=" p-32" onSubmit={handleSubmit}>

<div class="tabs is-toggle is-fullwidth">
  <ul>
    <li class="is-active">
      <a>
      <span className="icon is-small is-boxed"><i className="fas fa-align-justify" aria-hidden="true"></i></span>
        <span className="is-boxed is-left">Basic Intro</span>
      </a>
    </li>
    <li>
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
                 <div className="column is-size-4-widescreen is-one-fifth has-text-weight-bold " >
                 <h1><i class="fas  fa-user-md"></i>  Dr. Vijay Thakre  </h1>
                   </div>
         
          <br/>
 		 <div className="column has-text-left is-one-fifth is-size-5-widescreen ">
   		    <h1>(General Physicist)</h1>
 		 </div>
 	 </div>    
               
    <div className="columns p-64 m-l-128 is-centered is-vcentered is-mobile">
        <div className="column  is-half has-text-centered  ">
            

            <div>
               
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Patient Name: John Cena</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

            </div>

             <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Gender:  Male</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Age:  67</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Blood Group:  B -ve</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Height:  170 cm</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Weight:  90 kg</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">BMI:  100</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Occupation:  Wrestler</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Allergies:  Dust</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Addiction:  No addiction</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>
                    <div>
                <div className="field">
                        <label className="label has-text-left has-text-weight-bold has-text-black is-size-10">Marital Status:  Unmarried</label>
                        <div className="control">
                            <Field  name="username" component="text"  />
                        </div>
                    </div>

                    </div>

                   
                </div>
                <div className="column  has-text-right m-r-128 ">
                    <i class="far  fa-10x fas fa-id-badge"></i>
                    
                </div>
                
                
              </div>
               
                  
            </form>
            )}
        />
    }
}







