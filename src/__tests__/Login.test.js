import React from "react";
import renderer from "react-test-renderer";
import Login from "../components/login/Login";
import { Provider } from "react-redux";
import store from "../store";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

//Snapshot for Login React Component
describe("LOGIN Snapshot", () => {
  it("capturing Snapshot of Login", () => {
    const renderedValue = renderer
      .create(
        <Provider store={store}>
          <Login email={"schalise@uno.edu"} password={"1234asdf"} />
        </Provider>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe("Login Component", () => {
  it("should have have a email and password field and a submit button", () => {
    const state = {
      email: "schalise@uno.edu",
      password: "1234asdf"
    };
    const comp = mount(<Login {...state} store={store} />);
    const email = comp.find("#email");
    const password = comp.find("#password");
    const submitButton = comp.find("#submitButton");
    expect(email).toHaveLength(1);
    expect(password).toHaveLength(1);
    expect(submitButton).toHaveLength(1);
    comp.unmount;
  });

  // it("should call handleChange when inputs are changed", () => {
    // const state = {
    //   email: "schalise@uno.edu",
    //   password: "1234asdf"
    // };
    // const comp = shallow(
    //   <Login {...state} store={store} login={mockLoginfn} />
    // );
    // console.log(comp.debug());
    // // const spy = jest.spyOn(comp.instance(), "handleSubmit");
    // const email = comp.find("#email");
    // const password = comp.find("#password");
    // const submitButton = comp.find("#submitButton");
    // email.simulate("change", { target: { value: "schalise@uno.edu" } });
    // password.simulate("change", { target: { value: "123213" } });
    // // submitButton.simulate("click");
    // comp.update();

    // expect(comp.state().email).toEqual("schalise@uno.edu");
  //   const initialState = {}; // here it is possible to pass in any middleware if needed into //configureStore
  //   const mockStore = configureStore();
  //   const mockLoginfn = jest.fn();
  //   const state = {
  //     email: "schalise@uno.edu",
  //     password: "1234asdf"
  //   };
  //   const wrapper = mount(
  //     <Login {...state} store={store} login={mockLoginfn} />
  //   );
  //   wrapper.find("#loginForm").simulate("submit", { preventDefault() {} }); // test to see arguments used after its been submitted
  //   expect(mockLoginfn.mock.calls[1][0]).toEqual({
  //     email: "blah@gmail.com",
  //     password: "cats"
  //   });
  //   wrapper.unmount();
  // });
});
