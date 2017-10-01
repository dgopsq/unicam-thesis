// BookshelfActions.js
const addBook = (title, author) => ({
  type: 'ADD_BOOK',
  payload: {
    title: title,
    author: author
  }
});

// ...