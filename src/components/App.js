import React from 'react';
import store from '../../store';
import { addDrink } from '../actions/lunchActions';
import { getDrinks } from '../selectors/lunchSelectors';

export default function App() {
  console.log(getDrinks(store.getState()));
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => store.dispatch(addDrink('water'))}>Make Drink!</button>
    </>
  );
}
  
