function Foo() {
  this.answer = 42;

  setInterval(function() {
    // Dentro questa callback il contesto è cambiato
    // e this.answer non esiste più
    console.log(this.answer);
  }, 1000);
}

var bar = new Foo(); // Il risultato sarà "undefined"