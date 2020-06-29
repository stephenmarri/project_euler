ones  = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
ties  = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

onesCount=0
teensCount=0

for i in ones:
    onesCount += len(i)
for i in teens:
    teensCount += len(i)

tillHundred=onesCount+teensCount
for i in ties:
    tillHundred += (len(i)*10 + onesCount)

result = tillHundred
for i in ones:
    result += (((len(i)+len('hundredAnd'))*100 -3) + tillHundred)

print(result + len('oneThousand'))
