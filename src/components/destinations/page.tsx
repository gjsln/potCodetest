import * as React from 'react';
import { ModelEntity } from '../../model';
import { DestinationsName } from './destinationsName';

interface Props {
  destinations: ModelEntity[];
  fetchDestinations(): void;
}

let counter;

export class DestinationSection extends React.Component<Props,{}> {
  constructor(props) {
    super(props);
    this.state = { members: []};
  }
  public componentDidMount() {
    this.props.fetchDestinations();
  }

  public render() {
    return (
      <div className="row">
        <h2>Destinations</h2>
        <table className="table">
          <thead>
            <DestinationsName />
          </thead>
        </table>
      </div>
    );
  }
};
