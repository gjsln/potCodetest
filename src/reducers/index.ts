import { combineReducers } from 'redux';
import { ModelEntity } from '../model';
import { destinationsReducer } from './destinations';

export interface State {
  destinations: ModelEntity[];
};

export const state = combineReducers<State>({
  destinations: destinationsReducer
});
