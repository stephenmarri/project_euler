import time
stime=time.time()

def isPandigital(n):
    for i in str(n):
        if p[int(i)]==1:
            return False
        p[int(i)]+=1
    return True

def genNumbers(n):
    for i in range(10):
        yield n*(i+1)

rCount=0
rs=[]
for k in range(9999,9000,-1):
    p = [0] * 10
    r=""
    p[0]=1
    for i in genNumbers(k):
        r=r+str(i)
        if isPandigital(i)==False:
            break
        if min(p)==1:
            print(str(k)+'-->--' + str(i)+'>>'+r)
            rs.append(int(r))
            rCount+=1
            break
print(rCount)
print(rs)
print(max(rs))

print(time.time()-stime)



