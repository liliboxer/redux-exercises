import { combineReducers } from 'redux';
import lunch from '../reducers/lunchReducer';
import doReducer from '../reducers/doReducer';

export default combineReducers({
  lunch,
  do: doReducer
});
