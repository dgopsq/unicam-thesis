class Bookshelf extends React.Component {
  // ...

  render() {
    return (
      <div>
        <Navbar>Bookshelf</Navbar>

        <div className="u-mt1">
          <AddForm onAddBook={this._handleAddBook} />
        </div>

        // ...
      </div>
    )
  }

  _handleAddBook(title, author) {
    BookshelfActions.addBook(title, author);
  }

  // ...
}