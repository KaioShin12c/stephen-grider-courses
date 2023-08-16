import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      {showEdit ? <BookEdit /> : book.title}
      <FontAwesomeIcon icon={faXmark} onClick={() => onDelete(book.id)} />
      <FontAwesomeIcon icon={faPen} onClick={() => setShowEdit(!showEdit)} />
    </div>
  );
};

export default BookShow;
