import { useState } from 'react';
// useDispatch sends data to redux
import { useDispatch } from 'react-redux';
import axios from 'axios';

function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding book`, {title, author});

    // TODO - axios request to server to add book
    // this block of code only adds to redux not the database
    {/*let action = {
      type: 'ADD_BOOK', 
      payload: {title: title, author: author}
    };
    dispatch(action);*/}
    
    // send data to the server
    axios.post('/books', {title, author}).then((response) => {
      //TODO: call getBookList via props
      props.getBookList();
    }).catch((error) => {
      console.log('error posting a book', error);
      alert('something went wrnog')
    });
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input 
          required 
          placeholder="Title" 
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          required 
          placeholder="Author" 
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
}

export default BookForm;
