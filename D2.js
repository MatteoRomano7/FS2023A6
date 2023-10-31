/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = parseInt(prompt("Inserisci numero 1"))
const num2 = parseInt(prompt("Inserisci numero 2"))

if (num1 > num2) { console.log("Il numero più grande è " + num1); }
else if (num2 > num1) { console.log("Il numero più grande è " + num2); } else { console.log("I due numeri sono uguali."); }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = parseInt(prompt("Inserisci un numero intero"))
if (num3 !== 5) { console.log("Not equal.") }
else { console.log("Il numero scelto è pari a 5") }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = parseInt(prompt("Inserisci un numero intero"))
if (num4 % 5 === 0) { console.log("Il numero scelto è divisibile per 5") }
else { console.log("Il numero scelto non è divisibile per 5") }


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = parseInt(prompt("Inserisci il primo numero:"));
let num6 = parseInt(prompt("Inserisci il secondo numero:"));

if (num5 === 8 || num6 === 8 || num5 + num6 === 8 || num5 - num6 === 8 || num6 - num5 === 8) { console.log("Uno dei numeri è 8 o la loro somma/sottrazione è 8."); }
else { console.log("Nessuna delle condizioni è verificata."); }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let spedizione = 10
let totalShoppingCart = parseFloat(prompt("Totale carrello"))
if (totalShoppingCart >= 50) { console.log(totalShoppingCart + " Non si applicano spese di spedizione") }
else { console.log(totalShoppingCart + spedizione) + ("Sono previste spese di spedizione pari a 10.") }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto = (20 / 100)
let delivery = 10
let Carrello = parseFloat(prompt("Totale cart"))
let cart = Carrello - sconto * Carrello
if (cart >= 50) { console.log(cart) + " " + ("Non si applicano spese di spedizione") }
else { console.log(cart) + delivery + ("spese di spedizione applicate") }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let ordine = [53, 27, 95];

ordine.sort((a, b) => b - a);

console.log(ordine);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let var1 = 55
console.log(typeof var1 === "number")
let var2 = "57"
console.log(typeof var2 === "number")

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroDaVerificare = parseInt(prompt("Numero da verificare"))
if (numeroDaVerificare % 2 === 0) { console.log("Il numero è pari."); }
else { console.log("Il numero è dispari."); }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let inserimento = parseInt(prompt("Inserisci numero"))
if (inserimento < 10) {
  console.log("Meno di 10");
} else if (inserimento < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto;"
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete me.lastName;

console.log(me);



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.skills.pop();

console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let elenco = []

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
