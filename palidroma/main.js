// console.log("js ok");

/*
Palidroma
Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma

*/

// es palidroma
/**
 * 1. aggiungere input e bottom
 * 2.aggiungere elemento in dom
 * 3.addevent con buttom e stampare in console il nome del input come array
 
 *  */

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", function () {
  const name = input.value;
  console.log(name);
  // saluta(name);
  const nameAlContrario = reverse(name);

  if (name === nameAlContrario) {
    text.innerHTML = `<p>la parola è corretta</p>`;
  } else {
    text.innerHTML = `<p>la parola non è corretta</p>`;
  }

  //   console.log("namealContrario: " + nameAlContrario);
});

function reverse(word) {
  // word ---> name#22

  let parolaAlContrario = "";

  for (i = word.length - 1; i >= 0; i--) {
    parolaAlContrario += word[i];
  }

  return parolaAlContrario;
}
