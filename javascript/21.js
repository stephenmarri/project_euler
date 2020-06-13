let primes=[]
function primeSieve(n){
    let nums = Array(n+1).fill(1);

    for(let i=2;i<(Math.floor(Math.sqrt(n)))+1;i++){
        if(nums[i]){
            let l=i+i;        
            while(l<=n){
                nums[l]=0
                l+=i
            }
        }
    }
    for(let i=2;i<=n;i++){
        if(nums[i])primes.push(i)
    }
}
primeSieve(10000)

let divisorsSum = [[0,0],[1,0]];
let maxNum
function calcDivisors(n){
    maxNum=n
    for(let i=2;i<=maxNum;i++){
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
        
        let sum=1
        if(divisors.length>0){            
            divisors.forEach(element => {
                sum*=( (Math.pow(element[0],element[1]+1) -1) /  ( element[0]-1 ) )
            });            
        }
        if(i<=n)maxNum = maxNum > sum  ? maxNum : sum
        divisorsSum.push([i,sum-i])

    }
    
}

calcDivisors(10000)

let amicableSum=0;
for(let i=0;i<=10000;i++){
    if(divisorsSum[i][1]<maxNum && divisorsSum[i][1]!=i){
        if(i==divisorsSum[divisorsSum[i][1]][1]){
            amicableSum+=i            
        }
    }
}
console.log(amicableSum);

