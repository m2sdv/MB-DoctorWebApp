import React from "react"
//import "./loginPage.sass"
import DoctorCommercialForm from "../../modules/common/DoctorCommercialForm/doctorCommercialForm"
import Banner from "../../modules/common/Banner/banner"

export default function  DoctorCommercialPage (){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop login-form">
            <DoctorCommercialForm/>                 
        </div>
        <div className="column is-one-quarter-desktop login-form">
            
        <div className="has-text-centered m-t-14">
            <h3> Appointment List</h3>
            <h4>1) Praful Tarare</h4>
            <h4>2) Vasant Ghodmare</h4>
            </div>

        </div>
            
    </div>
}

