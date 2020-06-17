let limit=1000000

function fact(n){
    if(n<2) return 1    
    return n*(fact(n-1))
}

let number = []
let digits = [0,1,2,3,4,5,6,7,8,9]
let count=0
for(let i = 9;i>=0;i--){    
    let start = digits.length
    
    let checker = start*fact(i)+count
    while(checker>=limit ){
        start--
        checker = start*fact(i)+count
    }
    count+=(start)*fact(i)
    number.push(digits.splice(start,1))
    
}

console.log(number.join(""));