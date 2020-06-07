import React from "react"
//import "./loginPage.sass"
import DoctorBasicForm from "../../modules/common/DoctorBasicForm/doctorBasicForm"
import Banner from "../../modules/common/Banner/banner"

export default function DoctorBasicPage(){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop login-form">
            <DoctorBasicForm/>                 
        </div>
        <div className="column is-half-desktop login-banner">
            <Banner/>                 
        </div>        
    </div>
}



