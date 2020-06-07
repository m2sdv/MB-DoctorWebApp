import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required, presence } from '../../common/validations';
import POST from "./POST.js";
import cx from "classnames";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class DoctorCommercialForm extends React.Component{
    constructor() {
        super();
        this.postID=0;
              
        this.state = {
                postArray: [
             ],
                name: "Rahul",
                address: "",
                id: "",
                phone: ""
            }
        }
        


    onSubmit = (e)=>{
            this.setState({
                name: e.name,
                //address: e.address,
                //phone: e.phone

                        
            })
            console.log(e);
          
        
            this.postID = this.postID + 1 ;
            const copyPostArray = Object.assign([], this.state.postArray)
            copyPostArray.push({
                id: this.postID,
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone
    
            })
            this.setState({
                postArray: copyPostArray,
                
                
            }) 
    }

    validate = async values => {
        await sleep(2000)        
    }

    
    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, submitting }) => (
            <form className="p-64" onSubmit={handleSubmit}>  
                <div className="has-text-left m-b-14">
                    
                    <h3>Commercial Facilities</h3>
                </div>
                <div class="columns">
            <div class="column is-full">
                <div>
                    <Field name="name" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Name</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="name" placeholder="Plase enter your full name" onSubmit={this.onSubmit}
                                    />                                                                    
                                </div>     
                                { meta.error && meta.touched && 
                                    <p className={cx("help has-text-left is-size-7", 
                                        {"is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}>
                                        {meta.error}
                                    </p>
                                }                           
                            </div>                            
                        )}                        
                    </Field>

		    <Field name="address"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Address</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="address" placeholder="Please enter your Address" onSubmit={this.onSubmit}
                                    />
                                </div>
                                { meta.error && meta.touched &&
                                    <p className={cx("help has-text-left is-size-7",
                                        {"is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}>
                                        {meta.error}
                                    </p>
                                }
                            </div>
                        )}
                    </Field>
		    <Field name="city" 
                            validate={validate()}>
                        {({}) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">City/District</label>
                                <div className="control">
				     <div class="select is-small">
                                     <select>
                                       <option className=" label has-text-grey">____Select City/District_______</option>
                                       <option>Nagpur</option>
                                       <option>Mumbai</option>
                                       <option>Pune</option>
                                    </select>
                                    </div>       
                                     
                                                                                                       
                                </div>                                  
                            </div>                            
                        )}                        
                    </Field>
                    <Field name="State"
                            validate={validate()}>
                         {({ select }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">State</label>
                                <div className="control">
	
		                 <div class="select is-small">
                                    <select>
                                       <option>_______Select State________</option>
                                       <option>Maharashtra</option>
				                       <option>Telangana</option>
				                       <option>Andhra Pradesh</option>
                                    </select>
                                 </div>
                                </div>
                            </div>
                        )}
                    </Field>
		    <Field name="phone"
                            validate={validate(required)}>
                         {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Phone</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="phone" placeholder="Please enter your Phone" onSubmit={this.onSubmit}
                                    />
                                </div>
                                { meta.error && meta.touched &&
                                    <p className={cx("help has-text-left is-size-7",
                                        {"is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}>
                                        {meta.error}
                                    </p>
                                }
                            </div>
                        )}
                    </Field>
                </div> 
                </div>
                <div class="column is-full">  
                <ul>
            { 
            this.state.postArray.map((post) => {
                return (
                    <div>
                        <div key={post.id} className={"ak-commercial-list-item"}>
                         <POST
                            key = {post.id}
                            id = {post.id}
                            name = {post.name}
                            address = {post.address}
                            phone = {post.phone}
                    
                    />
                    </div>
                    </div>
                    
                   
                )
            }) 
        
        }
            
        </ul>  
        </div> 
        </div>                                  
                <div className="m-t-32 m-b-32">
                    <p className="is-size-7">
                          Add a Commercial Facility
		            </p> 


                    <div className="columns">
            <div className="column is-two-third">
		     <button className="button is-primary is-outlined has-text-left m-t-16 m-b-16 is-fullwidth" type="submit" >Add Commercial Facility</button>		   
             </div>
             <div className="column">
            
            </div>
            </div>             
               </div>            
            <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} >Submit</button>

            </form>
            )}
        />
    }
}

            
   
          
        
    




