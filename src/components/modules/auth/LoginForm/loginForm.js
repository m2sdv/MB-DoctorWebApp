import React from "react";
import { Form, Field } from 'react-final-form'

export default class LoginForm extends React.Component{
    onSubmit = ()=>{
        
    }
    validate = ()=>{}
    reset = async values =>{
        window.location = '/resetpassword'
    }
    signup = async values =>{
        window.location = '/signup'
    }

    render(){
        return <Form
            onClick={this.signup}
            onClick={this.reset}
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit }) => (
            <form className="p-64" onSubmit={handleSubmit}>  
                <div className="has-text-left m-b-16">
                    <h3>Login</h3>
                </div>
                <div>
                    <div className="field">
                        <label className="label has-text-grey is-size-7">Email or Mobile</label>
                        <div className="control">
                            <Field className="input is-size-7" name="username" component="input" placeholder="Email or Mobile" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-grey is-size-7">Password</label>
                        <div className="control">
                            <Field className="input is-size-7" type="password" name="password" component="input" placeholder="Password" />
                        </div>
                    </div>
                </div>                
                <button className="button is-primary has-text-left m-t-16 m-b-16 is-fullwidth" type="submit">Login</button>                
                <div className="m-t-32 m-b-32">
                    <p className="is-size-7">
                        Or Sign in with
                    </p>
                    <div className="columns m-t-8">
                        <div className="column">
                            <a className="button is-default is-circle is-borderless has-text-white w-32 h-32 has-background-google"
                                href="#google">
                                <span className="icon is-small">
                                    <i className="fab fa-google-plus-g"></i>
                                </span>
                            </a>
                        </div>                    
                        <div className="column">
                            <a className="button is-default is-circle is-borderless has-text-white w-32 h-32  has-background-facebook"
                                href="#facebook">
                                <span className="icon is-small">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                            </a>
                        </div>         
                        <div className="column">
                            <a className="button is-default is-circle is-borderless has-text-white w-32 h-32 has-background-twitter"
                                href="#twitter">
                                <span className="icon is-small">
                                    <i className="fab fa-twitter"></i>
                                </span>
                            </a>
                        </div>         
                    </div>
                </div>
                
                <a className="button is-primary is-outlined has-text-left m-t-16 m-b-16 is-fullwidth" onClick={this.signup}>Sign Up</a>

	        <a className=" has-text-right m-t-16 m-b-16 is-fullwidth "></a>	
            <a onClick={this.reset}>Forgot Password?</a>    
            </form>
            )}
        />
    }
}
