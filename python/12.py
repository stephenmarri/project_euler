import math,functools

primes = [2]


def divisors():
    _sum = 1
    iterator = 2
    totalDivisors = 0
    while True:
        divisorArr = []
        number = iterator + _sum
        localNumber = number

        for i in primes:
            divCounter = 1
            if i <= (number / 2) + 1:

                while localNumber % i == 0:
                    localNumber=int(localNumber/i)
                    divCounter += 1
                if divCounter>1:    divisorArr.append(divCounter)


        if localNumber > 1:
            dLocalNumber = localNumber
            for i in range(math.floor(localNumber/2)+1,1,-1):
                lDivCounter = 1
                while dLocalNumber%i==0:
                    lDivCounter+=1
                    dLocalNumber=dLocalNumber/i
                if lDivCounter>1:
                    divisorArr.append(lDivCounter)
                    primes.append(i)
            if dLocalNumber > 1:
                primes.append(localNumber)

        if len(divisorArr)>0:
            totalDivisors = functools.reduce(lambda  a,b: a*b, divisorArr)
            if totalDivisors>500:   return number
        _sum += iterator
        iterator+=1


print(divisors())
