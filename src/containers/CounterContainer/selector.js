import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectCounterContainerDomain = state => state.counterContainer || initialState;

const makeSelectCounterContainerCounterValue = () => createSelector(
  selectCounterContainerDomain, substate => substate.counterValue
);

export {
  makeSelectCounterContainerCounterValue
}