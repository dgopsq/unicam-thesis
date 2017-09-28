class BookshelfStore extends EventEmitter {
  constructor() {
    // ...

    BookshelfDispatcher.register(
      this._registerActions.bind(this)
    );
  }

  _registerActions(action) {
    switch(action.type) {
      case 'ADD_BOOK':
        return this._addBook(
          action.payload.title,
          action.payload.author
        );
      
      // ...
    }
  }

  // ...
}
