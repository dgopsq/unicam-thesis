// Bookshelf.js
const mapStateToProps = state => ({
  // ...
});

const mapDispatchToProps = dispatch => ({
  // ...
});

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // ...
  }
}

const ConnectedBookshelf = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookshelf);