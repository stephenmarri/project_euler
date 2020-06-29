muls = [2]

for i in range(1,1000):
    carry = 0
    for x in range(len(muls)-1,-1,-1):
        muls[x]=muls[x]+muls[x] + carry
        if muls[x] >=10:
            carry = muls[x]//10
            muls[x]=muls[x]%10
        else:
            carry=0
    if carry>0:
        muls.insert(0,carry)
print(sum(muls))

#method two
s=0
for i in str(2**1000):
    s+=int(i)
print(s)