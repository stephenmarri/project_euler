sum=0

i,j,k,l,m,n,o=0,0,0,0,0,0,0

while i<=200:
    j, k, l, m, n, o = 0, 0, 0, 0, 0, 0
    while i+j<=200:
        k, l, m, n, o = 0, 0, 0, 0, 0
        while i+j+k<=200:
            l, m, n, o = 0, 0, 0, 0
            while i+j+k+l<=200:
                m, n, o = 0, 0, 0
                while i+j+k+l+m<=200:
                    n, o = 0, 0
                    while i+j+k+l+m+n<=200:
                        o = 0
                        while i+j+k+l+m+n+o<=200:
                            sum+=1
                            o+=2
                        n+=5
                    m+=10
                l+=20
            k+=50
        j+=100
    i+=200

print(sum)