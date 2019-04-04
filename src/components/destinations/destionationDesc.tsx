import * as React from 'react';
import { Link } from 'react-router-dom';
import { ModelEntity } from '../../model';

interface Props {
  destination: ModelEntity;
}

export const DestinationDesc: React.StatelessComponent<Props> = ({ destination }) => {
  return (
    <tr>
      <td>
        <a href={destination.url} >{destination.text}</a>
      </td>
    </tr>
  );
};
