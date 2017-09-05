// library.js
export function foo() {
  console.log('foo');
}

// main.js
import { foo } from './library.js';
foo(); // Il risultato sarà "foo"