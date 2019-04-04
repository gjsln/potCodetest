import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchDestinationsAction } from './actions/fetchDestinations';
import { DestinationSection } from './page';

const mapStateToProps = (state: State) => ({
  destinations: state.destinations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDestinations: () => dispatch(fetchDestinationsAction()),
});

export const DestinationsSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DestinationSection);
