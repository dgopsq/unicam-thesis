// Bookshelf.js
const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  handleAddBook: (title, author) => {
    dispatch(addBook(title, author));
  },

  handleRemoveBook: index => {
    dispatch(removeBook(index));
  }
});

// ...