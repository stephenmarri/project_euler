import math
import time
start_time = time.time()
print('starting run')
def primeSieve(n):
    allNumbers=[0]*n
    primes=list(range(2,n+1))
    for i in range(2,int(math.sqrt(n))+1):
        if allNumbers[i-1]==0:
            iMultiples=i*2
            while iMultiples<=n:
                allNumbers[iMultiples-1]+=1
                if allNumbers[iMultiples-1]==1: primes.remove(iMultiples)
                iMultiples+=i
    return primes

def circurlarNumber(n):
    cNum=[n]
    for i in range(0,len(str(n))-1):
        n=int(str(n)[-1] + str(n)[:-1])
        cNum.append(n)
    return cNum


primes=primeSieve(1000000)
print(primes)
# cNumPrimes=[]
# for i in primes:
#     cNum=circurlarNumber(i)
#     if (all( j in primes for j in cNum )):
#         cNumPrimes.append(i)
#
# print(cNumPrimes)
# print(len(cNumPrimes))



print(time.time() - start_time)