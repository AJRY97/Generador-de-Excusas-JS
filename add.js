let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generadorExcusas(who,action,what,when){
    let frase1 = who[Math.floor(Math.random()* who.length)]; 
    let frase2 = action[Math.floor(Math.random()* action.length)]; 
    let frase3 = what[Math.floor(Math.random()* what.length)]; 
    let frase4 = when[Math.floor(Math.random()* when.length)]; 

    return `${frase1} ${frase2} ${frase3} ${frase4}`;
}

console.log(generadorExcusas(who, action, what, when));