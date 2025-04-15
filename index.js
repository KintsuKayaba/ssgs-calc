const readline = require("readline-sync");
const { add, subtract, multiply, divide, power } = require("./calc");

const saluti = ["A presto, e che la forza sia con te!", "Piccolo padawan"];

function scegliOperazione() {
  console.log(
    "\nOperazioni disponibili:\n1. Addizione\n2. Sottrazione\n3. Moltiplicazione\n4. Divisione\n5. Potenza"
  );

  let choice;
  while (true) {
    choice = readline.question("Scegli un'operazione (1-5): ");
    if (["1", "2", "3", "4", "5"].includes(choice)) break;
    console.log("❌ Operazione non valida. Riprova.");
  }
  return choice;
}

function chiediNumero(prompt) {
  while (true) {
    const input = readline.question(prompt);
    const numero = parseFloat(input);
    if (!isNaN(numero)) return numero;
    console.log("❌ Inserisci un numero valido.");
  }
}

function eseguiOperazione(choice, num1, num2) {
  switch (choice) {
    case "1":
      return add(num1, num2);
    case "2":
      return subtract(num1, num2);
    case "3":
      return multiply(num1, num2);
    case "4":
      return divide(num1, num2);
    case "5":
      return power(num1, num2);
  }
}

console.log("👋 Benvenuto in ssgs-calc!");

let continua = true;

while (continua) {
  const scelta = scegliOperazione();
  const num1 = chiediNumero("Inserisci il primo numero: ");
  const num2 = chiediNumero("Inserisci il secondo numero: ");

  try {
    const risultato = eseguiOperazione(scelta, num1, num2);
    console.log(`✅ Risultato: ${risultato}`);
  } catch (err) {
    console.error(`❌ Errore: ${err.message}`);
  }

  const risposta = readline.question("Vuoi fare un'altra operazione? (s/n): ");
  continua = risposta.trim().toLowerCase() === "s";
}

const salutoFinale = saluti[Math.floor(Math.random() * saluti.length)];
console.log(`🎉 ${salutoFinale}`);
