let x = 1;
{ let x = 2; } // x fuori da questo scope è comunque 1

const y = 2;
y = 'foo'; // Questo è un errore, abbiamo dichiarato una costante