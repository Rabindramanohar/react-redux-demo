import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Videos</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => (
        <tr key={course.id}>
          <td>
            <a
              className="btn btn-light"
              href={"http://pluralsight.com/courses/" + course.slug}
            >
              Watch
            </a>
          </td>
          <td>
            <Link to={"/courses/" + course.slug}>{course.title}</Link>
          </td>
          {/* {console.log(course)} */}
          <td>{course.authorName}</td>
          <td>{course.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropsTypes.array.isRequired,
};

export default CourseList;
