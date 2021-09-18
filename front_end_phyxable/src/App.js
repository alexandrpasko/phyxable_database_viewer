import React, { useState, useEffect } from "react";
import './App.css';
import Container from "./components/Container";
import FixedDiv from "./components/FixedDiv";
import PatientList from "./components/PatientList";
import SearchField from "./components/SearchField";

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

  const [patients, setPatients] = useState(DUMMY_PATIENTS);
  const [filterEmail, setFilterEmail] = useState("");

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

  return (
    <Container>
      <FixedDiv>
        <h1>List Of Patients Phyxable Database Viewer</h1>
        <SearchField onChange={handleSearchEmail} placeholder="Search by email" />
      </FixedDiv>
      <PatientList patients={filterEmailList(patients)} />
    </Container>
  );
}

export default App;
