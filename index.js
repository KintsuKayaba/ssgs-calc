const readline = require("readline-sync");
const { add, subtract, multiply, divide } = require("./calc");

console.log(
  "Operazioni disponibili:\n1. Addizione\n2. Sottrazione\n3. Moltiplicazione\n4. Divisione"
);

const choice = readline.question("Scegli un'operazione (1-4): ");

if (!["1", "2", "3", "4"].includes(choice)) {
  console.error("Operazione non valida. 😢");
  process.exit(1);
}

const num1 = parseFloat(readline.question("Inserisci il primo numero: "));
const num2 = parseFloat(readline.question("Inserisci il secondo numero: "));

if (isNaN(num1) || isNaN(num2)) {
  console.error("Parametro non valido. Devi inserire dei numeri. 😔");
  process.exit(1);
}

let result;
try {
  switch (choice) {
    case "1":
      result = add(num1, num2);
      break;
    case "2":
      result = subtract(num1, num2);
      break;
    case "3":
      result = multiply(num1, num2);
      break;
    case "4":
      result = divide(num1, num2);
      break;
  }
  console.log(`Risultato: ${result}`);
} catch (err) {
  console.error(`Errore: ${err.message}`);
  process.exit(1);
}
