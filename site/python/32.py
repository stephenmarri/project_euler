a=list()
a=[1,2,3,4,5,6,7,8,9]
result=0

pos = []
def possib():
    for c in [0, 1, 2]:
        for d in [0, 1, 2]:
            if c != d:
                for e in [0, 1, 2]:
                    if d != e and c != e:
                        pos.append(list((c, d, e)))
possib()


for i in a:

    levelTwo = list(range(1,10))
    levelTwo.remove(i)

    for j in levelTwo:
        levelThree = list(levelTwo)
        levelThree.remove(j)

        for k in levelThree:
            levelFour=list(levelThree)
            levelFour.remove(k)
            for l in levelFour:
                levelFive=list(levelFour)
                levelFive.remove(l)
                for m in levelFive:
                    for q in range(0,2):
                        a,b=i,j
                        r=[0,0,0]
                        r=k,l,m
                        u=r
                        if q==1:
                            a,b=j,i

                        for s in range(0,len(pos)):
                            r=u[pos[s][0]],u[pos[s][1]],u[pos[s][2]]
                            print(str(a) + str(b) + 'x' + str(r[0]) + str(r[1]) + str(r[2]) + '=' + str(int(str(a) + str(b)) * int(str(str(r[0]) + str(r[1]) + str(r[2])))))
                            result += 1
    levelTwo.clear()
print(result)