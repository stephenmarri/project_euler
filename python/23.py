import  math
number = 28123
abundantNums=[]
abunSum=[0]*(number)
primes=[]


def calcDivisors(n):
    i=2
    while i<=n:
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
        if int(sum)-i > i: abundantNums.append(i)
        i+=1

calcDivisors(number)

for i in range(0,len(abundantNums)):
    j=i
    while abundantNums[i]+abundantNums[j] < number and i+j<len(abundantNums):
        abunSum[abundantNums[i]+abundantNums[j]]=1
        j+=1

ans=0
for i in range(0,len(abunSum)):
    if abunSum[i]==0:  ans+=(i)
print(ans)