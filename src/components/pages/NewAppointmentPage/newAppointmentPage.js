
/*
import React from "react"
import AppointmentForm from "../../modules/common/AppointmentForm/appointmentForm"

export default function NewAppointmentPage(){
    return <div>
		<AppointmentForm/>
	   </div>
}

*/


import React from "react";
import "./appointmentPage.sass";
import AppointmentForm from "../../modules/common/AppointmentForm/appointmentForm";
import AppointmentList from "../../modules/common/AppointmentList/appointmentList";

export default class NewAppointmentPage extends React.PureComponent {
  state = {
    appointment_list: [
      {
        id: 1,
        patient_id: 1,
        patient_name: "Jack Martin",
        patient_contact: "9890098900",
        patient_address: "101, ABC-XYZ Apt, Nagpur",
        appointment_type: "scheduled",
        patient_type: "follow-up",
      },
      {
        id: 2,
        patient_id: 2,
        patient_name: "Bob Marley",
        patient_contact: "9890098900",
        patient_address: "101, ABC-XYZ Apt, Nagpur",
        appointment_type: "scheduled",
        patient_type: "follow-up",
      },
      {
        id: 3,
        patient_id: 3,
        patient_name: "Willow Housten",
        patient_contact: "9890098900",
        patient_address: "101, ABC-XYZ Apt, Nagpur",
        appointment_type: "scheduled",
        patient_type: "follow-up",
      },
    ],
  };
  render() {
    return (
      <div className="ak-page ak-new-appointment-page columns is-centered is-gapless is-vcentered">
        <div className="column">
          <div className="columns">
            <div className="column is-half-desktop new-appointment-form">
              <AppointmentForm />
            </div>
            <div className="column is-half-desktop new-appointment-list">
              <AppointmentList appointment_list={this.state.appointment_list} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
