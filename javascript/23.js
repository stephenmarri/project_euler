const limit =   28123;
let abundantArray = [];
let abundantSumArray = new Array(limit).fill(0);
let primes=[]

function calcDivisors(n){    
    for(let i=2;i<=n;i++){
        let divisors=[]
        let num = i
        for(let j=0;j<primes.length;j++){
            if(primes[j]>num) break
            let divCounter=0
            while(num%primes[j]==0){
                divCounter++;
                num=num/primes[j]
            }
            if(divCounter>0){
                divisors.push([primes[j],divCounter])
            }            
        }        
        if(num==i) primes.push(i)
        let sum=1
        if(divisors.length>0){            
            divisors.forEach(element => {
                sum*=( (Math.pow(element[0],element[1]+1) -1) /  ( element[0]-1 ) )
            });            
        }                        
        if(sum-i>i) abundantArray.push(i)
    }    
}

calcDivisors(limit)


let result = 0;
for(let a=0;a<abundantArray.length;a++){
    for(let b=a;b+a<abundantArray.length && abundantArray[a]+abundantArray[b] <= abundantSumArray.length;b++){
        abundantSumArray[abundantArray[a]+abundantArray[b]]=1
    }
}

let ans=0
for(let i=0;i<abundantSumArray.length;i++){
    if(abundantSumArray[i]==0)ans+=i
}


console.log(ans);
