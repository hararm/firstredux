import { createStore } from 'redux';


// Our mutation (Reducer) function,
 // create a _new_ state based on the action passed
 function reducer(state, action) {
     switch(action.type) {
         case 'INC':
             return {state, counter: state.counter + 1 };
     case 'DEC':
     return { state, counter: state.counter - 1 };
     default:
     return state;
     }
     }

 const initialState = {
     counter: 3
 };

 function init() {
     const store = createStore(reducer, initialState);

     // Update view (this might be React in a real app)
     function updateView() {
         document.querySelector('#counter').innerText = store.getState().counter;
     }

     store.subscribe(updateView);

     updateView();

     // Listen to click events
     document.getElementById('inc').onclick = () => { store.dispatch({ type: 'INC' }) };
     document.getElementById('dec').onclick = () => { store.dispatch({ type: 'DEC' }) };
 }

window.onload = init();


