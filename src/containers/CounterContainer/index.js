import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Counter from "../../components/Counter";
import {useInjectReducer} from "../../utils/injectReducer";
import {makeSelectCounterContainerCounterValue} from "./selector";
import {decrementAction, incrementAction} from "./action";

import reducer from "./reducer";

const key = "counterContainer";

const CounterContainer = (props) => {
  useInjectReducer({ key, reducer });

  return <Counter { ...props } />;
};

const mapStateToProps = createStructuredSelector({
  counterValue: makeSelectCounterContainerCounterValue(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction())
  };
}

const withConnect = connect (
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect
)(CounterContainer);