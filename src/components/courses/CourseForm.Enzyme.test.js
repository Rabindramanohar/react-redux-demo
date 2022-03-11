import React from "react";
import CourseForm from "./CourseForm";
import { shallow } from "enzyme";

// factory design
function renderCourseFrom(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    error: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
}

it("render form and header", () => {
  const wrapper = renderCourseFrom();
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toBe("Add Course");
});

it("label save button as 'Save' when not saving", () => {
  const wrapper = renderCourseFrom();
  expect(wrapper.find("button").text()).toBe("Save");
});

it("label save button as 'Saving' when is saving", () => {
  const wrapper = renderCourseFrom({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
