function CourseBox({ title, description }) {
    return (
      <div className="course-box bg-white p-3 my-3">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn btn-primary">Start Learning</button>
      </div>
    );
  }
  
  export default CourseBox;
  