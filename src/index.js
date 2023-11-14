import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
// End of step 1
import App from './components/App/App';
import './index.css';

// Create a reducer to store a counter
// const [count, setCount] = useState(0);
//    name      value = initial value||action
const count = (state = 0,              action) => {
  if (action.type === 'INCREASE') {
    return state + 1; // ! NOT state+= 1
  } else if (action.type === 'DECREASE') {
    return state - 1;
  } else if (action.type === 'RESET') {
    return 0;
  }
  // Returning state means the reducer is
  // unchanged
  return state;
}

const listName = (state = 'test', action) => {
  if (action.type === 'SET_LIST_NAME') {
    return action.payload;
  }
  // ! Reducers must always return state by default
  return state;

}

//Reducer - more on this later
const bookList = (state = [], action) => {
  // TODO - set book list with data from server
  if (action.type === 'ADD_BOOK') {
    // combine the existing state (Array)
    // with the new book (action.payload)
    return [...state, action.payload]; // similar to .push
  }
  return state;
}

// Step 2: create your store
const reduxStore = createStore(
  combineReducers({
    // This is the only part of this block of code
    // that you will need to change.
    bookList,
    count,
    listName
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap your App in a Provider */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
