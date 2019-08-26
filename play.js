import { createStore } from 'redux';
import { ADD_DRINK, addDrink, REMOVE_DRINK, removeDrink } from './src/actions/lunchActions';

const initialState = {
  drinks: [],
  chips: 0,
  sandwiches: 0
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

store.dispatch(addDrink('water'));
console.log('dispatch 1', store.getState());

store.dispatch(addDrink('coffee'));
console.log('dispatch 2', store.getState());

store.dispatch(addDrink('seltzer'));
console.log('dispatch 3', store.getState());

store.dispatch(removeDrink('water'));
console.log('dispatch 4', store.getState());

