import React from "react";

const BooksList = ({ isLoading, books, isLogIn, deleteBooks, dispatch }) => {
  const bookList =
    books.length > 0
      ? books.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex  justify-content-between align-items-center"
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary">
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLogIn}
                onClick={() => dispatch(deleteBooks(item.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "Ops No books";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
