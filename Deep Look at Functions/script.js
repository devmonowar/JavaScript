function jog(x, y){
    return x+y;
}


const biyog = function( x, y){
    return x - y;
}

const gun = function multiply( x, y){
    return x * y;
}

const calc = [jog, biyog, gun];

console.log(calc[2](5,6));

for( let f of calc){
    let result = f( 30, 5);
    console.log(result);
}

const calculator = {
    add: jog,
    subtract: biyog,
    multiply: gun
}
console.log(calculator.add(5,6));