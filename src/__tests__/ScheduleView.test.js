import React from "react";
import renderer from "react-test-renderer";
import ScheduleView from "../components/home/ScheduleView";
import { shallow } from "enzyme";

//Snapshot for ScheduleView React Component
describe("SCHEDULEVIEW Snapshot", () => {
  it("capturing Snapshot of ScheduleView", () => {
    const renderedValue = renderer
      .create(
          <ScheduleView />
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe("ScheduleView Component", () => {
  it("should render an overarching div", () => {
    const comp = shallow(<ScheduleView />);
    expect(comp.find(".card-content")).toHaveLength(1);
  });

  it("should have mentor names", () => {
      const comp = shallow(<ScheduleView />);
      expect(comp.find("#mentorNames")).toHaveLength(1);
    });
    
  it("should have days of the week", () => {
    const comp = shallow(<ScheduleView />);
    expect(comp.find("#daysOfTheWeek")).toHaveLength(1);
  });

  it("should have working times", () => {
      const comp = shallow(<ScheduleView />);
      expect(comp.find("#workingTimes")).toHaveLength(1);
    });
});
