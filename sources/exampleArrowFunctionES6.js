function Foo() {
  this.answer = 42;

  setInterval(() => {
    // Dentro questa callback il contesto NON è cambiato
    console.log(this.answer);
  }, 1000);
}

var bar = new Foo(); // Il risultato sarà "42"