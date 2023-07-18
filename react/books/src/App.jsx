import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBook);
  };

  const deleteBookById = (id) => {
    const updatedBook = books.filter((book) => book.id !== id);
    setBooks(updatedBook);
  };

  return (
    <div>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
