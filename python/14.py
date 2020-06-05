lengths = {2: 2}
maxLength = 2
maxNumber = 2

for i in range(1000000,500000,-1):
    _len = 0
    number = i

    while number > 0:

        if number in lengths:
            _len+=lengths[number]
            lengths[i]=_len
            break
        else:
            if number % 2 == 0:
                number /= 2
            else:
                number = 3*number + 1
            _len+=1

    if _len > maxLength:
        maxLength = _len
        maxNumber = i

print(maxLength,maxNumber)

