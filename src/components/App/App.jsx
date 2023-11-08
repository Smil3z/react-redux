import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';

import './App.css';

function App() {

  // TODO - GET Book List from server

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm />
        <BookList />
      </main>
    </div>
  );
}

export default App;
