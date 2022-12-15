// console.log("js ok");

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer
 (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari
 (usando una funzione)
Dichiariamo chi ha vinto.
*/
const user = document.getElementById("usernumber");
const btn = document.getElementById("btn");
const num = document.getElementById("num");

const numberuser = parseInt(user.value);
btn.addEventListener("click", function () {
  const tot = numberuser + random;
  console.log(tot);
});

function random() {
  const max = 5;
  const min = 1;
  const cpu = Math.floor(Math.random() * max + min);

  return cpu;
}
