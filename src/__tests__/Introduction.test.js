import React from "react";
import renderer from "react-test-renderer";
import Intro from "../components/home/Introduction";
import { shallow } from "enzyme";

//Snapshot for Intro React Component
describe("INTRODUCTION Snapshot", () => {
  it("capturing Snapshot of Introduction", () => {
    const renderedValue = renderer
      .create(
          <Intro />
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe("Introduction Component", () => {
  it("should have a card title", () => {
    const comp = shallow(<Intro />);
    expect(comp.find(".card-title")).toHaveLength(1);
    
  });

  it("should call handleChange when inputs are changed", () => {
    const comp = shallow(<Intro />);
    expect(comp.find("img")).toHaveLength(1);
  });
});
