import math

def genHalf(n):
    # l=math.ceil(len(str(n))/2)
    if len(str(n))==1:    return n
    # return n//(10**l)
    return n//10

def genReverse(n):
    newNum=n
    revNum=0
    while n>0 :
        revNum= revNum *10 + n%(10)
        n=int(n//10)
    if len(str(revNum))!=len(str(newNum)):   return str("0"*(len(str(newNum))-len(str(revNum)))+str(revNum))
    return str(revNum)

def isPalindrom(n):
    rn=int(genReverse(n))
    return rn==n

count=0
palins=[]
pBinary=[]
for i in range(1,1000):
    if i>999:
        val=int(str(i) + genReverse(genHalf(i)))
    elif i<10:
        val=i
        val2=int(str(i) + str(genReverse(i)))
    else:
        val=int(str(i) + str(genReverse(i)))
        val2=int(str(i) + genReverse(genHalf(i)))
    count+=1
    palins.append(val)
    pBinary.append(bin(val)[2:])
    if i<1000:
        palins.append(val2)
        pBinary.append(bin(val2)[2:])


print(palins)
print(len(palins))
print(pBinary)
print(len(pBinary))
new=[]

resulCount=0

for i in range(0,len(palins)):
    if isPalindrom(int(pBinary[i])):
        new.append(palins[i])
        resulCount+=1

print(resulCount)
print(new)
print(sum(new))
