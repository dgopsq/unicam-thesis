function Func() {
  var nestedFunction = () => this.thisFunction();
  nestedFunction();
}