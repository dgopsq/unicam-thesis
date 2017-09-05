// Componente HelloWorld
const HelloWorld = (props) => {
  return (
    <h1>Hello World!</h1>
  );
};

// Componente che si compone con HelloWorld
const CompositedHelloWorld = (props) => {
  return (
    <div>
      <HelloWorld />
      <i>This is an HelloWorld component</i>
    </div>
  );
}