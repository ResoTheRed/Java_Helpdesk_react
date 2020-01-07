import React from "react";
import renderer from "react-test-renderer";
import Current from "../components/home/Current";
import { shallow } from "enzyme";

//Snapshot for Current React Component
describe("CURRENT Snapshot", () => {
  it("capturing Snapshot of Current", () => {
    const renderedValue = renderer
      .create(
          <Current />
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe("Current Component", () => {
  it("should render an overarching div", () => {
    const comp = shallow(<Current />);
    expect(comp.find("#current")).toHaveLength(1);
  });
});
