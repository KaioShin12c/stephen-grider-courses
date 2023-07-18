import React, { useState } from "react";

const BookCreate = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  }
  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
