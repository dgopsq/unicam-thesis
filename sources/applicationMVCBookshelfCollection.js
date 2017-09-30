// BookshelfCollection.js
const BookshelfCollection = Backbone.Collection.extend({
  model: BookModel,
});

const BCInstance = new BookshelfCollection();
BCInstance.add(bookshelfDb);