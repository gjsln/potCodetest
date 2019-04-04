import { actionTypes } from '../common/constants/actionTypes';
import { ModelEntity } from '../model';

export const destinationsReducer = (state: ModelEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESTINATIONS_COMPLETED:
      return handleFetchDestinationsCompleted(state, action.payload);
  }

  return state;
};

const handleFetchDestinationsCompleted = (state: ModelEntity[], payload: ModelEntity[]) => {
  return payload;
};
