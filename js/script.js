// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// pulsante gioca
var pulsanteGioca = document.getElementById('gioca');
pulsanteGioca.addEventListener('click',
function() {

  // dichiaro variabili
  var pc;
  var utente;
  var vincitore;

  // assegno un valore alle variabili
  pc = Math.floor(Math.random()*6) + 1;
  utente = Math.floor(Math.random()*6) + 1;
  vincitore = 'Hai vinto!';

  // istruzioni condizionali

  if (pc > utente) {
    vincitore = 'Mi dispiace.. Hai perso.';
  } else if (pc == utente) {
    vincitore = 'PAREGGIO!';
  }

  //  stampo
  document.getElementById('computer').innerHTML = pc;
  document.getElementById('giocatore').innerHTML = utente;
  document.getElementById('punteggio-migliore').innerHTML = vincitore;

  // rendo visibile
  document.getElementById('computer').className = 'show';
  document.getElementById('giocatore').className = 'show';
});



// pulsante reset
var pulsanteReset = document.getElementById('annulla');
pulsanteReset.addEventListener('click',
function() {

  document.getElementById('computer').className = 'hidden';
  document.getElementById('giocatore').className = 'hidden';
  document.getElementById('punteggio-migliore').innerHTML = '';
});