// BookshelfReducer.js
const initialState = {
  books: []
};

function bookshelfReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_BOOK':
      return Object.assign({}, state, {
        books: [].concat(
          action.payload,
          state.books
        )
      });

    // ...
  }
};