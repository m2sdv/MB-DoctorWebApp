
import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required, email, presence } from '../../common/validations';

import cx from "classnames";



export default class DoctorBasicForm extends React.Component{
    onSubmit = ()=>{
       
	    window.location = "/drprofessional"
    }
    validate = ()=>{}
    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
            <form className="p-64" onSubmit={handleSubmit}>
                <div className="has-text-left m-b-7">
                    <h3>Basic Information</h3>
                </div>
                <div>
                    <Field name="Name"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey m-t-8 is-size-7">Name</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="name" placeholder="Please enter your name"
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

		    <Field name="Sex" 
                            validate={validate()}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Sex</label>
                                <div className="control">
				     <div className="select is-small">
                                     <select>
                                       <option>______Select Gender______</option>
                                       <option>Male</option>
                                       <option>Female</option>
                                       <option>Other</option>
                                    </select>
                                    </div>       
                                     
                                                                                                       
                                </div>  
			
                            </div>                            
                        )}                        
                    </Field>
                    <Field name="DOB"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">DOB</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="date" placeholder="Please enter your DOB"
                                    />
                                </div>
                                { meta.error && meta.touched &&
                                    <p className={cx("help has-text-left is-size-7", {"is-danger": meta.error && meta.touched})}>
                                        {meta.error}
                                    </p>
                                }
                            </div>
                        )}
                    </Field>
                </div>
                 <button className="button is-primary has-text-left m-t-16 m-b-16 is-fullwidth" type="submit">Submit</button>  
            </form>
            )}
        />
    }
}









