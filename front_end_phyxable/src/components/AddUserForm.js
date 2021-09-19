import React, {useState} from 'react'
import classes from './AddUserForm.module.css';
import Button from './UI/Button';


const AddUserForm = (props) => {
    const [inputAddNewPatient, setInputAddNewPatient] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleChangeNewPatient = (e) => {
      setInputAddNewPatient(e.target.value.trim());
    };
  
    const handleSubmitAddPatient = (e) => {
      e.preventDefault();
      if (!inputAddNewPatient.match(/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i)) {
        setErrorMessage("* Please enter a valid email");
        return;
      }
  
      props.onAddNew(inputAddNewPatient);
      props.onClose();
      setErrorMessage("");
      setInputAddNewPatient("");
    };
  
    return (
        <div className={classes.backdrop}>
            <div className={classes.modal}>
                <h2>Add New Patient</h2>
                <form onSubmit={handleSubmitAddPatient}>
                    <input
                    placeholder="Enter Email Address"
                    value={inputAddNewPatient}
                    onChange={handleChangeNewPatient}
                    ></input>
                    {errorMessage ? <p className={classes.error_message}>{errorMessage}</p> : ""}
                </form>
                <Button onClick={handleSubmitAddPatient}>Add Patient</Button>
                <Button onClick={props.onClose} className="danger">Cancel</Button>
            </div>
        </div>
    );
}

export default AddUserForm
