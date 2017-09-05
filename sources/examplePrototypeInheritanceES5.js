function MyClass(value) {
  this.aProperty = value; // Questa è una proprietà dinamica della classe
}

MyClass.prototype.aMethod = function() {
  // Questo è un metodo della classe
  // ...
};

var Instance = new MyClass('value');