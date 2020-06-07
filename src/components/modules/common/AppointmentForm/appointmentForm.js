/*

import React from "react";
import { Form, Field } from 'react-final-form'

export default class LoginForm extends React.Component{
    onSubmit = ()=>{}
    validate = ()=>{}
    render(){
        return <Form
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
                
                <a className="button is-primary is-outlined has-text-left m-t-16 m-b-16 is-fullwidth">Sign Up</a>
            </form>
            )}
        />
    }
}

*/


/*


import React from 'react';
import { Form, Input, InputNumber, Button, Select,TimePicker, DatePicker, Layout, AutoComplete, map } from 'antd';
const { Option } = Select;


const { Header, Footer, Sider, Content } = Layout;
const AutoCompleteOption = AutoComplete.Option;
const {autoCompleteResult, setAutoCompleteResult} = Option;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a valid email!',
    number: 'Not a valid number!',
  },
  number: {
    range: 'Must be between ${min} and ${max}',
  },
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="86">+86</Option>
      <Option value="90">+87</Option>
    </Select>
  </Form.Item>
);
const onWebsiteChange = value => {
  if (!value) {
    setAutoCompleteResult([]);
  } else {
    setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
  }
};
const websiteOptions = autoCompleteResult && autoCompleteResult.map(website => ({
  label: website,
  value: website,
}));
function onChange(time, timeString) {
  console.log(time, timeString);
}

const RegistrationForm = () => {
  const onFinish = values => {
    console.log('Success:', values);

    const payload =  {
      "visit_datetime": "2020-02-21T02:02:00Z",
      "patient_name": "Rahul U",
      "mobile": "1212121",
      "status": "BOOKED",
      "doctor_name": "maheshwari"
    }

    fetch('http://localhost:8000/api/appointments/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Created Appointment:', data);
    });


  };

  return (

    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

      <Form.Item
        name={['user', 'name']}
        label="FullName"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
         name="phone"
         label="Phone Number"
         rules={[
           {
             required: true,
             message: 'Please input your phone number!',
           },
         ]}
      >
        <Input
        addonBefore={prefixSelector}
        style={{
          width: '100%',
        }}
        />
      </Form.Item>

      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',

          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Select
          placeholder="Select a Gender"
       >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
     </Form.Item>
     <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: 'Please input website!',
          },
        ]}
      >
      <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>


      <Form.Item name={['name','name']} label= "Date and Time">
      <DatePicker/> <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{ width: 140 }} /> </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Address"><Input.TextArea /></Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;

*/








