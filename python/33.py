def hcf(a,b):
    if a==0:
        return b
    return hcf(b%a,a)

def rep(a,b,c,d):
    if a==c or a==d:
        return b,c+d-a
    elif b==c or b==d:
        return a, c+d-b

result=0
num=1
den=1
for i in range(11,100):
    for j in range(i+1,100):
        b,a,d,c=i%10,int(i/10),j%10,int(j/10)
        if ( i%10> 0 and j%10 > 0 ):
            if any(k in str(i) for k in str(j)) :
                na,nb=rep(a,b,c,d)
                if i==(j*(na))/(nb):
                    print(str(i)+'/'+str(j) )
                    num*=i
                    den*=j
                    result+=1
print(int(den/hcf(num,den)))



