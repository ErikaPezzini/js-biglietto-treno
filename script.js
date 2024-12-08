const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log(`${km}`);

const age = parseInt(prompt("Quanti anni hai?"));
console.log(`${age}`);

const basePrice = km * 0.21;
console.log(`Prezzo: €${basePrice.toFixed(2)}`);

let discount = 0;

if (age < 18) {
    discount = 0.20;
    console.log('Applicato sconto per minorenni');
} else if (age > 65) {
    discount = 0.40;
    console.log('Applicato sconto per over 65');
} else {
    console.log('Nessuno sconto applicato');
}

const price = basePrice * (1-discount);

const finalprice = price.toFixed(2);

alert(`Il prezzo del viaggio: €${finalprice}`);

console.log(`Prezzo finale con sconto applicato: €${finalprice}`);