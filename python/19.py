isLeap = 0
days = [31,28 + isLeap,31,30,31,30,31,31,30,31,30,31]
sundays = 0

currentDay =1
expectedRemainder = 6

for i in range(1,101):
    isLeap=0
    if i%4==0 or i%100==0:  isLeap=1
    for j in days:
        if (currentDay + j)%7 == expectedRemainder:
            expectedRemainder=1
            currentDay=1
            sundays+=1
        else:
            currentDay += j

print(sundays)