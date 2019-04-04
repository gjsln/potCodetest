import { actionTypes } from '../../../common/constants/actionTypes';
import { ModelEntity } from '../../../model';
import { destinationAPI } from '../../../api/destination';

export const fetchDestinationsAction = () => (dispatch) => {
  destinationAPI.fetchDestinations()
    .then((destinations) => {
      dispatch(fetchDestinationsCompleted(destinations));
    });
};

const fetchDestinationsCompleted = (destinations: ModelEntity[]) => ({
  type: actionTypes.FETCH_DESTINATIONS_COMPLETED,
  payload: destinations,
});
