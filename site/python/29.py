import  math
ans =[]
for i in range(2,101):
    for j in range(2,101):
        ans.append(math.pow(i,j))

print(len(set(ans)))