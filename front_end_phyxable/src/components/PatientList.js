import React from 'react'
import Patient from './Patient';
import classes from './PatientList.module.css';


const PatientList = (props) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              onDelete={props.onDeletePatient}
            />
          ))}
        </tbody>
      </table>
    )
}

export default PatientList
