import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import cx from "classnames";
import { validate, required, email, presence } from '../../common/validations';


export default class DoctorProfessionalForm extends React.Component{
    onSubmit = ()=>{
	    
		    window.location = "/drcommercial" 
	   

    }
    validate = ()=>{}

	


    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
            <form className="p-64" onSubmit={handleSubmit}>
                <div className="has-text-left m-b-16">
                    <h3>Professional Information</h3>
                </div>
                <div>
                    <div>
                         <Field name="field" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Reg. No.</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="integer" placeholder="Please enter your Registration Number"
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
                    <div>
		    <Field name="field"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey m-t-8 is-size-7">Speciality</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="text" placeholder="Please enter your Speciality"
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
		    
		    <Field name="field"
                            validate={validate()}>
                         {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey m-t-8 is-size-7">Qualification</label>
                                <div className="control">

		                 <div className="select is-small is-focused">
                                    <select>
                                       <option>____Select Qualification____</option>
                                       <option>M.B.B.S</option>
				       <option>B.A.M.S</option>
				       <option>M.D</option>
                                    </select>
                                 </div>
                                </div>
				
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

                            








