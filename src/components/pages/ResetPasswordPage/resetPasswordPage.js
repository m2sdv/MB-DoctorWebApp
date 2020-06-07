import React from "react"
//import "./loginPage.sass"
import ResetPasswordPageForm from "../../modules/common/ResetPasswordPageForm/resetPasswordForm"
import Banner from "../../modules/common/Banner/banner"

export default function ResetPasswordPage(){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop login-form">
            <ResetPasswordPageForm/>                 
        </div>
        <div className="column is-half-desktop login-banner">
            <Banner/>                 
        </div>        
    </div>
}


