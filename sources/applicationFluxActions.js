// BookshelfActions.js
const Actions = {
  addBook: function(title, author) {
    BookshelfDispatcher.dispatch({
      type: 'ADD_BOOK',
      payload: {
        title: title,
        author: author
      }
    });
  },

  // ...
};
