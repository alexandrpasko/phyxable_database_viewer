import React from 'react'
import Patient from './Patient';


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
            />
          ))}
        </tbody>
      </table>
    )
}

export default PatientList
