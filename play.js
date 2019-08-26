import { createStore } from 'redux';
import { addDrink, removeDrink } from './src/actions/lunchActions';
import reducer from './src/reducers/lunchReducer';



const store = createStore(reducer);

store.dispatch(addDrink('water'));
console.log('dispatch 1', store.getState());

store.dispatch(addDrink('coffee'));
console.log('dispatch 2', store.getState());

store.dispatch(addDrink('seltzer'));
console.log('dispatch 3', store.getState());

store.dispatch(removeDrink('water'));
console.log('dispatch 4', store.getState());

