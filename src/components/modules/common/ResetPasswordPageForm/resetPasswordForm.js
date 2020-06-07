import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { validate, required, email } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class ResetPasswordForm extends React.Component{
    state = {
        show_otp: false,
	show_password: false,
	show_email: true
	
    }

    onSubmit = async values => {
	    if(this.state.show_otp === false && this.state.show_password === false) {
                this.setState({show_otp: true}) && this.setstate({show_password: false})
		    console.log("if-1");
	    } else {
                    this.setState({show_email: false, show_password: true, show_otp: false})
		    console.log("else-1");
          }
	    await sleep(2000)       
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
                <div className="has-text-left m-b-16">
                    <h3>Reset Password</h3>
                </div>
                <div>
		    {this.state.show_email && <Field name="email" 
                            validate={validate(required, email)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Email</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="email" placeholder="Email" disabled={this.state.show_otp}
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
                    </Field>}
		   
                    {this.state.show_otp && <Field name="otp" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">OTP</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="otp" placeholder="OTP"
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
                    </Field>}
		    
		    
		    {this.state.show_password && <Field name="password"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">New Password</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="password" placeholder="Enter New Password" 
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
          	    </Field>}
	    

                </div>                
                <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} type="submit">
                    {!this.state.show_otp && this.state.show_email && "Reset Password"}
		    {this.state.show_otp && this.state.show_email && "Submit OTP"}
		    {this.state.show_password && "Update"}
		    
                </button>           
                                
            </form>
            )}
        />
    }
}

