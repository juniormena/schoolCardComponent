import { useState, useEffect } from "react";
import "./App.css";
import SchoolCardComponent from "./components/SchoolCardComponent";
import { getSchools } from "./services/schoolServices";

function App() {
  const params = new URLSearchParams(window.location.search);
  const schoolId = params.get("school");
  const [schools, updateSchools] = useState([]);

  useEffect(() => {
    updateSchools(getSchools());
  }, []);

  return (
    <>
      {schools
        .filter((school) => {
          if (!schoolId) return school;
          else return school.id === parseInt(schoolId);
        })
        .map((school) => (
          <SchoolCardComponent key={school.id} school={school} />
        ))}
    </>
  );
}

export default App;
