import React from "react";
import "./appointmentList.sass";

export default class AppointmentList extends React.PureComponent {
  render() {
    const { appointment_list } = this.props;
    return (
      <div className="ak-appointment-list">
        {appointment_list.map((appointment) => (
          <div key={appointment.id} className={"ak-appointment-list-item"}>
            <div class="columns">
            <div class="column">
            Name: {appointment.patient_name}
            </div>
            <div class="column">
            Type: {appointment.appointment_type}
            </div>
            <div class="column">
            Contact: {appointment.patient_contact}
            </div>
            <div class="column">
            Address: {appointment.patient_address}
            </div>
            <div class="column">
            Patient type: {appointment.patient_type}
            </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
