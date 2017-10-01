// app.js
// ...

const initialState = {
  books: defaultDB
};

let store = createStore(
  bookshelfReducer,
  initialState
);

ReactDOM.render(
  <Provider store={store}>
    <Bookshelf />
  </Provider>,
  document.getElementById('app')
);