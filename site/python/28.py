sum=0
for i in range(3,1003,2):
    a=i*i
    b=a-(i-1)
    c=b-(i-1)
    d=c-(i-1)
    sum+=(a+b+c+d)

print(sum+1)