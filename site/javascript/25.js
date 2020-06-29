let a=1
let b=1
let c=0;

counter = 2;

while (String((c)).length !=1000){
    c=BigInt(a)+BigInt(b)
    
    a=b
    b=c

    counter++
}

console.log(counter);