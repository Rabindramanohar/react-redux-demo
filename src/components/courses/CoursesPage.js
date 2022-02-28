import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (e) => {
    console.log(e);
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <button type="submit">Save</button>
        {this.props.courses.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  // determines what part of the state we expose to component
  // debugger;
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  // determines what actions we expose to component
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
