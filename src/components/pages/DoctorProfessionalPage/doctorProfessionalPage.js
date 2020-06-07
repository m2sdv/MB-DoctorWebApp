import React from "react"
//import "./loginPage.sass"
import DoctorProfessionalForm from "../../modules/common/DoctorProfessionalForm/doctorProfessionalForm"
import Banner from "../../modules/common/Banner/banner"

export default function DoctorProfessionalPage(){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-two-quarter-desktop is-narrow login-form">
            <DoctorProfessionalForm/>                 
        </div>
        <div className="column is-half-desktop login-banner">
            <Banner/>                 
        </div>        
    </div>
}



