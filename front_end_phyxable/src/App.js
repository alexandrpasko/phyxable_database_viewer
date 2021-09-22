import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/UI/Container";
import FixedDiv from "./components/UI/FixedDiv";
import Button from "./components/UI/Button";
import PatientList from "./components/PatientList";
import SearchField from "./components/SearchField";
import AddPatientForm from "./components/AddPatientForm";
import FlashMessage from "./components/UI/FlashMessage";

function App() {
  const [patients, setPatients] = useState([]);
  const [filterEmail, setFilterEmail] = useState("");
  const [showAddPatientForm, setShowAddPatientForm] = useState(false);
  const [flashMessageIsOpen, setFlashMessageIsOpen] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");

  // get all patients from database
  useEffect(() => {
    fetch("http://localhost:3001/patients/")
      .then((response) => response.json())
      .then((data) => {
        data.length !== patients.length && setPatients(data);
      });
  }, [patients, flashMessageIsOpen]);

  // show/hide a form to create a new user
  const toggleShowAddPatientForm = () =>
    setShowAddPatientForm(!showAddPatientForm);

  // save search term - trimmed and lowercase
  const handleSearchEmail = (value) => {
    setFilterEmail(value.toLowerCase().trim());
  };

  //filter the list based on search string
  const filterEmailList = (allPatients) => {
    let filteredPatients = allPatients.filter((patient) => {
      return patient.email.toString().toLowerCase().includes(filterEmail);
    });
    return filteredPatients;
  };

  //nodeJS API create new patient
  const createNewPatient = (email) => {
    fetch("http://localhost:3001/patients/", {
      method: "POST",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        setFlashMessage("New patient has been created");
        setFlashMessageIsOpen("true");
      })
      .catch((error) => console.error("Error: ", error));
  };

  //nodeJS API delete a patient
  const deletePatient = (id) => {
    fetch("http://localhost:3001/patients/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("Success: ", res);
        setFlashMessage("The patient has been deleted");
        setFlashMessageIsOpen("true");
      })
      .catch((error) => console.error("Error: ", error));
  };

  //clear flash message function
  const clearFlashMessage = () => {
    setFlashMessage("");
    setFlashMessageIsOpen(false);
  };

  return (
    <Container>
      <FixedDiv>
        <h1>List Of Patients - Phyxable Database Viewer</h1>
        <SearchField
          onChange={handleSearchEmail}
          placeholder="Search by email"
        />
        <Button onClick={toggleShowAddPatientForm} className="float_right">
          Add Patient
        </Button>
      </FixedDiv>
      <PatientList
        patients={filterEmailList(patients)}
        onDeletePatient={deletePatient}
      />
      {showAddPatientForm && (
        <AddPatientForm
          onClose={toggleShowAddPatientForm}
          onAddNew={createNewPatient}
        />
      )}
      {flashMessageIsOpen && (
        <FlashMessage
          duration={4000}
          message={flashMessage}
          onClose={clearFlashMessage}
        />
      )}
    </Container>
  );
}

export default App;
