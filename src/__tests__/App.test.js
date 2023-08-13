import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import { Provider } from 'react-redux';

describe("<App />", () => {
  it("renders correctly and contains Redux Provider", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Provider)).toHaveLength(1);
  });

  it("renders a clic counter title", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it("does not render multiple clic counter titles", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).not.toHaveLength(2);
  });
});