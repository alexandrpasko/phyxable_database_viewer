import React, { useState, useEffect } from "react";
import './App.css';
import Container from "./components/UI/Container";
import FixedDiv from "./components/UI/FixedDiv";
import Button from "./components/UI/Button";
import PatientList from "./components/PatientList";
import SearchField from "./components/SearchField";
import AddUserForm from "./components/AddUserForm";

const DUMMY_PATIENTS = [
  {
    id: "01",
    email: "alexandr@email.com",
  },
  {
    id: "02",
    email: "alfiya@email.com",
  },
  {
    id: "03",
    email: "danil@email.com",
  },
  {
    id: "04",
    email: "elina@email.com",
  },
  {
    id: "05",
    email: "alexandr@email.com",
  },
  {
    id: "06",
    email: "alfiya@email.com",
  },
  {
    id: "07",
    email: "danil@email.com",
  },
  {
    id: "08",
    email: "elina@email.com",
  },
  {
    id: "09",
    email: "alexandr@email.com",
  },
  {
    id: "10",
    email: "alfiya@email.com",
  },
];

function App() {

  const [patients, setPatients] = useState(DUMMY_PATIENTS); //temporary
  const [filterEmail, setFilterEmail] = useState("");
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  // useEffect(() => {
  //   fetch("https://api....")
  //     .then((response) => response.json())
  //     .then(
  //       (data) =>
  //         data.patients.length !== patients.length && setPatients(data.patients)
  //     );
  // }, [patients]);

  const toggleShowAddUserForm = () => setShowAddUserForm(!showAddUserForm);

  const handleSearchEmail = (value) => {
    setFilterEmail(value.toLowerCase().trim());
  };

  const filterEmailList = (allPatients) => {
    let filteredPatients = allPatients.filter(
      (patient) => {
        return patient.email.toString().toLowerCase().includes(filterEmail)
      }
    );
    return filteredPatients;
  };

  //nodeJS API
  const createNewUser = () => {
    console.log('added new');
  }

  //nodeJS API
  const deletePatient = (id) => {
    console.log("deleted id: " + id);
  }

  return (
    <Container>
      <FixedDiv>
        <h1>List Of Patients - Phyxable Database Viewer</h1>
        <SearchField onChange={handleSearchEmail} placeholder="Search by email" />
        <Button onClick={toggleShowAddUserForm} className="float_right">Add Patient</Button>
      </FixedDiv>
      <PatientList patients={filterEmailList(patients)} onDeletePatient={deletePatient} />
      {showAddUserForm && <AddUserForm onClose={toggleShowAddUserForm} onAddNew={createNewUser} />}
    </Container>
  );
}

export default App;
