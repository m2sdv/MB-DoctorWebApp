
import React from "react"
//import "./signupPage.sass"
import SignupForm from "../../modules/common/SignupForm/signupForm"
import Banner from "../../modules/common/Banner/banner"




export default function SignupPage(){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop login-form">
            <SignupForm/>                 
        </div>
        <div className="column is-one-quarter-desktop login-banner">
            <Banner/>                 
        </div>        
    </div>
}



