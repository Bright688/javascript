let heads=0;
let tails=0;

for(let x=1; x<=10; x++){
    if(Math.random()<0.5){
        tails++;
    }else{
        heads++;
    }
}

console.log('Tossed the coins');
console.log(`The number of heads is: ${heads}`);
console.log(`The number of tails is: ${tails}`);