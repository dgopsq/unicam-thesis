function Foo() {
  var nestedFunction = function() {
    this.thisFunction(); // In questo scope this.thisFunction() non esiste
  }

  nestedFunction();
}

Foo.prototype.thisFunction = function() {
  // ...
};