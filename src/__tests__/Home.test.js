import React from "react";
import { mount } from "enzyme";
import {Provider} from "react-redux";
import HomeContainer from "../containers/HomeContainer";
import configureStore from "../configureStore";

const initialState = {};
const store = configureStore(initialState, history);

describe("<Home />", () => {
  it("renders correctly a counter value paragraph", () => {
    const wrapper = mount(
      <Provider store={store} >
        <HomeContainer />
      </Provider>
    );
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p').text()).toContain('Counter Value');
  })
});