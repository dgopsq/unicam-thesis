function Foo() {
  var nestedFunction = () => this.thisFunction();
  nestedFunction();
}