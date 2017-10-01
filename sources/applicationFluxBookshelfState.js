// Bookshelf.js
class Bookshelf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: BookshelfStore.getBooks() 
    };
  }

  componentWillMount() {
    BookshelfStore.addChangeListener(this._onChange.bind(this));
  }

  // ...

  _onChange() {
    this.setState({ 
      books: BookshelfStore.getBooks() 
    });
  }

  // ...
}