import counterContainerReducer from "../containers/CounterContainer/reducer";
import {INCREMENT, DECREMENT} from "../containers/CounterContainer/constant";

describe('counterContainerReducer', () => {
  it("increment action should increase counterValue by 1", () => {
    expect(counterContainerReducer({counterValue: 0}, {type: INCREMENT})).toEqual({counterValue: 1});
    expect(counterContainerReducer({counterValue: 2}, {type: INCREMENT})).toEqual({counterValue: 3});
    expect(counterContainerReducer({counterValue: 9998}, {type: INCREMENT})).toEqual({counterValue: 9999});
  });

  it("increment action should decrease counterValue by 1 if above 0", () => {
    expect(counterContainerReducer({counterValue: 1}, {type: DECREMENT})).toEqual({counterValue: 0});
    expect(counterContainerReducer({counterValue: 88}, {type: DECREMENT})).toEqual({counterValue: 87});
  });

  it("increment action should not decrease counterValue by 1 if already at 0", () => {
    expect(counterContainerReducer({counterValue: 0}, {type: DECREMENT})).toEqual({counterValue: 0});
    expect(counterContainerReducer({counterValue: 0}, {type: DECREMENT})).not.toEqual({counterValue: -1});
  });
});