import  math
digit = 5
limits=[]

def sumOfDigitsPow(n):
    _sum=0
    for i in str(n):
        _sum+=int(math.pow(int(i), digit))
    return _sum

def genLimits():
    for i in range(0,10):
        lower = int(math.pow(i,digit))
        upper = len(str(lower*9))
        upper = lower*upper
        limits.append([i,lower,upper])
genLimits()

def maxNumInNum(n):
    return int(max(list(str(n))))

ans=[]
for i in  range(limits[2][1],limits[9][2]+1):
    if i >= limits[maxNumInNum(i)][1]:
        if i == sumOfDigitsPow(i):
            ans.append(i)

print(ans,sum(ans))