import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class AppointmentForm extends React.Component{
  state = { 
      show_id: true,
      show_name: false,
      show_contact: false,
      show_address: false,
      show_ptype: false,
      show_atype: false,
      show_date: false
  }

    onSubmit = async values => {
      
    
        await sleep(2000)        
    }
    validate = async values => {
        await sleep(2000)        
    }
    patientId = async values => {
      if(this.state.show_id === true){
        this.setState({show_name: true, show_contact: true, show_address: true, show_ptype: true, show_atype: true, show_id: false})
      } else {
        this.setState({show_name: false, show_contact: false, show_address: false, show_ptype: false, show_atype: false, show_id: true})
      }

    }
    scheduled = async values =>{
      this.setState({show_date: true})
    }
    fifo = async values =>{
      this.setState({show_date: false})
    }
    

    render(){
        return <Form
            onClick={this.patientId}
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, submitting }) => (
            <form className="p-64" onSubmit={handleSubmit} >
	   <div className="columns has-text-left  has-background-grey-lighter ">
 		 <div className="column is-size-4-widescreen is-one-fifth has-text-weight-bold" >
                  <h1>Dr. Vijay Thakre</h1>
 		 </div>
 		 <div className="column has-text-bottom is-one-fifth is-widescreen is-family-code m-b-18">
   		General Physicist
 		 </div>
 		 <div className="column has-text-right family-sans-serif">
   		 Setting
 		  </div>	
      </div>    
                <div className="has-text-left is-size-4">
                    <h3>Book New Appointment</h3>
                </div>

		    <div className="columns is-variable is-8">
        		<div className="column is-half is-variable is-8">
		    <div>
             {this.state.show_id && <Field name="id"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
				            <div className="column is-full">
                    <div className="columns is-full">
                      
  </div>	
				</div>
        
              <label className="label has-text-left has-text-grey is-size-7 has-text-weight-bold">Patient Id</label>
                <div className="control">  
                  <input className={cx("input is-size-7",
                      {  "is-success": !meta.error && meta.touched,
                        "is-danger": meta.error && meta.touched})}
                          {...input}
                            type="Id" placeholder="Please enter your Patient Id"
                            
                  />
                </div>
                        { meta.error && meta.touched &&
                          <p className={cx("help has-text-left is-size-7",
                              {"is-success": !meta.error && meta.touched,
                                "is-danger": meta.error && meta.touched})}>
                              {meta.error}
                          </p>
                        }
                        <a onClick={this.patientId}>Do not have patient Id!</a>
          </div>
                          )}        
                    </Field>}
                    
                                                                        
		   
                    
          </div>
          <div>
                {this.state.show_name && <Field name="name"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <div className="has-text-left m-b-18">
                                <h1>If you do not have Patient Id, then book appointment here</h1>
                                </div>
                                <label className="label has-text-left has-text-grey is-size-7 has-text-weight-bold">Patient Name</label>
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
                    </Field>}
                  </div>
		    <div>
                    {this.state.show_contact && <Field name="contact"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <div className="has-text-left m-b-18">
                                
                                </div>
                                <label className="label has-text-left has-text-grey is-size-7 has-text-weight-bold">Contact No.</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="integer" placeholder="Enter your Contact no."
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
		    <div>
              {this.state.show_address && <Field name="address"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <div className="has-text-left m-b-18">
                                
                                </div>
                                <label className="label has-text-left has-text-grey is-size-7 has-text-weight-bold">Address</label>
                                <div className="control">
                                    <input className={cx("input is-textarea is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="textarea" placeholder="Please Enter your Address"
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
          
          </div>
</div>
        
<div className="columns is-variable is-8">
  <div className="column is-half is-8">
                  <div>
                    {this.state.show_ptype && <Field name="ptype"
                            validate={validate()}>
                        {({ input, meta }) => (
                            <div className="field">
				
                                <label className="label has-text-left has-text-grey is-size-7 has-text-weight-bold">Patient Type</label>
                                <div className="control">
                                <select>
                                       <option>Select Patient Type</option>
                                       <option>New</option>
                                       <option>Follow up</option>
                                       <option>Emergency</option>
                                       <option>Report Showing</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </Field>}
                  </div>
                  </div>
                  </div>
                  <div className="columns is full is-variable is-8">
                  <div className="column is-full is-8">
                  <div>
                  {this.state.show_atype && <Field name="atype"
                            validate={validate()}>
                         {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-left has-text-grey is-size-7 has-text-weight-bold">Appointment Type</label>
                                <div className="control">
		                 <div className=" input-is-radio m-b-16">
                     <div className="control">
                       <label className="radio">
                         <input type="radio" name="myRadios" onClick={this.fifo}/>
                          FIFO
                        </label>
                       <label className="radio is-one-fifth">
                         <input type="radio" name="myRadios" onClick={this.scheduled}/>
                         Scheduled
                       </label>
                     </div>
                     <div className="columns is-full">
                     <div className="column m-b-24 is-full text-has-right">
                     <a onClick={this.patientId}>Patient Id</a>
                     </div>
                     </div>
                     </div>
    </div>
				
    </div>
                        )}
                    </Field>}
                    <div>
                    {this.state.show_date && <Field name="date"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey has-text-left has-text-weight-bold is-size-7">Select your Scheduled date</label>
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
                    </Field>}
                    </div>
                    
                   
                      
                  </div>
  </div>
</div>
                
	 
                <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-small is-centered", {
                    "is-loading": submitting
                })} type="submit">Add</button>  
		   
	 
                
                
            </form>
            )}
        />
    }
    
}


























