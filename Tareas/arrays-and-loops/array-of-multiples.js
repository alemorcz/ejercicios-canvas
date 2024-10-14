function multiplo(num, long){
    let multiplos=[];

    for(let i = 1; i<= long; i++){
        multiplos.push (num*i);
    }
    return multiplos;
}

console.log(multiplo(5,15));
console.log(multiplo(2,10));
console.log(multiplo(4,5));
console.log(multiplo(3,8));
console.log(multiplo(17,100));
