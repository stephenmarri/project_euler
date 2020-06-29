grid = 20
routes = [[0]*(grid+1) for i in range(grid+1)]

def branchSum(x,y):
    if x>grid or y> grid:
        return 0
    if x == grid or y == grid:
        r = x if y ==  grid else y
        if r+1 == grid:
            return 1

    if routes[x][y] > 0:
        return routes[x][y]

    routes[x][y]=branchSum(x+1,y)+branchSum(x,y+1)

    return routes[x][y]

print(branchSum(0,0))




