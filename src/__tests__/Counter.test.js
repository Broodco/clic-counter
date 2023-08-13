import React from "react";
import {mount} from "enzyme";
import Counter from "../components/Counter";
import configureStore from "../configureStore";
import {Provider} from "react-redux";
import CounterContainer from "../containers/CounterContainer";

const initialState = {};
const store = configureStore(initialState, history);

describe("<Counter />", () => {
  it("renders its view correctly without error", () => {
    const wrapper = mount(
      <Provider store={store} >
        <CounterContainer />
      </Provider>
    );

    expect(wrapper.find(Counter)).toHaveLength(1);
  });

  it("renders the increment and decrement buttons", () => {
    const wrapper = mount(
      <Provider store={store} >
        <CounterContainer />
      </Provider>
    );

    expect(wrapper.find('button.incrementButton')).toHaveLength(1);
    expect(wrapper.find('button.decrementButton')).toHaveLength(1);
  });

  it("simulates a increment event and updates the counter value", () => {
    const wrapper = mount(
      <Provider store={store} >
        <CounterContainer />
      </Provider>
    );

    wrapper.find('button.incrementButton').simulate('click');
    expect(wrapper.find('span').text()).toContain("1");
  });

  it("simulates a decrement event and does not update the counter value if already at 0", () => {
    const wrapper = mount(
      <Provider store={store} >
        <CounterContainer />
      </Provider>
    );

    wrapper.find('button.decrementButton').simulate('click');
    expect(wrapper.find('span').text()).toContain("0");
  });

  it("simulates a decrement event and update the counter value if above 0", () => {
    const wrapper = mount(
      <Provider store={store} >
        <CounterContainer />
      </Provider>
    );
    // Simulate two increment events (tested above) to set the counterValue to 2
    wrapper.find('button.incrementButton').simulate('click');
    wrapper.find('button.incrementButton').simulate('click');

    // Simulate the tested decrement event
    wrapper.find('button.decrementButton').simulate('click');
    expect(wrapper.find('span').text()).toContain("1");
  });
});