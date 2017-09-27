// BookshelfView.js
const BookshelfView = Backbone.View.extend({
  // ...

  events: {
    'click .js-remove': 'removeBook'
  },

  // ...

  removeBook: function(e) {
    const cid = e.target.dataset.cid;
    this.collection.remove(cid);
  }
});
