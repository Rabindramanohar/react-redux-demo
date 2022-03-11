import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

// Note how with shallow render you search for the react compopent tag
it("constains 3 navlinks via shallow", () => {
  const numLinks = shallow(<Header />).find("NavLink").length;
  expect(numLinks).toBe(3);
});

// Note how with mount you search for the final rendered HTML since it generate the final DOM.
// We also need to pull in the React Router's memoryRouter for testing since the Header expect to have React Router's props passed in.
it("constains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toBe(3);
});
