const numeros = [];

for (let i = 1; i<= 10; i++){
    let numero = parseFloat(prompt(`Ingresa el valor ${i}`));
    numeros.push(numero);
}
let mayor = numeros[0];
for(let i=1; i<numeros.length; i++){
    if(numeros[i]> mayor){
        mayor = numeros[i];
    }
}

console.log(numeros);
console.log("El numero mas grande es: " + mayor);