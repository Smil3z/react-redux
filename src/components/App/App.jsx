import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import ListName from '../ListName/ListName';
// we use useSelector to pull information
// out of our Redux store
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  // Connect a local variable to our reducer
  const count = useSelector(store => store.count);
  const listName = useSelector(store => store.listName);
  // dispatch is used to send data to Redux
  const dispatch = useDispatch();

  const increaseCount = () => {
    // Send data to Redux using dispatch
    const action = {type:'INCREASE'};
    dispatch(action);
  }

  const decreaseCount = () => {
    const action = { type: 'DECREASE'};
    dispatch(action);
  }

  // TODO - GET Book List from server

  return (
    <div className="App">
      <header><h1>{listName}</h1></header>
      <div>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
      </div>
      <div>Count: {count}</div>
      <h4>Name your book list</h4>
      <ListName/>
      <main>
        <BookForm />
        <BookList />
      </main>
    </div>
  );
}

export default App;
