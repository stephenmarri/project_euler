result=0
fresult=set()

def containsZero(a):
    return '0' in str(a)

def once(a):
    n=[0]*9
    for i in range(0,len(str(a))):
        n[int(str(a)[i])-1]+=1
        if n[int(str(a)[i])-1]>1:    break
    return not(max(n)-1)

for one in range(1,100):
        for two in range(1000//(10**(len(str(one))-1)),10000//(10**(len(str(one))-1))):
            if once(two):
                if once( int( str(one)+str(two) ) ):
                    if not containsZero(two):
                        prod=one*two
                        if once( int( str(one)+str(two)+str(prod) ) ):
                            if not containsZero(prod):
                                if once(prod) and len(str(prod))==4:
                                    result+=1
                                    fresult.add(prod)
                                    print(str(one) + '-->' + str(two) + ' = ' + str(prod))

print(result)
print("sum: " + str(sum(fresult)))
