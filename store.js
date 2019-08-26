
import { createStore } from 'redux';
import reducer from './src/reducers';
import { addDrink } from './src/actions/lunchActions';

const store = createStore(reducer);

export default store;

console.log('dispatch 1', store.getState());

store.dispatch(addDrink('water'));

console.log('dispatch 2', store.getState());
