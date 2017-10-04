// Bookshelf.js
class Bookshelf extends React.Component {
  // ...

  render() {
    return (
      // ...
      <div className="u-mt1">
        <AddForm onAddBook={this._handleAddBook} />
      </div>
      // ...
    )
  }

  _handleAddBook(title, author) {
    BookshelfActions.addBook(title, author);
  }
}