import React from "react"
//import "./loginPage.sass"
import TempForm from "../../modules/common/TempForm/tempForm"
import Banner from "../../modules/common/Banner/banner"

export default function TempPage(){
    return <div className="  columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop login-form">
            <TempForm/>                 
        </div>
              
    </div>
}