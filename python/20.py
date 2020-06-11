def mul(lst, n):
    carry=0
    for i in range(len(lst)-1,-1,-1):
        prod = lst[i]*n + carry
        lst[i] = prod
        if(prod>9):
            lst[i]=prod%10
            carry = prod//10
        else:
            carry=0
    if carry>0:
        lst = [int(i) for i in list(str(carry))] + lst
    return lst


result = [1]
for i in range(2,101):
    result = mul(result,i)

print(sum(result))

############## Method two

fact=1
for i in range(1,101):
    fact*=i
print(sum([int(i) for i in str(fact)]))