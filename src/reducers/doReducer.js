import { ADD_DRINK } from './lunchReducer';

const initialState = {
  stuff: 'undone'
};

export default function reduce(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, stuff: action.payload };
    default:
      return state;
  }
}
