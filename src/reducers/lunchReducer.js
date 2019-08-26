import { ADD_DRINK, REMOVE_DRINK } from '../actions/lunchActions';

const initialState = {
  drinks: [],
  chips: 0,
  sandwiches: 0
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drinks: [...state.drinks, action.payload] };
    case REMOVE_DRINK:
      return { ...state, drinks: state.drinks.filter(d => d !== action.payload) };
    case 'EMPTY_BOX':
      return { drinks: [], chips: [], sandwiches: [] };
    default: 
      return state;
  }
}
