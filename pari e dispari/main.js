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
const result = document.getElementById("result");

const numberuser = parseInt(user.value);
btn.addEventListener("click", function () {
  const tot = numberuser + random();
  console.log(tot);
  const rightchoise = isEven(tot) ? "pari" : "dispari";
  const winner = num.value === rightchoise ? "user" : "cpu";
  result.innerText = "the winner is " + winner;
});

function random() {
  const max = 5;
  const min = 1;
  let cpu = Math.floor(Math.random() * max + 1 - min) + min;
  console.log(cpu);
  return cpu;
}

function isEven(number) {
  return number % 2 === 0;
}
