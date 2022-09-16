import schoolCampus from "../assets/img/school-campus.jpg";
import schoolCampus2 from "../assets/img/school-campus2.jpg";

export const getSchools = () => {
  return [
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
      image: schoolCampus2,
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
};
