    sum=0

i,j,k,l,m,n,o=0,0,0,0,0,0,0

while i<=200:
    j=i
    while j<=200:
        k=j
        while k<=200:
            l=k
            while l<=200:
                m=l
                while m<=200:
                    n=m
                    while n<=200:
                        o = n
                        while o<=200:
                            sum+=1
                            o+=2
                        n+=5
                    m+=10
                l+=20
            k+=50
        j+=100
    i+=200

print(sum)