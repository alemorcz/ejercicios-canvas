function palindrome(frases){
    let frase = frases.toLowerCase().replace(/[^a-z0-9]/g, '');
    let fraseInverida = frase.split('').reverse().join('');
    return frase === fraseInverida;
}
let fraseIngresada = prompt("Introduce una palabra o frase: ");
if(palindrome(fraseIngresada)){
    console.log("Es un palindromo");
}else{
    console.log("No es un palindromo");
}