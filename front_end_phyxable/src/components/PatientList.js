import React from "react";
import Patient from "./Patient";
import classes from "./PatientList.module.css";

const PatientList = (props) => {
  if (props.patients.length) {
    return (
      <table className={classes.list}>
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
              key={patient._id}
              patient={patient}
              onDelete={props.onDeletePatient}
            />
          ))}
        </tbody>
      </table>
    );
  } else {
    return <h3>No Patients Found</h3>;
  }
};

export default PatientList;
