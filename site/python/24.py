def fact(n):
    if n<2: return 1
    return n*fact(n-1)

limit=1000000
digits = list(range(0,10))
number =[]
limitCounter=0

for i in range(9,-1,-1):
    start = len(digits)
    while start*fact(i)+limitCounter>=limit:
        start-=1
    limitCounter+=start*fact(i)
    number.append(digits[start])
    digits.pop(start)
print( int("".join(map(str, number))))