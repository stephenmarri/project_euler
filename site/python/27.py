import  math

def checkPrime(n):
    if n ==1 or n==2:   return True
    for i in range(2,math.floor(math.sqrt(n)+1)):
        if n%i==0: return False
    return True

p=0
num=0
ans=0

posRun=True
negRun=True

while posRun or negRun:
    if posRun:
        lp = p
        a = int(lp*2 +1)
        b = int(lp*(lp+1))+41
        if a>=1000 or b>1000:
            posRun=False
        else:
            c = math.pow(num,2) + num*a + b
            if checkPrime(c):
                ans = ans if abs(ans) > abs(a*b) else a*b


    if negRun:
        lp = -p
        a = int(lp*2 +1)
        b = int(lp*(lp+1))+41
        if a>=1000 or b>1000:
            negRun=False
        else:
            c = math.pow(num,2) + num*a + b
            if checkPrime(c):
                ans = ans if abs(ans) > abs(a*b) else a*b

    p+=1

print(ans)