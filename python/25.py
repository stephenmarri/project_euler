a=1
b=1
c=a+b
counter=2
while len(str(c))!=1000:
    a=b
    b=c
    c=a+b
    counter+=1

print(counter+1)
