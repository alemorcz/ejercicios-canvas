let numResistors = parseFloat(prompt("¿cuántas resistencias vas a sumar?"));

let suma =0;

for(let i=1; i<=numResistors; i++){
    let resistor =parseFloat(prompt(`Introduce la resistencia ${i}`));
    suma += Math.abs(resistor);
}

console.log("La suma total de las resistencias es: "+suma);
