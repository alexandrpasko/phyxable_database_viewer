import React from "react";
import Button from "./UI/Button";

const Patient = (props) => {

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete " + props.patient.email + "?")){
      props.onDelete(props.patient.id);
    }else{
      console.log('not deleted');
    }
  }

  return (
      <tr>
        <td>{props.patient.id}</td>
        <td>{props.patient.email}</td>
        <td><Button onClick={handleDelete} className="danger">Delete</Button></td>
      </tr>

  );
};

export default Patient;
