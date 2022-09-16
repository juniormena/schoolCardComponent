import "./App.css";
import schoolCampus from "./assets/img/school-campus.jpg";
import SchoolCardComponent from "./components/SchoolCardComponent";

function App() {
  const schools = [
    {
      id: 1,
      image: schoolCampus,
      schoolName: "School Name",
      grades: "grades",
      totalStudents: "total students",
      address: "address",
      distanceAway: "distance away",
      programs: [
        { id: 1, name: "Program 1" },
        { id: 2, name: "Program 2" },
        { id: 3, name: "Program 3" },
      ],
    },
    {
      id: 2,
      image: schoolCampus,
      schoolName: "School Name 2",
      grades: "grades",
      totalStudents: "total students",
      address: "address",
      distanceAway: "distance away",
      programs: [
        { id: 1, name: "Program 4" },
        { id: 2, name: "Program 5" },
        { id: 3, name: "Program 6" },
      ],
    },
  ];
  return (
    <>
      {schools.map((school) => (
        <SchoolCardComponent key={school.id} school={school} />
      ))}
    </>
  );
}

export default App;
