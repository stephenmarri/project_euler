import  math
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

print(amicableSum)