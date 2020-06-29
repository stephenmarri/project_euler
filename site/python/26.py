import  math
def giveRemainder(num):
    divident = math.pow(10,len(str(num)))
    dividentArr = [divident]
    result = 0

    while 1:
        remainder = divident % num
        quotient = divident // num

        if remainder==0:
            break
        else:
            divident = remainder * 10

        if divident in dividentArr:
            result = len(dividentArr) - dividentArr.index(divident)
            break
        else:
            dividentArr.append(divident)

    return result

result = 0
for i in range(2,1001):
    ans = giveRemainder(i)
    result = result if result > ans else i

print(result)