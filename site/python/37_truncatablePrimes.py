import math, time

stime = time.time()

n = 1000000
p = [True] * n
p[1]=False

def primeSieve(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if p[i]:
            for j in range(i * 2, n, i):
                p[j] = False

def truncatabelPrime(n):
    for i in range(0,len(str(n))):
        if p[int(str(n)[i:])]==False:
            return False
        if p[int(str(n)[:i+1])]==False:
            return False
    return True


primeSieve(n)
primes = []
result = []

count = 0

for i in range(1, n):
    if p[i]:
        primes.append(i)
        if i>10:
            if truncatabelPrime(i):
                result.append(i)
                count+=1

print(primes)
print(result)
print(sum(result))
print(count)

print(time.time() - stime)

