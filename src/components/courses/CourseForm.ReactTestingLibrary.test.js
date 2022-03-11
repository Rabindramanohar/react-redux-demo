import React from "react";
import { render } from "@testing-library/react";
import CourseForm from "./CourseForm";

// factory design
function renderCourseFrom(args) {
  const defalutProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defalutProps, ...args };
  return render(<CourseForm {...props} />);
}

it("should render Add Course header", () => {
  const { getByText } = renderCourseFrom();
  getByText("Add Course");
});

it("should label save button as 'Save' not saving", () => {
  const { getByText } = renderCourseFrom();
  getByText("Save");
});

it("should label save button as 'Saving...' when saving", () => {
  const { getByText, debug } = renderCourseFrom({ saving: true });
  debug();
  getByText("Saving...");
});
