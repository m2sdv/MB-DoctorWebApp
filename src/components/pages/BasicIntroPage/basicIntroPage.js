
import React from "react"
import "./basicIntroPage.sass"
import BasicIntroForm from "../../modules/common/BasicIntroForm/basicIntroForm"


export default function BasicIntroPage(){
    return <div className="ak-page ak-basic-page columns is-gapless">
        <div className="column is-full-desktop login-form">
            <BasicIntroForm/>                 
        </div>
        <div className="column is-half-desktop login-banner">
                           
        </div>        
    </div>
}



