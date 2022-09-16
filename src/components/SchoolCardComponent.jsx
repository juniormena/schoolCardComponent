import { useState } from "react";

const SchoolCardComponent = ({ school }) => {
  const {
    id,
    image,
    schoolName,
    grades,
    totalStudents,
    address,
    distanceAway,
    programs,
  } = school;
  const [collapseState, updateCollapseState] = useState(false);
  const upArrow = <span>&#8593;</span>;
  const downArrow = <span>&#8595;</span>;

  const toggleCollapseSchoolPrograms = () => {
    updateCollapseState(!collapseState);
  };

  const getCollapsedClass = () => {
    if(collapseState) return "collapsed";
    return "";

  };

  return (
    <div className="school-card">
      <section
        className="school-card-body"
        onClick={() => {
          // this will only work in localhost mode
          window.location.href = `/school?school=${id}`;
        }}
      >
        <img src={image} alt="school campus" />
        <div className="school-card-info">
          <h2 className="card-title">{schoolName}</h2>
          <p>{grades}</p>
          <p>{totalStudents}</p>
          <p>{address}</p>
          <p>{distanceAway}</p>
        </div>
      </section>
      <section className="school-card-footer">
        <div
          className="school-program-title"
          onClick={toggleCollapseSchoolPrograms}
        >
          <h3 className="card-title">Programs Offered</h3>
          {collapseState ? upArrow : downArrow}
        </div>
        <div className={`school-programs-collapsable ${getCollapsedClass()}`}>
          {programs.map((program) => (
            <article className="school-program" key={program.id}>
              <p>{program.name}</p>
              <span>&#43;</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchoolCardComponent;