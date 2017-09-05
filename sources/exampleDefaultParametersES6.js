function func(foo = true, bar = 'bar') {
  if(!foo) return;
  console.log(bar);
}

func(); // Il risultato sarà "bar"