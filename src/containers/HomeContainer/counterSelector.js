import { createSelector } from 'reselect';

const selectCounterContainerDomain = state => state.counterContainer || {};
const makeSelectHomeContainerCounter = () => createSelector(selectCounterContainerDomain, substate => substate.counterValue);

export {
  makeSelectHomeContainerCounter,
};
