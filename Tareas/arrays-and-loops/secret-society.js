console.log("------------------Bienvenido---------------");
console.log("Aqui te asignaremos un nombre secreto para tu sociedad");
let miembrosSociedad = parseInt(prompt("¿cuántos miembros son en tu sociedad"))
let iniciales= ""
for(let i=1; i<=miembrosSociedad; i++){
    let nombres = prompt(`Ingresa el nombre numero ${i}`);
    iniciales += nombres.charAt(0);
}
console.log("El nombre secreto de tu sociedad es: " + iniciales);