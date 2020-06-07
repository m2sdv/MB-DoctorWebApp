import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { validate, required, email, presence } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class SignupForm extends React.Component{
    onSubmit = async values => {
        await sleep(2000)        
    }
    validate = async values => {
        await sleep(2000)        
    }
    signin = async values =>{
        window.location = '/login'
    }
    render(){
        return <Form
            onClick={this.signin}
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, submitting }) => (
            <form className="p-64" onSubmit={handleSubmit}>  
                <div className="has-text-left m-b-7">
                    <h3>Create Your Account</h3>
                </div>
                <div>
                    <Field name="Username" 
                            validate={validate(required, email)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Email</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="username" placeholder="Email"
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

		    <Field name="Full Name"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Full Name</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="username" placeholder="Full Name"
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
                    <Field name="password" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Password</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="password" placeholder="Password"
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
                <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} type="submit">Sign Up</button>                
                <div className="m-t-32 m-b-32">
                    <p className="is-size-7">
                        Or  Sign In with already existing account
                    </p>

		    <div className="columns m-t-8">
                        <div className="column">
                            
                                
                            
                        </div>                    
                        <div className="column">
                           
                        </div>         
                        <div className="column">
                            

                            
                        </div>         
                    </div>
                </div>
                
                <a className="button is-primary is-outlined has-text-left m-t-16 m-b-16 is-fullwidth" onClick={this.signin}>Sign In</a>
            </form>
            )}
        />
    }
}

            
   
          
        
    


