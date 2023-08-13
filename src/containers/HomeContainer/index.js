import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Home from '../../views/Home';
import { makeSelectHomeContainerCounter } from './counterSelector';

function HomeContainer(props) {

  return (<Home {...props} />);
}

const mapStateToProps = createStructuredSelector({
  counterValue: makeSelectHomeContainerCounter(),
});

const withConnect = connect(
  mapStateToProps,
);

export default compose(
  withConnect,
)(HomeContainer);

