import React from "react";
import renderer from "react-test-renderer";
import Queue from "../components/home/Queue";
import { Provider } from "react-redux";
import store from "../store";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//Snapshot for Queue React Component
describe("Queue Snapshot", () => {
  it("capturing Snapshot of Queue", () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Queue />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe("Queue Component", () => {
  it("should not render if nothing in queue", () => {
    const comp = shallow(<Queue  store={store} />);
    const wrapper = comp.find(".card-content");
    expect(wrapper).toHaveLength(0);
  });
});
