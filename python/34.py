import time
start_time = time.time()

def fac(i):
    if i==1 or i==0:
        return 1
    else:
        return i*fac(i-1)

def digitFactorial(i):
    sum=0
    for j in str(i):
        sum+=fac(int(j))
        if sum > i:
            return 0
    return sum

nums=list(range(1,10))
iterator=0
result=0
sum=0

for l in range(0,len(nums)):
    print(' > ' + str(nums[iterator]) + ' > ')
    ulimit=fac(nums[iterator])*len(str(fac(nums[iterator])))
    for i in range(fac(nums[iterator]),fac(nums[iterator]+1)):
        if i < nums[iterator]*10**(len(str(i))-1 if len(str(i))>1 else 1) and i <2540160 and i<=ulimit and str(nums[iterator]) in list(str(i)):
            if not (any(k in str(list(range(nums[iterator]+1,10))) for k in str(i)) ):
                result+=1
                if digitFactorial(i)==i:
                    print(i )
                    sum+=sum+i
    iterator+=1
print("-->> ")
print(result)
print(sum)

print("--- %s seconds ---" % (time.time() - start_time))
