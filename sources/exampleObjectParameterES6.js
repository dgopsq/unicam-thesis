function func({ foo = true, bar = 'bar' }) {
  if(!foo) return;
  console.log(bar);
}

func({ foo: true, bar: 'cat' }); // Il risultato sarà "cat"