const answers={
    ans01:`import  math
    number = 100
    primes=[]
    
    divisorSum=[[0,0],[1,0]]
    def calcDivisors(n):
        maxNum=n
        i=2
        while i<=maxNum:
            divisors=[]
            num=i
    
            for j in primes:
                if j>num: break
                divCounter=0
                while num%j==0:
                    divCounter+=1
                    num/=j
                if divCounter>0:   divisors.append([j, divCounter])
            if num==i:  primes.append(num)
    
            sum=1
            if len(divisors)>0:
                for x in divisors:
                    sum*=( ( (math.pow(x[0],x[1]+1)) -1 ) / ( x[0] -1 ))
            if i<=n:   maxNum = sum if sum > maxNum else maxNum
            divisorSum.append([i,int(sum)-i])
            i+=1
    
    calcDivisors(number)
    
    amicableSum=0;
    for i in range(2,number):
        x= divisorSum[i]
        if x[1] <= number and x[1] != x[0]:
            if divisorSum[x[1]][1] == x[0]:
                amicableSum+=x[0]
    
    print(amicableSum)`,
    
    ans02:`
    #modal{
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(178, 190, 195,0.6);
        font-size: 1.95rem;
        font-family: 'Poppins';
    }
    #modal__index{
        width: 25%;
        height: 100%;
        background-color: rgb(12, 17, 19);
        position: relative;
        left: 0;
        top: 0;
        opacity: 1;
        color: white;    
        overflow-y: scroll;
    }`,

    ans03:`
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

`
}