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

btn.addEventListener("click", function () {
  const name = [input.value];
  console.log(name);
});
