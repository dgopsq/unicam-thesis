function Func() {
  var nestedFunction = function() {
    this.thisFunction(); // In questo scope this.thisFunction() non esiste
  }

  nestedFunction();
}

Func.prototype.thisFunction = function() {
  // ...
};