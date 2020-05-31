import math
import time
start_time = time.time()

def primeSieve(n):
    bitset=[1]*(n+1)
    for i in range(2,int(math.sqrt(n))+1):
        if bitset[i]:
            for j in range(2*i,n+1,i):
                bitset[j]=0
    return bitset

def circurlarNumber(n):
    cNum=[n]
    for i in range(0,len(str(n))-1):
        n=int(str(n)[-1] + str(n)[:-1])
        cNum.append(n)
    return cNum

num=1000000
primes=[]
cNumPrimes=[]

bitset=primeSieve(num)

for i in range(2,num+1):
    if bitset[i]:
        primes.append(i)
        cNum = circurlarNumber(i)
        counter = 0
        for j in range(0, len(cNum)):
            if bitset[cNum[j]]: counter += 1
        if counter == len(cNum):    cNumPrimes.append(i)
#print(primes)

##print(cNumPrimes)
print(len(cNumPrimes))



print(time.time() - start_time)