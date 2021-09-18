import React, { useState } from "react";

const Patient = (props) => {

  return (
      <tr>
        <td>{props.patient.id}</td>
        <td>{props.patient.email}</td>
        <td>delete</td>
      </tr>

  );
};

export default Patient;
