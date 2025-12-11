/*Chiedere il kilometraggio da percorrere in treno all'utente (userKm)
 Moltiplicare il kilometraggio per la tariffa fissa per avere il prezzo pieno del biglietto
priceTicket:(userKm * 0.21 Euro)
 Scontistiche
SE l'user ha meno di 18 anni (priceTicket -20%)
 userAge<=18 
ALTRIMENTI SE  l'user ha più di 60 anni (priceTicket-40%)
 userAge=> 65
ALTRIMENTI il prezzo resta invariato
*/

//Setup
/*
//Prezzo fisso per km
const priceKm = 0.21;
let result;
//console.log(priceKm);

//prezzo intero

//iNPUT
//chiedo all'utente i km da  percorrere e l'età

const userKm = parseFloat(
  prompt("Inserisci il numero di km da percorrere in treno!")
);
//console.log(userKm, typeof userKm);

const userAge = parseInt(prompt("Inserisci la tua età per degli sconti!"));
//console.log(userAge, typeof userAge);

//Elaborazione

const priceTicket = userKm * priceKm;
result=`Nessuno sconto trovato. Acquista il tuo biglietto al prezzo di ${priceTicket} \u20AC`
//discount

if (userAge < 18) {
    let discount =
        priceTicket - ((priceTicket * 20) / 100);
    result = `
    Hai il 20% di sconto! Il prezzo del biglietto intero è di ${priceTicket}\u20AC.
    Adesso puoi acquistare il biglietto al prezzo di: ${discount.toFixed(2)}\u20AC!
    `;
} else if(userAge >= 65) {
    let discount =
        priceTicket - ((priceTicket * 40) / 100);
    result = `
    Hai il 40% di sconto! Il prezzo del biglietto intero è di ${priceTicket}\u20AC.
    Adesso puoi acquistare il biglietto al prezzo di: ${discount.toFixed(2)}\u20AC!
    `;
}

//Visualizzazione in pagina

console.log(result);
document.getElementById("discount-result").innerHTML = result;*/

const formElement = document.querySelector("form");
const userKm = document.querySelector(".input-km");
const userNameForm = document.querySelector(".username");
const userAge = document.querySelector(".input-age");
const priceKm = 0.21;

document.querySelector(".hidden-ticket").style.display = "none";

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const userKmValue = parseFloat(userKm.value);
  const userAgeValue = parseInt(userAge.value);
  const priceTicket = userKmValue * priceKm;

  document.querySelector(".hidden-ticket").style.display = "block";
  document.querySelector(".username-ticket").innerText = userNameForm.value;
  document.querySelector(".user-price").innerText = `${priceTicket.toFixed(2)}\u20AC`;
  document.querySelector(".ticketdiscount").innerText = "Biglietto standard";

  if (userAgeValue < 18) {
    let discount = priceTicket - (priceTicket * 20) / 100;
    document.querySelector(".user-price").innerText = `${discount.toFixed(
      2
    )}\u20AC`;
    document.querySelector(".ticketdiscount").innerText = "Biglietto minorenni";
  } else if (userAgeValue >= 65) {
    let discount = priceTicket - (priceTicket * 40) / 100;
    document.querySelector(".user-price").innerText = `${discount.toFixed(
      2
    )}\u20AC`;
    document.querySelector(".ticketdiscount").innerText = "Biglietto senior";
  }
});
